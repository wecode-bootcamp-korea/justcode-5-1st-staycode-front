import React, { useState, useRef, useEffect } from 'react';
import styles from './Slider.module.scss';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import Slide from './Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const totalSlides = 2;

function Slider(props) {
  const { sliderContents } = props;
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
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <div className={styles.headerImg}>
      <div className={styles.sliderContainer}>
        <div className={styles.slideBox} ref={slideRef}>
          {slideList.map((event, idx) => (
            <Slide img={event} key={idx} />
          ))}
        </div>
      </div>
      <button className={styles.btn1} onClick={prevSlide}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className={styles.btn2} onClick={nextSlide}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
      {sliderContents === true && (
        <div className={styles.headercontents}>
          <div className={styles.pick}>
            <span>PICK</span>
            <span>PROMOTION</span>
          </div>
          <div className={styles.nameInHeader}>
            <div>숙소이름</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
