import React, { useState, useEffect } from 'react';
import styles from './Detail.module.scss';
import DetailSearchBar from '../../components/DetailSearchBar/DetailSearchBar';
import DetailFqa from '../../components/DetailFqa/DetailFqa';
import Slider from '../../components/DetailSlide/Slider';
import RoomSlider from '../../components/DetailSlide/RoomSlider';
import { useLocation, useParams } from 'react-router-dom';
import Map from '../../components/Map/Map';

function Detail() {
  const buttonOnOff = false;
  const params = useParams();
  const { name } = params;
  const location = useLocation();
  const { search } = location;

  //데이터 get
  const [accoData, setAccoData] = useState();
  const [roomData, setRoomData] = useState();

  //숙소 데이터 패치
  useEffect(() => {
    fetch(`http://localhost:8000/findstay/${name}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        console.log('fetch');
        setAccoData(res);
        console.log('fetch_end');
      });
  }, [name]);
  console.log(accoData);

  //룸 데이터 패치
  useEffect(() => {
    fetch(`http://localhost:8000/findstay/${name}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        console.log('fetch');
        setRoomData(res);
        console.log('fetch_end');
      });
  }, [name]);
  console.log(roomData);

  return (
    <div className={styles.container}>
      <Slider sliderContents={true} />
      <DetailSearchBar buttonOnOff={buttonOnOff} />
      {/* 룸 슬라이더로 roomdata 전달 */}
      <RoomSlider name={name} roomData={roomData} search={search} />
      <div className={styles.accoName}></div>
      <div className={styles.centerLine} />
      <div className={styles.content}></div>
      <div className={styles.address}></div>
      <div className={styles.map}>
        <Map accoData={accoData} />
      </div>
      <DetailFqa roomData={roomData} />
    </div>
  );
}

export default Detail;
