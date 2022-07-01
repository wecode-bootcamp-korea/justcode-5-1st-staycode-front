import css from './Searchbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faArrowRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Capacity from './Capacity';
import Price from './Price';
import Staytype from './Staytype';
import Theme from './Theme';
import { Link } from 'react-router-dom';
import LocModalforMain from '../Modal/LocModalForMain';
import DateModalForMain from '../Modal/DateModalForMain';

function Searchbar({ setPage, city, url, queries, setQueries, onInputChange }) {
  const [inputs, setInputs] = useState([
    '인원',
    '가격 범위',
    '스테이 유형',
    '테마',
  ]);
  const [showMenu, setShowMenu] = useState({ menu: '', show: false });
  const { menu, show } = showMenu;
  const [locModal, setLocModal] = useState(false);
  const [dateModalForMain, setDateModalForMain] = useState(false);
  const passedCity = queries.get('city');
  const passedCheckIn = queries.get('check_in');
  const passedCheckOut = queries.get('check_out');
  const passedCnt = queries.get('cnt');
  const passedMinP = queries.get('min_price');
  const passedMaxP = queries.get('max_price');
  const passedType = queries.get('stay_type');
  const passedTheme = queries.get('theme');
  const passedTypes = passedType && passedType.split(',');
  const passedThemes = passedTheme && passedTheme.split(',');

  const onClick = el => {
    setShowMenu(prev => {
      if (prev.menu !== el) {
        return { ...prev, menu: el, show: true };
      } else return { ...prev, menu: el, show: !prev.show };
    });
  };

  return (
    <>
      <div className={css.searchWrapper}>
        <div className={css.searchFirstRow}>
          <div>
            <label htmlFor="searchLocation">여행지/숙소</label>
            <input
              onChange={onInputChange}
              type="text"
              id="searchLocation"
              className={css.searchLoc}
            />
            <button
              onClick={() => {
                setLocModal(true);
              }}
              className={css.toggleModal}
            >
              {passedCity || city}
            </button>
          </div>
          <div
            className={css.checkInOut}
            onClick={() => {
              setDateModalForMain(true);
            }}
          >
            <label htmlFor="checkin">언제 떠날까요?</label>
            <input
              id="checkin"
              type="text"
              value={
                passedCheckIn ? `${passedCheckIn} ~ ${passedCheckOut}` : ''
              }
            />
          </div>
          <div>
            <Link
              to="/findstay"
              onClick={() => {
                setPage(0);
              }}
              className={css.reset}
            >
              <FontAwesomeIcon icon={faArrowRotateLeft} />
            </Link>
          </div>
        </div>

        <div className={css.searchSecondRow}>
          {inputs.map(el => (
            <div
              onClick={() => {
                onClick(el);
              }}
              className={css.inputs}
              key={el.name}
            >
              {el === '인원' && passedCnt
                ? `인원 : ${passedCnt}명`
                : el === '가격 범위' && passedMinP
                ? `가격 : ${passedMinP} ~ ${passedMaxP}`
                : el === '스테이 유형' && passedType
                ? `${passedTypes[0]} 외 ${passedTypes.length - 1}건`
                : el === '테마' && passedTheme
                ? `${passedThemes[0]} 외 ${passedThemes.length - 1}건`
                : el}
              <FontAwesomeIcon
                className={css.chevronDown}
                icon={faChevronDown}
              />
            </div>
          ))}
          {menu === inputs[0] && show && (
            <Capacity
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              setInputs={setInputs}
              inputs={inputs}
            />
          )}
          {menu === inputs[1] && show && (
            <Price
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
          {menu === inputs[2] && show && (
            <Staytype
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
          {menu === inputs[3] && show && (
            <Theme
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
        </div>
      </div>
      {locModal ? (
        <LocModalforMain
          url={url}
          setQueries={setQueries}
          setLocModal={setLocModal}
        />
      ) : dateModalForMain ? (
        <DateModalForMain
          setDateModalForMain={setDateModalForMain}
          url={url}
          setQueries={setQueries}
        />
      ) : null}
    </>
  );
}

export default Searchbar;
