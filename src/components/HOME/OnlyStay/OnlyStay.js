import React, { useState, useEffect } from 'react';
import css from './OnlyStay.module.scss';
import OnlyStayImg from './OnlyStayImg';
import SlideButton from '../MainSlider/SliderButton';

function OnlyStay({ mainImgList }) {
  const [curIdx, setCurIdx] = useState(0);

  function handleMainSlider(curIdx) {
    if (curIdx === mainImgList.length - 2) {
      return;
    } else if (curIdx < 0) {
      return;
    }
    setCurIdx(curIdx);
  }

  function handleSwitching(dir) {
    handleMainSlider(curIdx + dir);
  }
  return (
    <div className={css.slider}>
      <div className={css.onlystay_title}>오직 스테이폴리오에서만</div>
      <div className={css.slider_list}>
        <ul
          className={css.slider_content}
          style={{ transform: `translateX(-${440 * curIdx}px)` }}
        >
          {mainImgList &&
            mainImgList.map(mainImg => {
              return (
                <OnlyStayImg
                  key={mainImg.id}
                  main_image_url={mainImg.main_image_url}
                  title={mainImg.title}
                  location={mainImg.location}
                  price={mainImg.price}
                />
              );
            })}
        </ul>
      </div>
      <div className={css.slider_btn}>
        <SlideButton direction="Prev" onClick={() => handleSwitching(-1)} />
        <span>|</span>
        <SlideButton direction="Next" onClick={() => handleSwitching(1)} />
      </div>
    </div>
  );
}

export default OnlyStay;
