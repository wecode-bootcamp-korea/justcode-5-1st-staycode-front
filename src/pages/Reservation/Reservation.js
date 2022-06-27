import React from 'react';
import './Reservation.scss';

function Reservation() {
  return (
    <div className="wrap">
      <div>
        <h2 className="bold">B O O K I N G</h2>
      </div>
      <div className="head-wrap">
        <div className="head-left">
          <h1>스테이보름</h1>
        </div>
        <div className="head-center">날짜를 선택해주세요.</div>
        <div className="head-right">
          <h1>₩460,000</h1>
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
            <p>스테이 보름 / 기본형</p>
          </div>
        </div>
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>예약일</p>
          </div>
          <div className="input-component-right">
            <p>2022-07-25 ~ 2022-07-261 1박</p>
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>이름</p>
          </div>
          <div className="input-component-right">
            <input />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>휴대전화</p>
          </div>
          <div className="input-component-right">
            <input />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>이메일</p>
          </div>
          <div className="input-component-right">
            <input />
          </div>
        </div>
        {/* input-comp */}
        {/* input-comp */}
        <div className="input-component">
          <div className="input-component-left">
            <p>인원 (최대 3명)</p>
          </div>
          <div className="input-component-right">
            <select>
              <option value="1명">1명</option>
              <option value="2명">2명</option>
              <option value="3명">3명</option>
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
            <textarea textarea id="ask" name="ask" rows="5" />
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
                스테이 보름 / 기본형 ₩460000 * 1 박
              </span>
              <span style={{ marginLeft: 'auto' }} className="fontgray">
                ₩460,000
              </span>
            </p>
            <div className="input-component-price">
              <h1>₩460,000</h1>
            </div>
          </div>
        </div>
        {/* input-comp */}
        <div className="button-wrap">
          <div className="button">
            <p>결제하기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
