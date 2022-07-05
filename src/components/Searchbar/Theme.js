import { useState } from 'react';
import css from './Theme.module.scss';

function Theme({ selected, exit, urlChange }) {
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
            <input type="checkbox" onClick={() => onClick(el)} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          urlChange('theme', checked.join());
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
