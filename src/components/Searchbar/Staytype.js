import { useState } from 'react';
import css from './Staytype.module.scss';
function Staytype({ showMenu, setShowMenu, url, setQueries }) {
  const types = ['게스트하우스', '펜션', '한옥', '호텔', '독채', '리조트'];
  const [checked, setChecked] = useState([]);
  const onClick = e => {
    if (!checked.includes(e)) {
      setChecked(prev => prev.concat(e));
    } else {
      setChecked(prev => {
        return prev.filter(el => el !== e);
      });
    }
  };
  const exit = () => {
    setShowMenu(prev => {
      return { ...prev, menu: '', show: false };
    });
  };

  function inspect(target, value) {
    if (url.has(target)) {
      url.set(target, value);
      setQueries(url.toString());
    } else {
      setQueries(url.toString() + `&${target}=${value}`);
    }
  }
  return (
    <div
      className={
        showMenu.show ? `${css.wrapper} ${css.dropdownStart}` : `${css.wrapper}`
      }
    >
      <div className={css.header}>
        <h1>{showMenu.menu}</h1>
        <button onClick={exit}>X</button>
      </div>
      <div className={css.body}>
        {types.map(el => (
          <div key={el}>
            <label htmlFor={el}>{el}</label>
            <input type="checkbox" id={el} onClick={() => onClick(el)} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          inspect('stay_type', checked.join());
          exit();
        }}
        className={css.applyButton}
      >
        적용하기
      </button>
    </div>
  );
}

export default Staytype;
