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

function Searchbar({ search, setSearch, queries, urlChange }) {
  const options = ['인원', '가격 범위', '스테이 유형', '테마'];
  const [selected, setSelected] = useState();
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

  const changeOption = el => {
    setSelected(prev => {
      if (prev !== el) {
        return el;
      } else if (prev === el) {
        return '';
      }
    });
  };

  const exit = () => {
    setSelected('');
  };

  const locModalOn = () => {
    setLocModal(true);
  };

  const onchange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    urlChange('search', search);
  };

  return (
    <>
      <div className={css.searchWrapper}>
        <div className={css.searchFirstRow}>
          <div>
            <form
              onSubmit={e => {
                onSubmit(e);
              }}
            >
              <label htmlFor="searchLocation">여행지/숙소</label>
              <input
                onChange={e => {
                  onchange(e);
                }}
                type="text"
                id="searchLocation"
                className={css.searchLoc}
                value={search}
              />
            </form>
            <button onClick={locModalOn} className={css.toggleModal}>
              {passedCity || '국내전체'}
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
            <Link to="/findstay" className={css.reset}>
              <FontAwesomeIcon icon={faArrowRotateLeft} />
            </Link>
          </div>
        </div>

        <div className={css.searchSecondRow}>
          {options.map(el => (
            <div
              onClick={() => {
                changeOption(el);
              }}
              className={css.inputs}
              key={el.name}
            >
              {el === '인원' && passedCnt
                ? `인원 : ${passedCnt}명`
                : el === '가격 범위' && passedMinP
                ? `가격 : ${(passedMinP * 1).toLocaleString('en')} ~ ${(
                    passedMaxP * 1
                  ).toLocaleString('en')}`
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
          {selected === '인원' && (
            <Capacity urlChange={urlChange} selected={selected} exit={exit} />
          )}
          {selected === '가격 범위' && (
            <Price urlChange={urlChange} selected={selected} exit={exit} />
          )}
          {selected === '스테이 유형' && (
            <Staytype urlChange={urlChange} selected={selected} exit={exit} />
          )}
          {selected === '테마' && (
            <Theme urlChange={urlChange} selected={selected} exit={exit} />
          )}
        </div>
      </div>
      {locModal ? (
        <LocModalforMain urlChange={urlChange} setLocModal={setLocModal} />
      ) : dateModalForMain ? (
        <DateModalForMain
          setDateModalForMain={setDateModalForMain}
          urlChange={urlChange}
        />
      ) : null}
    </>
  );
}

export default Searchbar;
