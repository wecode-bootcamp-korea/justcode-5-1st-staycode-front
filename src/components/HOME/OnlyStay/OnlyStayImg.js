import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './OnlyStayImg.module.scss';

const OnlyStayImg = ({ main_image_url, title, location, price }) => {
  return (
    <Link to="/" className={css.link}>
      <li className={css.onlystay_img}>
        <img className={css.main_img} src={main_image_url} alt="main" />
        <div className={css.sub_box}>
          <p className={css.title}>{title}</p>
          <p className={css.location_price}>
            <span className={css.location}>{location} </span>
            <span className={css.price}>₩{price}</span>
          </p>
          <p className={css.read_more}>read more</p>
        </div>
      </li>
    </Link>
  );
};

export default OnlyStayImg;
