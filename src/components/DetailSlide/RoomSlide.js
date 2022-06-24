import React from 'react';
import styles from './RoomSlide.module.scss';

function RoomSlide({ img }) {
  return (
    <div className={styles.imgWrapper}>
      <img className={styles.img} src={img} alt="룸이미지" />
      <div className={styles.contents}>
        <div className={styles.namePrice}>
          <span>스탠다드</span>
          <span>400,000</span>
        </div>
        <div>기준 2명(최대 3명)</div>
      </div>
    </div>
  );
}

export default RoomSlide;
