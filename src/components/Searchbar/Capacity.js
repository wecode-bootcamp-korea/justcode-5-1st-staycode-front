import { useLocation } from 'react-router-dom';
import css from './Capacity.module.scss';

function Capacity({
  showMenu,
  setShowMenu,
  setInputs,
  inputs,
  url,
  setQueries,
}) {
  const increase = () => {
    setInputs(prev => {
      const newCnt = prev[0].value.cnt + 1;
      const newCapacity = { name: '인원', value: { cnt: newCnt } };
      const [a, ...etcArr] = prev;
      return [newCapacity, ...etcArr];
    });
  };

  const decrease = () => {
    setInputs(prev => {
      const newCnt =
        prev[0].value.cnt > 0 ? prev[0].value.cnt - 1 : prev[0].value.cnt;
      const newCapacity = { name: '인원', value: { cnt: newCnt } };
      const [a, ...etcArr] = prev;
      return [newCapacity, ...etcArr];
    });
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
        <div>
          <button onClick={decrease}>-</button>
          <span>{inputs[0].value.cnt}명</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <button
        className={css.applyButton}
        onClick={() => {
          inspect('cnt', inputs[0].value.cnt);
          exit();
        }}
      >
        적용하기
      </button>
    </div>
  );
}

export default Capacity;
