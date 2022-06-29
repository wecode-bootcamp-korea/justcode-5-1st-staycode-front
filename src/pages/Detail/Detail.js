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

  //숙소 데이터 패치
  useEffect(() => {
    fetch(`http://localhost:8000/accomodation/${name}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        console.log('fetch');
        setAccoData(res.data);
        console.log('fetch_end');
      });
  }, [name]);
  if (!accoData) {
    return <div>데이터 없음</div>;
  }
  return (
    <div className={styles.container}>
      <Slider
        sliderContents={true}
        images={accoData[0].images}
        name={accoData[0].name}
        totalSlides={4}
      />
      <DetailSearchBar buttonOnOff={buttonOnOff} />
      {/* 룸 슬라이더로 roomdata 전달 */}
      <RoomSlider name={name} accoData={accoData} search={search} />
      <div className={styles.accoName}>{accoData[0].name}</div>
      <div className={styles.centerLine} />
      <div className={styles.content}>{accoData[0].content}</div>
      <div className={styles.address}>{accoData[0].location}</div>
      <div className={styles.map}>
        <Map accoData={accoData} />
      </div>
      <DetailFqa
        roomData={[accoData[0].rooms[0], accoData[0].rooms[1]]}
        onOff={true}
      />
    </div>
  );
}

export default Detail;
