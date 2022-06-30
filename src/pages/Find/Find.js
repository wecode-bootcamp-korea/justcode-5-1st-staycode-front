import React, { useState, useEffect } from 'react';
import css from './Find.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { useLocation, useSearchParams } from 'react-router-dom';
import Stay from '../../components/Stay/Stay';
import Searchbar from '../../components/Searchbar/Searchbar';

function Find({ setLocationModal, setDateModal }) {
  const location = useLocation();
  const [queries, setQueries] = useSearchParams();
  const url = new URLSearchParams(queries);
  const [data, setData] = useState();
  const [page, setPage] = useState(0);
  const [city, setCity] = useState('국내전체');
  const passedCity = queries.get('city');
  const passedCnt = queries.get('cnt');
  const passedMinP = queries.get('min_price');
  const passedMaxP = queries.get('max_price');
  const passedType = queries.get('stay_type');
  const passedTheme = queries.get('theme');
  const passedCheckIn = queries.get('check_in');
  const passedCheckOut = queries.get('check_out');
  const OFFSET = 4;
  const maxPage = data && Math.ceil(data.length / OFFSET);
  const pageArr = Array.from({ length: maxPage }, (_, i) => i + 1);

  function moveRight() {
    setPage(prev => {
      if (prev < maxPage) {
        return prev + 1;
      } else return prev;
    });
  }

  function moveLeft() {
    setPage(prev => {
      if (0 < prev) {
        return prev - 1;
      } else return prev;
    });
  }

  function pageJump(target) {
    setPage(target);
  }

  function onInputChange(e) {
    setCity(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await (
        await fetch(`http://localhost:8000/findstay${location.search}`, {
          method: 'GET',
        })
      ).json();
      setData(result.list);
    };
    fetchData();
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <>
      <div className={css.findHeader}>
        <h1>FIND STAY</h1>
        <p>머무는 것 자체로 여행이 되는 공간</p>
      </div>
      <Searchbar
        city={city}
        url={url}
        setPage={setPage}
        setQueries={setQueries}
        passedCity={passedCity}
        passedCnt={passedCnt}
        passedMaxP={passedMaxP}
        passedMinP={passedMinP}
        passedType={passedType}
        passedTheme={passedTheme}
        passedCheckIn={passedCheckIn}
        passedCheckOut={passedCheckOut}
        onInputChange={onInputChange}
        setLocationModal={setLocationModal}
        setDateModal={setDateModal}
      />
      <div className={css.findSearchWrapper}>
        <button>SEARCH &gt;</button>
      </div>
      <div className={css.wrapper}>
        {data &&
          data
            .slice(page * OFFSET, OFFSET + page * OFFSET)
            .map(el => <Stay key={el.id} data={el} />)}
      </div>
      <div className={css.pageMove}>
        <FontAwesomeIcon
          className={css.chevron}
          onClick={moveLeft}
          icon={faChevronLeft}
        />
        {pageArr.map(el => (
          <span
            onClick={() => pageJump(el - 1)}
            className={
              el === page + 1
                ? `${css.pageNum} ${css.onActive}`
                : `${css.pageNum}`
            }
            key={el}
          >
            {el}
          </span>
        ))}
        <FontAwesomeIcon
          className={css.chevron}
          onClick={moveRight}
          icon={faChevronRight}
        />
      </div>
    </>
  );
}

export default Find;
