import React from 'react';
import styles from './Detail.module.scss';
import DetailSearchBar from '../../components/DetailSearchBar/DetailSearchBar';
import DetailFqa from '../../components/DetailFqa/DetailFqa';
import Slider from '../../components/DetailSlide/Slider';
import RoomSlider from '../../components/DetailSlide/RoomSlider';
import { useParams } from 'react-router-dom';

function Detail() {
  const buttonOnOff = false;
  const params = useParams();
  return (
    <div className={styles.container}>
      <Slider sliderContents={true} />
      <DetailSearchBar buttonOnOff={buttonOnOff} />
      <RoomSlider />
      <div className={styles.accoName}>숙소이름</div>
      <div className={styles.centerLine} />
      <div className={styles.content}>내용</div>
      <div className={styles.address}>주소</div>
      <div className={styles.map}>지도</div>
      <DetailFqa />
    </div>
  );
}

export default Detail;
