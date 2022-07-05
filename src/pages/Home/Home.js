import React, { useState, useEffect } from 'react';
import MainSlider from '../../components/HOME/MainSlider/MainSlider';
import OnlyStay from '../../components/HOME/OnlyStay/OnlyStay';
import EventStay from '../../components/HOME/Event/EventStay';
import Promotion from '../../components/HOME/Promotion/Promotion';
import css from './Home.module.scss';
import { BASE_URL } from '../../config';

function Home() {
  const [imgList, setImgList] = useState({});
  const [proEventList, setProEventList] = useState({});

  useEffect(() => {
    fetch(`http://${BASE_URL}:3000/data/slidelist.json`)
      .then(res => res.json())
      .then(data => setImgList(data));
  }, [setImgList]);

  useEffect(() => {
    fetch(`http://${BASE_URL}:8000/home`)
      .then(res => res.json())
      .then(data => setProEventList(data));
  }, [setProEventList]);

  /*useEffect(() => {
    fetch('http://localhost:3000/data/event.json')
      .then(res => res.json())
      .then(data => setEventList(data));
  }, [setEventList]);

  useEffect(() => {
    fetch('http://localhost:3000/data/promotion.json')
      .then(res => res.json())
      .then(data => setPromotionList(data));
  }, [setPromotionList]);
  console.log(promotionList);*/

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
            <Promotion promotionList={proEventList.promotion_list} />
            <EventStay eventList={proEventList.event_list} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
