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
    }
    if (list) {
      for (let i = 0; i < list.length; i++) {
        let temp = new Date(list[0].pro_end) - new Date();
        if (temp < 0) {
          list.push(list.shift());
        }
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
                    accomodation_id={pro.accomodation_id}
                    main_image_url={pro.pro_detail_image_url}
                    name={pro.name}
                    title={pro.title}
                    content={pro.content}
                    city={pro.city}
                    stay_type={pro.stay_type}
                    guests={pro.guests}
                    prices={pro.prices}
                    //max_guest={pro.max_guest}
                    //price={pro.price}
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
