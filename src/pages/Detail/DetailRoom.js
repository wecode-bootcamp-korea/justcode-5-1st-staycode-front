import React, { useEffect, useState } from 'react';
import styles from './DetailRoom.module.scss';
import DetailSearchBar from '../../components/DetailSearchBar/DetailSearchBar';
import DetailFqa from '../../components/DetailFqa/DetailFqa';
import Slider from '../../components/DetailSlide/Slider';
import { useParams, useLocation, Link } from 'react-router-dom';

function DetailRoom() {
  const buttonOnOff = true;
  const params = useParams();
  const { roomid } = params;

  //search를 이용해서 checkin,checkout 정보 reservation에 전달
  const location = useLocation();
  const { search } = location;

  //데이터
  const [roomData, setRoomData] = useState();
  useEffect(() => {
    fetch(`http://localhost:8000/room/${roomid}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setRoomData(res.data);
      });
  }, [roomid]);

  if (!roomData) {
    return <div>데이터 없음</div>;
  }

  return (
    <div className={styles.container}>
      <div>
        <h2>B O O K I N G</h2>
      </div>
      <DetailSearchBar buttonOnOff={buttonOnOff} />
      <div className={styles.imgContainer}>
        <div className={styles.contents}>
          <div>
            <p>ROOM INFORMATION</p>
            <p className={styles.roomName}>{roomData[0].name}</p>
            <p className={styles.roomContent}>{roomData[0].content}</p>
            <div className={styles.roomInfo}>
              <p>
                체크인 :{roomData[0].check_in_time} 체크아웃 :
                {roomData[0].check_out_time}
              </p>
              <p>기준인원 : {roomData[0].max_guest}</p>
              <p>객실면적 : {roomData[0].size}m^2</p>
            </div>
          </div>
        </div>
        <Slider
          silderContents={false}
          images={roomData[0].images}
          name={roomData[0].name}
          totalSlides={1}
        />
      </div>
      {/* <div className={styles.featuresBox}>특징</div>
      <div className={styles.amenities}>어매니티스</div> */}
      <Link to={`/reservation/${roomData[0].id}${search}`}>
        <button className={styles.payBtn}>결제하기</button>
      </Link>
      <DetailFqa roomData={[roomData[0]]} />
    </div>
  );
}
export default DetailRoom;
