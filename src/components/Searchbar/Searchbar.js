import css from './Searchbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Capacity from './Capacity';
import Price from './Price';
import Staytype from './Staytype';
function Searchbar({
  passedCity,
  passedCnt,
  passedMinP,
  passedMaxP,
  city,
  url,
  queries,
  setQueries,
  prevQueries,
  onInputChange,
  setLocationModal,
}) {
  const [inputs, setInputs] = useState([
    { name: '인원', value: { cnt: 0 } },
    { name: '가격 범위', value: { min_price: null, max_price: null } },
    { name: '스테이 유형', value: { stay_type: null } },
    { name: '테마', value: { theme: null } },
  ]);

  const [showMenu, setShowMenu] = useState({ menu: '', show: false });
  const { menu, show } = showMenu;
  const onClick = el => {
    setShowMenu(prev => {
      if (prev.menu !== el) {
        return { ...prev, menu: el, show: true };
      } else return { ...prev, menu: el, show: !prev.show };
    });
  };

  return (
    <div className={css.searchWrapper}>
      <div className={css.searchFirstRow}>
        <label htmlFor="searchLocation">여행지/숙소</label>
        <input
          onChange={onInputChange}
          type="text"
          id="searchLocation"
          className={css.searchLoc}
        />
        <button
          onClick={() => {
            setLocationModal(true);
          }}
          className={css.toggleModal}
        >
          {passedCity || city}
        </button>
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
              ? `${passedMinP}만원 ~ ${passedMaxP}만원`
              : el.name
              ? el.name
              : el.name}
            <FontAwesomeIcon className={css.chevronDown} icon={faChevronDown} />
          </div>
        ))}
        {menu.name === inputs[0].name && show && (
          <Capacity
            url={url}
            queries={queries}
            setQueries={setQueries}
            prevQueries={prevQueries}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setInputs={setInputs}
            inputs={inputs}
          />
        )}
        {menu.name === inputs[1].name && show && (
          <Price
            url={url}
            queries={queries}
            setQueries={setQueries}
            prevQueries={prevQueries}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setInputs={setInputs}
            inputs={inputs}
          />
        )}
        {menu.name === inputs[2].name && show && (
          <Staytype
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setInputs={setInputs}
            inputs={inputs}
          />
        )}
      </div>
    </div>
  );
}

export default Searchbar;
