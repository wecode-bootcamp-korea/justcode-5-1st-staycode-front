import { useState } from 'react';
import css from './Capacity.module.scss';

function Capacity({ selected, urlChange, exit }) {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    setCount(prev => {
      if (0 < prev) {
        return prev - 1;
      } else {
        return prev;
      }
    });
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
        <div>
          <button onClick={decrease}>-</button>
          <span>{count}명</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <button
        className={css.applyButton}
        onClick={() => {
          urlChange('cnt', count);
          exit();
        }}
      >
        적용하기
      </button>
    </div>
  );
}

export default Capacity;
