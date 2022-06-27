import React, { useState, useEffect } from 'react';
import css from './Promotion.module.scss';
import PromotionInfo from './PromotionInfo';
import SlideButton from '../MainSlider/SliderButton';

function Promotion({ promotionList }) {
  const [curIdx, setCurIdx] = useState(0);

  function handleMainSlider(curIdx) {
    if (curIdx === promotionList.length) {
      curIdx = 0;
    } else if (curIdx < 0) {
      curIdx = promotionList.length - 1;
    }
    setCurIdx(curIdx);
  }

  function handleSwitching(dir) {
    handleMainSlider(curIdx + dir);
  }

  function sortListWithEnd(list) {
    if (list) {
      list = list.sort(function (a, b) {
        return new Date(a.pro_end) - new Date(b.pro_end);
      });
      for (let i = 0; i < list.length; i++) {
        let temp = list.pop();
        list.push(temp);
      }
    }
  }

  sortListWithEnd(promotionList);

  return (
    <div className={css.promotion_container}>
      <div className={css.slider}>
        <div className={css.slider_list}>
          <ul
            className={css.slider_content}
            style={{ transform: `translateX(-${1290 * curIdx}px)` }}
          >
            {promotionList &&
              promotionList.map(pro => {
                return (
                  <PromotionInfo
                    key={pro.id}
                    main_image_url={pro.main_image_url}
                    accomodation_id={pro.accomodation_id}
                    title={pro.title}
                    content={pro.content}
                    location={pro.location}
                    stay_type={pro.stay_type}
                    max_guest={pro.max_guest}
                    price={pro.price}
                    pro_start={pro.pro_start}
                    pro_end={pro.pro_end}
                  />
                );
              })}
          </ul>
        </div>
        <div className={css.page_num}>
          <span className={css.page_num_cur}>
            {curIdx >= 9 ? (
              <span>{curIdx + 1}</span>
            ) : (
              <span>0{curIdx + 1}</span>
            )}
          </span>
          <span className={css.page_slash}>/</span>
          <span className={css.page_num_all}>
            {promotionList && promotionList.length >= 9 && (
              <>{promotionList.length}</>
            )}
            {promotionList && promotionList.length < 9 && (
              <>0{promotionList.length}</>
            )}
          </span>
        </div>
        <div className={css.slider_btn}>
          <SlideButton direction="Prev" onClick={() => handleSwitching(-1)} />
          <span>|</span>
          <SlideButton direction="Next" onClick={() => handleSwitching(1)} />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
