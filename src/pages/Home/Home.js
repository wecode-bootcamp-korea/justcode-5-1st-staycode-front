import React, { useState, useEffect } from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';

import css from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [imgList, setImgList] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/data/slidelist.json')
      .then(res => res.json())
      .then(data => setImgList(data));
  }, [setImgList]);
  return (
    <div>
      <div className={css.main}>
        <div className={css.main_container}>
          <div className={css.main_contents}>
            <MainSlider mainImgList={imgList.main_img} />
            <div className={css.promotion_slider}>promotionslider</div>
            <div className={css.event_slider}>eventslider</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
