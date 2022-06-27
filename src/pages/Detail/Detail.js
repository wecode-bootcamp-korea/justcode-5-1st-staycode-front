import React, { useState, useEffect } from 'react';
import styles from './Detail.module.scss';
import DetailSearchBar from '../../components/DetailSearchBar/DetailSearchBar';
import DetailFqa from '../../components/DetailFqa/DetailFqa';
import Slider from '../../components/DetailSlide/Slider';
import RoomSlider from '../../components/DetailSlide/RoomSlider';
import { useParams } from 'react-router-dom';
import Map from '../../components/Map/Map';

function Detail() {
  const buttonOnOff = false;

  const params = useParams();
  const { name } = params;

  //데이터
  const [accoData, setAccoData] = useState([]);
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    fetch('', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setAccoData(data);
      });
  }, []);

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
      <Slider sliderContents={true} />
      <DetailSearchBar buttonOnOff={buttonOnOff} />
      <RoomSlider name={name} roomData={roomData} />
      <div className={styles.accoName}>숙소이름</div>
      <div className={styles.centerLine} />
      <div className={styles.content}>내용</div>
      <div className={styles.address}>주소</div>
      <div className={styles.map}>
        <Map accoData={accoData} />
      </div>
      <DetailFqa roomData={roomData} />
    </div>
  );
}

export default Detail;
