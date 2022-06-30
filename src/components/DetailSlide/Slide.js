import React from 'react';
import styles from './Slide.module.scss';

function Slide({ img }) {
  return <img className={styles.img} src={img} alt="숙소이미지" />;
}

export default Slide;
