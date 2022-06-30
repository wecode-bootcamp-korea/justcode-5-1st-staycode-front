import React, { useState, useRef, useEffect } from 'react';
import styles from './RoomSlider.module.scss';
import RoomSlide from './RoomSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

//토탈 이미지 셋 백엔드 연동되면 4로 변경
const totalSlides = 1;

function RoomSlider(props) {
  const { name, accoData, search } = props;
  //디테일 페이지 상단 이미지 데이터 셋 props로 받은 거 따로 저장
  const [slideList, setSlideList] = useState([
    accoData[0].rooms[0].images[0].image_url,
    accoData[0].rooms[1].images[0].image_url,
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= totalSlides) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 3}0%)`;
  }, [currentSlide]);
  return (
    <div className={styles.roomFullBox}>
      <div className={styles.roomBack}>
        <div className={styles.roomContent}>
          <div className={styles.roomText}>ROOMS</div>
          <div className={styles.roomIcon}>
            <button onClick={prevSlide}>
              <FontAwesomeIcon size="5x" icon={faChevronLeft} />
            </button>
            <button onClick={nextSlide}>
              <FontAwesomeIcon size="5x" icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.roomImg}>
        <div className={styles.slideBox} ref={slideRef}>
          {slideList.map((img, index) => (
            <RoomSlide
              img={img}
              name={name}
              accoData={accoData}
              search={search}
              seq={slideList.indexOf(img)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomSlider;
