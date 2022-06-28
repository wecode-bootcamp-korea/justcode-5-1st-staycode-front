import React, { useEffect, useState } from 'react';
import styles from './DetailRoom.module.scss';
import DetailSearchBar from '../../components/DetailSearchBar/DetailSearchBar';
import DetailFqa from '../../components/DetailFqa/DetailFqa';
import Slider from '../../components/DetailSlide/Slider';
import { useParams, useLocation, Link } from 'react-router-dom';

function DetailRoom() {
  const buttonOnOff = true;
  const params = useParams();
  const { name } = params;

  //search를 이용해서 checkin,checkout 정보 reservation에 전달
  const location = useLocation();
  const { search } = location;

  //데이터
  const [roomData, setRoomData] = useState([]);
  //룸데이터 get
  useEffect(() => {
    fetch(`/`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRoomData(data);
      });
  }, []);

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
            <p className={styles.roomName}>방이름</p>
            <p className={styles.roomContent}>방내용</p>
            <div className={styles.roomInfo}>
              <p>체크인,체크아웃</p>
              <p>기준인원</p>
              <p>객실면적</p>
            </div>
          </div>
        </div>
        <Slider silderContents={false} />
      </div>
      {/* <div className={styles.featuresBox}>특징</div>
      <div className={styles.amenities}>어매니티스</div> */}
      <Link to={`/reservation${search}`}>
        <button className={styles.payBtn}>결제하기</button>
      </Link>
      <DetailFqa roomData={roomData} />
    </div>
  );
}
export default DetailRoom;
