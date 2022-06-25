import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './ImgList.module.scss';

const ImgList = ({ main_image_url, sub_image_url, content }) => {
  return (
    <Link to="/" className={css.link}>
      <li className={css.launching_img}>
        <img className={css.main_img} src={main_image_url} alt="main" />
        <div className={css.sub_box}>
          <img className={css.sub_img} src={sub_image_url} alt="sub" />
          <p className={css.content}>{content}</p>
          <p className={css.launching}>LAUNCHING</p>

          <p className={css.read_more}>read more</p>
        </div>
      </li>
    </Link>
  );
};

export default ImgList;
