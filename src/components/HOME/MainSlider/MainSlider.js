import React, { useState, useRef } from 'react';
import css from './MainSlider.module.scss';
import MainSliderImg from './MainSliderImg';
import SlideButton from './SliderButton';

function MainSlider({ mainImgList }) {
  const [curIdx, setCurIdx] = useState(0);
  const [startX, setStartX] = useState();
  const [endX, setEndX] = useState();

  function onDragStart(e) {
    e.preventDefault();
    setStartX(e.pageX);
  }

  function onDragEnd(e) {
    setEndX(e.pageX);
    if (startX - endX > 100) {
      if (curIdx === mainImgList.length - 1) {
        setCurIdx(0);
      } else {
        setCurIdx(curIdx + 1);
      }
    } else if (endX - startX > 100) {
      if (curIdx < 1) {
        setCurIdx(mainImgList.length - 1);
      } else {
        setCurIdx(curIdx - 1);
      }
    }
  }

  function handleMainSlider(curIdx) {
    if (curIdx === mainImgList.length) {
      curIdx = 0;
    } else if (curIdx < 0) {
      curIdx = mainImgList.length - 1;
    }
    setCurIdx(curIdx);
  }

  function handleSwitching(dir) {
    handleMainSlider(curIdx + dir);
  }

  return (
    <div className={css.slider}>
      <div className={css.slider_list}>
        <ul
          className={css.slider_content}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          style={{ transform: `translateX(-${100 * curIdx}vw)` }}
        >
          {mainImgList &&
            mainImgList.map(mainImg => {
              return (
                <MainSliderImg
                  key={mainImg.id}
                  main_image_url={mainImg.main_image_url}
                  sub_image_url={mainImg.sub_image_url}
                  content={mainImg.content}
                />
              );
            })}
        </ul>
      </div>
      <div className={css.bg_pager}>
        <div className={css.bg_pager_left}>
          <span className={css.bg_pager_cur}>
            {curIdx >= 9 ? (
              <span>{curIdx + 1}</span>
            ) : (
              <span>0{curIdx + 1}</span>
            )}
          </span>
          <span className={css.bg_pager_slash}>/</span>
          <span className={css.bg_pager_all}>
            {mainImgList && mainImgList.length >= 9 && (
              <>{mainImgList.length}</>
            )}
            {mainImgList && mainImgList.length < 9 && (
              <>0{mainImgList.length}</>
            )}
          </span>
        </div>
        <div className={css.bg_pager_right}>
          <SlideButton direction="Prev" onClick={() => handleSwitching(-1)} />
          <span>|</span>
          <SlideButton direction="Next" onClick={() => handleSwitching(1)} />
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
