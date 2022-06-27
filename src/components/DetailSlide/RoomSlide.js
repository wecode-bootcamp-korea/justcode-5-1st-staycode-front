import React from 'react';
import styles from './RoomSlide.module.scss';
import { Link } from 'react-router-dom';

function RoomSlide({ img, name, roomData, search }) {
  return (
    <div className={styles.imgWrapper}>
      {/* 요기 링크 룸데이터의 id 값 추출해서 대입하기 */}
      <Link to={`/findstay/${name}/${search}`}>
        <img className={styles.img} src={img} alt="룸이미지" />
        <div className={styles.contents}>
          <div className={styles.namePrice}>
            <span>스탠다드</span>
            <span>400,000</span>
          </div>
          <div>기준 2명(최대 3명)</div>
        </div>
      </Link>
    </div>
  );
}

export default RoomSlide;
