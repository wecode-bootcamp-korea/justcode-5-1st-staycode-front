import React, { useEffect, useState } from 'react';
import './Reservation.scss';
import { useParams, useLocation, Link } from 'react-router-dom';
import DatemodalInReservation from '../../components/Modal/DatemodalInReservation';
import { useNavigate } from 'react-router-dom';

function Reservation() {
  const navigate = useNavigate();
  const params = useParams();
  const { roomid } = params;

  const location = useLocation();
  const { search } = location;

  const token = localStorage.getItem('token');

  console.log('token', token);

  //데이터
  const [dateModal, setDateModal] = useState(false);
  const [roomData, setRoomData] = useState();
  const [accomData, setAccomData] = useState();

  const [startData, setStartData] = useState();
  const [endData, setEndData] = useState();
  const [stayDays, setStayDays] = useState(0);
  const [startDataTime, setStartDataTime] = useState();
  const [endDataTime, setEndDataTime] = useState();

  const [inputs, setInputs] = useState({
    // user_id: '',
    reservation_start: '',
    reservation_end: '',
    price: '',
    room_id: roomid,
    guest: 1,
    special_requests: '',
    booker: '',
    phone: '',
    email: 'app01@naver.com',
  });

  const {
    room_id,
    // user_id,
    reservation_start,
    reservation_end,
    price,
    guest,
    special_requests,
    booker,
    phone,
    email,
  } = inputs; // 비구조화 할당을 통해 값 추출

  function showDateModal() {
    setDateModal(true);
  }

  useEffect(() => {
    console.log('roomid', roomid);
    fetch(`http://localhost:8000/room/${roomid}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setRoomData(res.data[0]);
        console.log(res.data[0]);
        fetch(
          `http://localhost:8000/accomodation/${res.data[0]?.accomodation_id}`,
          {
            method: 'GET',
          }
        )
          .then(res => res.json())
          .then(res => {
            setAccomData(res.data[0]);
            console.log(res.data[0]);
          })
          .catch(err => {
            console.error(err);
          });
      })

      .catch(err => {
        console.error(err);
      });
  }, [roomid]);

  useEffect(() => {
    console.log('startData', startData);
    console.log(`startData ${typeof startData}`);
    console.log('endData', endData);
    console.log(`endData ${typeof endData}`);

    console.log('startDataTime', startDataTime);
    console.log(`startDataTime ${typeof startDataTime}`);
    console.log('endDataTime', endDataTime);
    console.log(`endDataTime ${typeof endDataTime}`);

    const millesec = Date.parse(endDataTime) - Date.parse(startDataTime);
    const days = Math.round(millesec / (1000 * 60 * 60 * 24)) - 1;
    console.log('days', days);
    setStayDays(days);

    if (roomData?.price && days) {
      setInputs({
        ...inputs, // 기존의 input 객체를 복사한 뒤
        price: days * roomData?.price, // name 키를 가진 값을 value 로 설정
        reservation_end: endData,
        reservation_start: startData,
      });
    }
  }, [startData, endData, startDataTime, endDataTime]);

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
    console.log(inputs);
  };

  function submitReservation() {
    const reservationAPI = `http://localhost:8000/reservation`;
    console.log(inputs);
    fetch(reservationAPI, {
      method: 'POST',
      body: JSON.stringify({
        room_id,
        reservation_start,
        reservation_end,
        price,
        guest,
        special_requests,
        booker,
        phone,
        email,
      }),
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then(res => {
        console.error(res);
        alert(`예약 완료 ${JSON.stringify(res)}`);
        navigate(`/`);
      })
      .catch(err => {
        console.error(err);
        alert(err);
      });
  }

  return (
    <div className="wrap">
      <div>
        <h2 className="bold">B O O K I N G</h2>
      </div>
      <div className="head-wrap">
        <div className="head-left">
          <h1>{accomData?.name}</h1>
        </div>
        <div className="head-center" onClick={showDateModal}>
          {startData
            ? `${startData} ~ ${endData} ${stayDays}박`
            : `날짜를 선택해주세요.`}
        </div>
        <div className="head-right">
          <h1>₩{roomData?.price}</h1>
        </div>
      </div>
      <div className="input-wrap">
        <div className="input-header">
          <h2>RESERVATION</h2>
        </div>

        <div className="input-component">
          <div className="input-component-left">
            <p>예약 스테이</p>
          </div>
          <div className="input-component-right">
            <p>{roomData?.name} / 기본형</p>
          </div>
        </div>
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>예약일</p>
          </div>
          <div className="input-component-right">
            <p>
              {startData} ~ {endData} {stayDays}박
            </p>
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>이름</p>
          </div>
          <div className="input-component-right">
            <input name="booker" onChange={onChange} value={booker} />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>휴대전화(숫자만)</p>
          </div>
          <div className="input-component-right">
            <input name="phone" onChange={onChange} value={phone} />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>이메일</p>
          </div>
          <div className="input-component-right">
            <input
              placeholder="app01@naver.com"
              name="email"
              onChange={onChange}
              value={email}
            />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>인원 (최대 {roomData?.max_guest}명)</p>
          </div>
          <div className="input-component-right">
            <select name="guest" onChange={onChange} value={guest}>
              {roomData &&
                [...Array(roomData?.max_guest)].map((n, index) => {
                  return (
                    <option value={String(index + 1)}>{index + 1}명</option>
                  );
                })}
            </select>
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>동의사항</p>
          </div>
          <div className="input-component-right">
            <div className="agree-wrap">
              <div className="h4m">
                <h4>금연안내</h4>
              </div>
              <p>
                숙소 내 모든 구역에서는 전자 담배를 포함하여 절대 금연입니다.
                위반 시 즉각 퇴실 조치와 추가 청소비를 청구합니다.
              </p>
              <div className="agree-box-div">
                <p>필수</p>
                <input className="check-input" type="checkbox" id="cb1" />
                <p>동의</p>
              </div>
            </div>
            <div className="agree-wrap">
              <div className="h4m">
                <h4>변상 규정</h4>
              </div>
              <p>
                숙소 내 기물 파손 및 침구 오염 등이 생길 경우 호스트에게 반드시
                알려주셔야 하며 퇴실점검 이후 협의 되지 않은 확인된 파손, 오염,
                분실에 대한 배상비용을 청구합니다.
              </p>
              <div className="agree-box-div">
                <p>필수</p>
                <input className="check-input" type="checkbox" id="cb1" />
                <p>동의</p>
              </div>
            </div>
            <div className="agree-wrap">
              <div className="h4m">
                <h4>예약 확정 안내</h4>
              </div>
              <p>
                객실 정비를 위해 예약일 전후로 객실을 운영되지 않을 수 있습니다.
                실시간 예약 확정이 아니며 예약 신청 후 영업시간 기준 3시간
                이내에 예약 확정 여부를 안내해드립니다.
              </p>
              <div className="agree-box-div">
                <p>필수</p>
                <input className="check-input" type="checkbox" id="cb1" />
                <p>동의</p>
              </div>
            </div>
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>요청사항</p>
          </div>
          <div className="input-component-right">
            <textarea
              name="special_requests"
              onChange={onChange}
              value={special_requests}
              rows="5"
            />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>예상 결제금액</p>
          </div>
          <div className="input-component-right input-component-right-price">
            <p>
              <span className="fontgray">객실 요금</span>
              <span style={{ marginLeft: '10px' }}>
                {' '}
                {roomData?.name} / 기본형 ₩{roomData?.price} * {stayDays} 박
              </span>
              <span style={{ marginLeft: 'auto' }} className="fontgray">
                ₩{price}
              </span>
            </p>
            <div className="input-component-price">
              <h1>₩{price}</h1>
            </div>
          </div>
        </div>
        {/* input-comp */}
        <div className="button-wrap">
          <div
            className="button"
            onClick={submitReservation}
            style={{ cursor: 'pointer' }}
          >
            <p>결제하기</p>
          </div>
        </div>
      </div>
      {dateModal ? (
        <DatemodalInReservation
          setDateModal={setDateModal}
          setStartData={setStartData}
          setEndData={setEndData}
          setStartDataTime={setStartDataTime}
          setEndDataTime={setEndDataTime}
        />
      ) : null}
    </div>
  );
}

export default Reservation;
