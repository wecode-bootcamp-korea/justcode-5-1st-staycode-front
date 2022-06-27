import React, { useState, useRef, useEffect } from 'react';
import styles from './RoomSlider.module.scss';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import RoomSlide from './RoomSlide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
const totalSlides = 2;

function RoomSlider(props) {
  const { name, roomData, search } = props;
  //데이터 셋 get
  const [slideList, setSlideList] = useState([img1, img2, img3]);

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
          {slideList.map((event, idx) => (
            <RoomSlide
              img={event}
              key={idx}
              name={name}
              roomData={roomData}
              search={search}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomSlider;
