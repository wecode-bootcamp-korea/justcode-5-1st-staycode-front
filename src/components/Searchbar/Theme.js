import { useState } from 'react';
import css from './Theme.module.scss';

function Theme({ selected, exit, urlChange, themeChecked, setThemechecked }) {
  const themes = ['도심속휴식', '사색', '정적인휴식', '한옥', '가족여행'];

  const onClick = e => {
    if (!themeChecked.includes(e)) {
      setThemechecked(prev => prev.concat(e));
    } else {
      setThemechecked(prev => {
        return prev.filter(el => el !== e);
      });
    }
  };

  return (
    <div
      className={
        selected ? `${css.wrapper} ${css.dropdownStart}` : `${css.wrapper}`
      }
    >
      <div className={css.header}>
        <h1>{selected}</h1>
        <button onClick={exit}>X</button>
      </div>
      <div className={css.body}>
        {themes.map(el => (
          <div key={el}>
            <label htmlFor={el}>{el}</label>
            <input
              type="checkbox"
              onClick={() => onClick(el)}
              checked={themeChecked.includes(el)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          urlChange('theme', themeChecked.join());
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
