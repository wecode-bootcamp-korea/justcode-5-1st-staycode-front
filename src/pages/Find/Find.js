import React, { useState, useEffect } from 'react';
import css from './Find.module.scss';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Stay from '../../components/Stay/Stay';
function Find() {
  const [data, setData] = useState();
  const [page, setPage] = useState(0);

  const OFFSET = 4;

  useEffect(() => {
    const fetchData = async () => {
      const result = await (
        await fetch('http://localhost:10010/findstay', { method: 'GET' })
      ).json();
      setData(result.list.slice(page * OFFSET, OFFSET + page * OFFSET));
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className={css.findHeader}>
        <h1>FIND STAY</h1>
        <p>머무는 것 자체로 여행이 되는 공간</p>
      </div>
      <div className={css.wrapper}>
        {data && data.map(el => <Stay key={el.id} data={el} />)}
      </div>
      <div className={css.pageMove}>
        <FontAwesomeIcon icon={faChevronLeft} />
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </>
  );
}

export default Find;
