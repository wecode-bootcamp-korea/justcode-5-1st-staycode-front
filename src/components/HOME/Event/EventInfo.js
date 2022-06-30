import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './EventInfo.module.scss';

const EventInfo = ({
  main_image_url,
  title,
  location,
  content,
  event_start,
  event_end,
}) => {
  function calDueDate(event_end) {
    const event_end_date = new Date(event_end);
    const today = new Date();
    const temp = event_end_date - today;
    const due_date = new Date(temp).getDate();

    if (temp >= 0) {
      if (due_date >= 2) {
        const left = 'DAYS\r\nLEFT!';
        return (
          <div className={css.due_date}>
            {due_date} {left}
          </div>
        );
      } else if (due_date == 1) {
        const last = 'LAST\r\nCHANCE!';
        return <div className={css.due_date}>{last}</div>;
      }
    } else {
      const closed = 'CLOSED\r\nEVENT!';
      return <div className={css.due_date}>{closed}</div>;
    }
  }
  return (
    <Link to="/" className={css.link}>
      <li className={css.eventstay_img}>
        <img className={css.main_img} src={main_image_url} alt="main" />
        <div className={css.sub_box}>
          <p className={css.title}>{title}</p>
          <p className={css.location}>{location}</p>
          <p className={css.content}>{content}</p>
          <p className={css.read_more}>자세히 보기</p>
        </div>
        <div className={css.due_date_box}>{calDueDate(event_end)}</div>
      </li>
    </Link>
  );
};

export default EventInfo;
