import React from 'react';
import css from './Find.module.scss';
import { useLocation } from 'react-router-dom';
function Find() {
  const { search } = useLocation();
  console.log(search);
  return (
    <div className={css.findHeader}>
      <h1>FIND STAY</h1>
      <p>머무는 것 자체로 여행이 되는 공간</p>
    </div>
  );
}

export default Find;
