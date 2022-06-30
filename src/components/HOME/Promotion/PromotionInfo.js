import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './PromotionInfo.module.scss';

const PromotionInfo = ({
  main_image_url,
  name,
  title,
  content,
  city,
  stay_type,
  guests,
  prices,
  accomodation_id,
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
  let min_price, max_price, min_guest, max_guest;

  if (prices[0] > prices[1]) {
    min_price = prices[1];
    max_price = prices[0];
  } else {
    min_price = prices[0];
    max_price = prices[1];
  }

  if (guests[0] > guests[1]) {
    min_guest = guests[1];
    max_guest = guests[0];
  } else {
    min_guest = guests[0];
    max_guest = guests[1];
  }
  min_price = min_price.toLocaleString();
  max_price = max_price.toLocaleString();

  return (
    <Link to={`/findstay/${accomodation_id}`} className={css.link}>
      <li className={css.promotion_img}>
        <div className={css.sub_box}>
          <p className={css.promotion}>PROMOTION</p>
          <p className={css.title}>{title}</p>
          <p className={css.content}>{content}</p>
          <p className={css.accomodation_id}>{name}</p>
          <p className={css.location_stay_type}>
            <span className={css.location}>{city} /</span>
            <span className={css.stay_type}> {stay_type}</span>
          </p>
          <p className={css.max_guest}>
            최소 {min_guest}명 / 최대 {max_guest}명
          </p>
          <p className={css.price}>
            ₩{min_price} ~ ₩{max_price}
          </p>
        </div>
        <img className={css.main_img} src={main_image_url} alt="main" />

        <div className={css.due_date_box}>{calDueDate(pro_end)}</div>
      </li>
    </Link>
  );
};

export default PromotionInfo;
