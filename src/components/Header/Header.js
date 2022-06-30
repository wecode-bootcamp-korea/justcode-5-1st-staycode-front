import React, { useState } from 'react';
import css from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCalendar } from '@fortawesome/free-solid-svg-icons';
import {
  useNavigate,
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import Datemodal from '../Modal/Datemodal';
import Locationmodal from '../Modal/Locationmodal';

const categories = [
  { text: 'FIND STAY', url: '/findstay' },
  { text: 'PROMOTION', url: '/promotion' },
];

function Header({ dateModal, setDateModal, locationModal, setLocationModal }) {
  // const [date, setDate] = useState({
  //   check_in: '',
  //   check_out: '',
  // });
  const navigate = useNavigate();

  const location = useLocation();
  const [queries, setQueries] = useSearchParams();
  const url = new URLSearchParams(queries);

  function showDateModal() {
    setDateModal(true);
  }
  function showLocationModal() {
    setLocationModal(true);
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
        <Datemodal
          location={location}
          url={url}
          setDateModal={setDateModal}
          setQueries={setQueries}
        />
      ) : locationModal ? (
        <Locationmodal setLocationModal={setLocationModal} />
      ) : null}
    </>
  );
}

export default Header;
