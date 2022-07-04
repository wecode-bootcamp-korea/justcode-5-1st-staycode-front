import { useState } from 'react';
import css from './Staytype.module.scss';
function Staytype({ selected, exit, urlChange }) {
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
        {types.map(el => (
          <div key={el}>
            <label htmlFor={el}>{el}</label>
            <input type="checkbox" id={el} onClick={() => onClick(el)} />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          urlChange('stay_type', checked.join());
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
