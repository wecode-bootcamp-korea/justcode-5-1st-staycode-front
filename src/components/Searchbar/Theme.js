import { useState } from 'react';
import css from './Theme.module.scss';

function Theme({ showMenu, setShowMenu, url, setQueries }) {
  const themes = ['도심속휴식', '사색', '정적인휴식', '한옥', '가족여행'];
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
        <h1>{showMenu.menu.name}</h1>
        <button onClick={exit}>X</button>
      </div>
      <div className={css.body}>
        {themes.map(el => (
          <div key={el}>
            <label htmlFor={el}>{el}</label>
            <input type="checkbox" onClick={() => onClick(el)} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          inspect('theme', checked.join());
          exit();
        }}
        className={css.applyButton}
      >
        적용하기
      </button>
    </div>
  );
}

export default Theme;
