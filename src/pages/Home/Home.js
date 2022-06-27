import React, { useState, useEffect } from 'react';
import MainSlider from '../../components/HOME/MainSlider/MainSlider';
import OnlyStay from '../../components/HOME/OnlyStay/OnlyStay';
import EventStay from '../../components/HOME/Event/EventStay';
import Promotion from '../../components/HOME/Promotion/Promotion';

import css from './Home.module.scss';

function Home() {
  const [imgList, setImgList] = useState({});
  const [eventList, setEventList] = useState({});
  const [promotionList, setPromotionList] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/data/slidelist.json')
      .then(res => res.json())
      .then(data => setImgList(data));
  }, [setImgList]);

  useEffect(() => {
    fetch('http://localhost:3000/data/event.json')
      .then(res => res.json())
      .then(data => setEventList(data));
  }, [setEventList]);

  useEffect(() => {
    fetch('http://localhost:3000/data/promotion.json')
      .then(res => res.json())
      .then(data => setPromotionList(data));
  }, [setPromotionList]);

  return (
    <div>
      <div className={css.main}>
        <div className={css.main_container}>
          <div className={css.main_contents}>
            <MainSlider mainImgList={imgList.main_img} />
            <OnlyStay mainImgList={imgList.main_img} />
            <img
              className={css.brand_story}
              src="https://images.prismic.io/stayfolio-production/59350276-3279-411c-8ee8-29fe505edae2_%E1%84%8C%E1%85%A1%E1%86%AB%E1%84%8B%E1%85%AF%E1%86%AF.jpg"
              alt=""
            />
            <Promotion promotionList={promotionList.promotions} />
            <EventStay eventList={eventList.events} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
