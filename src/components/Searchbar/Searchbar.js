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
function Searchbar({
  passedCity,
  passedCnt,
  passedMinP,
  passedMaxP,
  passedType,
  passedTheme,
  passedCheckIn,
  passedCheckOut,
  setPage,
  city,
  url,
  setQueries,
  onInputChange,
}) {
  const [inputs, setInputs] = useState([
    { name: '인원', value: { cnt: 0 } },
    { name: '가격 범위', value: { min_price: null, max_price: null } },
    { name: '스테이 유형', value: { stay_type: null } },
    { name: '테마', value: { theme: null } },
  ]);
  const [locModal, setLocModal] = useState(false);
  const [dateModalForMain, setDateModalForMain] = useState(false);
  const [showMenu, setShowMenu] = useState({ menu: '', show: false });
  const { menu, show } = showMenu;
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
              {el.name === '인원' && passedCnt
                ? `인원 : ${passedCnt}명`
                : el.name === '가격 범위' && passedMinP
                ? `가격 : ${passedMinP} ~ ${passedMaxP}`
                : el.name === '스테이 유형' && passedType
                ? `${passedTypes[0]} 외 ${passedTypes.length - 1}건`
                : el.name === '테마' && passedTheme
                ? `${passedThemes[0]} 외 ${passedThemes.length - 1}건`
                : el.name}
              <FontAwesomeIcon
                className={css.chevronDown}
                icon={faChevronDown}
              />
            </div>
          ))}
          {menu.name === inputs[0].name && show && (
            <Capacity
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
              setInputs={setInputs}
              inputs={inputs}
            />
          )}
          {menu.name === inputs[1].name && show && (
            <Price
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
          {menu.name === inputs[2].name && show && (
            <Staytype
              url={url}
              setQueries={setQueries}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
          {menu.name === inputs[3].name && show && (
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
