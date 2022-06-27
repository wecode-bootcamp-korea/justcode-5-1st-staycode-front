import React, { useEffect, useState } from 'react';
import styles from './DetailRoom.module.scss';
import DetailSearchBar from '../../components/DetailSearchBar/DetailSearchBar';
import DetailFqa from '../../components/DetailFqa/DetailFqa';
import Slider from '../../components/DetailSlide/Slider';
import { useParams } from 'react-router-dom';

function DetailRoom() {
  const buttonOnOff = true;
  const params = useParams();
  const { name, roomid } = params;

  //데이터
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetch('', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setRoomData(data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>B O O K I N G</h1>
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
      <div className={styles.featuresBox}>특징</div>
      <div className={styles.amenities}>어매니티스</div>
      <DetailFqa roomData={roomData} />
    </div>
  );
}
export default DetailRoom;
