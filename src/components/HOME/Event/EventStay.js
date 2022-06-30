import React, { useState, useEffect } from 'react';
import css from './EventStay.module.scss';
import EventInfo from './EventInfo';
import SlideButton from '../MainSlider/SliderButton';

function EventStay({ eventList }) {
  const [curIdx, setCurIdx] = useState(0);

  function handleMainSlider(curIdx) {
    if (curIdx === eventList.length - 2) {
      return;
    } else if (curIdx < 0) {
      return;
    }
    setCurIdx(curIdx);
  }

  function handleSwitching(dir) {
    handleMainSlider(curIdx + dir);
  }

  function sortListWithEnd(list) {
    if (list) {
      list = list.sort(function (a, b) {
        return new Date(a.event_end) - new Date(b.event_end);
      });
    }
    if (list) {
      for (let i = 0; i < list.length; i++) {
        let temp = new Date(list[0].event_end) - new Date();
        if (temp < 0) {
          list.push(list.shift());
        }
      }
    }
  }

  sortListWithEnd(eventList);

  return (
    <div className={css.slider}>
      <div className={css.event_title}>EVENT</div>
      <div className={css.slider_list}>
        <ul
          className={css.slider_content}
          style={{ transform: `translateX(-${440 * curIdx}px)` }}
        >
          {eventList &&
            eventList.map(event => {
              return (
                <EventInfo
                  key={event.id}
                  main_image_url={event.main_image_url}
                  title={event.title}
                  location={event.location}
                  content={event.content}
                  event_start={event.event_start}
                  event_end={event.event_end}
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

export default EventStay;
