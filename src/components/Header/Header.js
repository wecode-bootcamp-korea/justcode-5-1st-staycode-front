import React from 'react';
import css from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const categories = [
  { text: 'FIND STAY', url: '/findstay' },
  { text: 'PROMOTION', url: '/promotion' },
];

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className={css.header}>
      <div className={css.headerLeft}>
        <div
          className={css.logobox}
          onClick={() => {
            navigate('/');
          }}
        >
          <span>STAY</span>
          <span>FOLIO</span>
        </div>
        <div className={css.headerLeft_icons}>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>어디로 떠날까요?</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <span>언제 떠날까요?</span>
          </div>
        </div>
      </div>
      <div className={css.headerRight}>
        {categories.map(el => {
          return (
            <Link
              key={el.url}
              to={el.url}
              className={location.pathname === el.url ? `${css.active}` : ``}
            >
              <strong>{el.text}</strong>
            </Link>
          );
        })}
        <Link to="/login">
          <strong>LOGIN</strong>
        </Link>
      </div>
    </header>
  );
}

export default Header;
