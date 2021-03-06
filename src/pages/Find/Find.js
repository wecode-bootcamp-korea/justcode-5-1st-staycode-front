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
import { BASE_URL } from '../../config';
function Find() {
  const location = useLocation();
  const sortOption = [
    { name: '기본순', value: 'default' },
    { name: '높은 가격순', value: 'high' },
    { name: '낮은 가격순', value: 'row' },
  ];
  const [queries, setQueries] = useSearchParams();
  const url = new URLSearchParams(queries);
  const passedPage = queries.get('page');
  const [data, setData] = useState();
  const [sort, setSort] = useState();
  const OFFSET = 4;
  const maxPage = data && Math.ceil(data.length / OFFSET);
  const pageArr = Array.from({ length: maxPage }, (_, i) => i + 1);
  const [search, setSearch] = useState('');
  function moveRight() {
    if (passedPage * 1 < maxPage) urlChange('page', Number(passedPage) + 1);
  }

  function moveLeft() {
    if (1 < passedPage) urlChange('page', Number(passedPage) - 1);
  }

  function pageJump(el) {
    urlChange('page', el);
  }

  function selectSort(el) {
    setSort(el);
  }

  function onClick(target) {
    urlChange('search', target);
  }

  function urlChange(target1, value1, target2, value2) {
    if (!target2) {
      if (url.has(target1)) {
        url.set(target1, value1);
        setQueries(url.toString());
      } else {
        setQueries(url.toString() + `&${target1}=${value1}`);
      }
    } else {
      if (url.has(target1)) {
        url.set(target1, value1);
        url.set(target2, value2);
        setQueries(url.toString());
      } else {
        setQueries(
          url.toString() + `&${target1}=${value1}&${target2}=${value2}`
        );
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await (
        await fetch(`http://${BASE_URL}:8000/findstay${location.search}`, {
          method: 'GET',
        })
      ).json();
      setData(result.data);
    };
    fetchData();
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  useEffect(() => {
    if (!passedPage) {
      urlChange('page', '1');
    }
  }, [location.search, passedPage]);

  return (
    <>
      <div className={css.findHeader}>
        <h1>FIND STAY</h1>
        <p>머무는 것 자체로 여행이 되는 공간</p>
      </div>
      <Searchbar
        search={search}
        setSearch={setSearch}
        queries={queries}
        urlChange={urlChange}
      />
      <div className={css.findSearchWrapper}>
        <button
          onClick={() => {
            onClick(search);
          }}
        >
          SEARCH
        </button>
      </div>
      <div className={css.orderWrapper}>
        {sortOption.map(el => (
          <div
            onClick={() => {
              selectSort(el.name);
              urlChange('order', el.value);
            }}
            key={el}
          >
            <span
              className={css.orderOptionDot}
              style={{
                backgroundColor: sort === el.name ? 'black' : '#aaaaaa',
              }}
            />
            <span
              className={css.orderOption}
              style={{ color: sort === el.name ? 'black' : '#aaaaaa' }}
            >
              {el.name}
            </span>
          </div>
        ))}
      </div>
      <div className={css.wrapper}>
        {data && data.list.map(el => <Stay key={el.id} data={el} />)}
      </div>
      <div className={css.pageMove}>
        <FontAwesomeIcon
          className={css.chevron}
          onClick={moveLeft}
          icon={faChevronLeft}
        />
        {pageArr.map(el => (
          <span
            onClick={() => pageJump(el)}
            className={
              el === Number(passedPage)
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
