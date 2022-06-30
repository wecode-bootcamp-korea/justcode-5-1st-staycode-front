import React from 'react';
import styles from './RoomSlide.module.scss';
import { Link } from 'react-router-dom';

function RoomSlide(props) {
  // const roomId=roomData.~  로 받아와서
  const { img, accoData, seq } = props;
  return (
    <div className={styles.imgWrapper}>
      {/* 요기 링크 룸데이터의 id 값 추출해서 대입하기 */}
      <Link to={`/findstay/room/${accoData[0].rooms[seq].id}`}>
        <img className={styles.img} src={img} alt="룸이미지" />
        <div className={styles.contents}>
          <div className={styles.namePrice}>
            <span>{accoData[0].rooms[seq].name}</span>
            <span>{accoData[0].rooms[seq].price}</span>
          </div>
          <div>기준 {accoData[0].rooms[seq].max_guest}명</div>
        </div>
      </Link>
    </div>
  );
}

export default RoomSlide;
