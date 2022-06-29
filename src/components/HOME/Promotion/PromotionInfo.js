import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './PromotionInfo.module.scss';

const PromotionInfo = ({
  main_image_url,
  accomodation_id,
  title,
  content,
  location,
  stay_type,
  max_guest,
  price,
  pro_start,
  pro_end,
}) => {
  function calDueDate(pro_end) {
    const pro_end_date = new Date(pro_end);
    const today = new Date();
    const temp = pro_end_date - today;
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
  const price2 = price.toLocaleString();
  return (
    <Link to="/" className={css.link}>
      <li className={css.promotion_img}>
        <div className={css.sub_box}>
          <p className={css.promotion}>PROMOTION</p>
          <p className={css.title}>{title}</p>
          <p className={css.content}>{content}</p>
          <p className={css.accomodation_id}>{accomodation_id}</p>
          <p className={css.location_stay_type}>
            <span className={css.location}>{location} /</span>
            <span className={css.stay_type}> {stay_type}</span>
          </p>
          <p className={css.max_guest}>최대 {max_guest}명</p>
          <p className={css.price}>₩{price2}</p>
        </div>
        <img className={css.main_img} src={main_image_url} alt="main" />

        <div className={css.due_date_box}>{calDueDate(pro_end)}</div>
      </li>
    </Link>
  );
};

export default PromotionInfo;
