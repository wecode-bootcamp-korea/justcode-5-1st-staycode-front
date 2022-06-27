import React, { useState } from 'react';
import css from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faCalendar,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';

const categories = [
  { text: 'FIND STAY', url: '/findstay' },
  { text: 'PROMOTION', url: '/promotion' },
];
const regions = ['서울', '인천', '부산', '대전', '제주'];

function Header() {
  const [dateModal, setDateModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  const [city, setCity] = useState('');
  const [date, setDate] = useState({
    check_in: '',
    check_out: '',
  });
  const navigate = useNavigate();
  const location = useLocation();

  function showDateModal() {
    setDateModal(true);
  }
  function showLocationModal() {
    setLocationModal(true);
  }
  function toggleButton(text) {
    setCity(text);
  }
  function onInputChange(e) {
    setCity(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    navigate(`/findStay?city=${city}`);
    setDateModal(false);
    setLocationModal(false);
  }
  function onDateChange(e) {
    setDate(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }
  return (
    <>
      <header className={css.header}>
        <div className={css.headerLeft}>
          <div
            className={css.logobox}
            onClick={() => {
              navigate('/');
            }}
          >
            <span>STAY</span>
            <span>CODE</span>
          </div>
          <div className={css.headerLeft_icons}>
            <div onClick={showLocationModal}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>어디로 떠날까요?</span>
            </div>
            <div onClick={showDateModal}>
              <FontAwesomeIcon icon={faCalendar} />
              <span>언제 떠날까요?</span>
            </div>
          </div>
        </div>
        <div className={css.headerRight}>
          {categories.map(el => {
            return (
              <Link key={el.url} to={el.url}>
                <strong
                  className={
                    location.pathname.includes(el.url) ? `${css.active}` : ``
                  }
                >
                  {el.text}
                </strong>
              </Link>
            );
          })}
          <Link to="/login">
            <strong>LOGIN</strong>
          </Link>
        </div>
      </header>
      {dateModal ? (
        <Modal setDateModal={setDateModal} date={date}>
          <form className={css.dateForm}>
            <div>
              <label for="checkIn">체크 인</label>
              <input
                type="date"
                name="check_in"
                id="checkIn"
                onChange={onDateChange}
              />
            </div>
            <div>
              <label for="checkOut">체크 아웃</label>
              <input
                type="date"
                id="checkOut"
                name="check_out"
                onChange={onDateChange}
              />
            </div>
          </form>
        </Modal>
      ) : locationModal ? (
        <Modal
          city={city}
          setLocationModal={setLocationModal}
          setCity={setCity}
        >
          <form onSubmit={onSubmit}>
            <FontAwesomeIcon
              className={css.searchIcon}
              icon={faMagnifyingGlass}
            />
            <input
              value={city}
              onChange={onInputChange}
              className={css.searchInput}
              placeholder="원하는 스테이/지역을 검색해보세요."
            />
          </form>
          <div className={css.regionList}>
            <ul>
              {regions.map(el => {
                return (
                  <li
                    className={el === city ? `${css.selected}` : ``}
                    onClick={() => {
                      toggleButton(el);
                    }}
                    key={el}
                  >
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default Header;
