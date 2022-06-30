import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Price.module.scss';
function Price({
  showMenu,
  setShowMenu,
  setInputs,
  url,
  inputs,
  queries,
  setQueries,
}) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);
  const inputLeft = useRef(null);
  const inputRight = useRef(null);
  const thumbLeft = useRef(null);
  const thumbRight = useRef(null);
  const range = useRef(null);

  const onMinInput = e => {
    setMinValue(e.target.value);
  };

  const onMaxInput = e => {
    setMaxValue(e.target.value);
  };

  const exit = () => {
    setShowMenu(prev => {
      return { ...prev, menu: '', show: false };
    });
  };

  const toggleMenu = () => {
    setShowMenu(prev => {
      return { ...prev, menu: '', show: false };
    });
  };

  function inspect(target1, target2, value1, value2) {
    if (url.has(target1)) {
      url.set(target1, value1);
      url.set(target2, value2);
      setQueries(url.toString());
    } else {
      setQueries(url.toString() + `&${target1}=${value1}&${target2}=${value2}`);
    }
  }

  useEffect(() => {
    const _this = inputLeft.current;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);
    setMinValue(Math.min(minValue, maxValue - 1));
    const percent = ((minValue - min) / (max - min)) * 100;
    thumbLeft.current.style.left = `${percent}%`;
    range.current.style.left = `${percent}%`;
  }, [minValue]);

  useEffect(() => {
    const _this = inputRight.current;
    const min = parseInt(_this.min);
    const max = parseInt(_this.max);
    setMaxValue(Math.max(maxValue, minValue + 1));
    const percent = ((maxValue - min) / (max - min)) * 100;
    thumbRight.current.style.right = `${100 - percent}%`;
    range.current.style.right = `${100 - percent}%`;
  }, [maxValue]);

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1>{showMenu.menu.name}</h1>
        <button onClick={exit}>X</button>
      </div>
      <div className={css.body}>
        <form className={css.box}>
          <div className={css.slider}>
            <input
              type="range"
              min="1"
              max="100"
              className={css.inputLeft}
              ref={inputLeft}
              onChange={onMinInput}
              value={minValue}
            />
            <input
              type="range"
              min="1"
              max="100"
              className={css.inputRight}
              ref={inputRight}
              onChange={onMaxInput}
              value={maxValue}
            />
            <div className={css.track}>
              <div className={css.range} ref={range} />
              <div className={`${css.thumb} ${css.left}`} ref={thumbLeft} />
              <div className={`${css.thumb} ${css.right}`} ref={thumbRight} />
            </div>
          </div>
        </form>
        <div className={css.pricesWrapper}>
          <div className={css.minPriceWrapper}>
            <span>최저요금</span>
            <input type="text" value={minValue + '만원'} />
          </div>
          <strong>-</strong>
          <div className={css.maxPriceWrapper}>
            <span>최고요금</span>
            <input type="text" value={maxValue + '만원'} />
          </div>
        </div>
        <div className={css.linkWrapper}>
          {/* <Link
            to={`?price_min=${minValue}&price_max=${maxValue}`}
            className={css.apply}
            onClick={() => {
              setShowMenu(prev => {
                return { ...prev, menu: '', show: false };
              });
            }}
          > */}
          <button
            onClick={() => {
              // setQueries(
              //   url.toString() + `&price_min=${minValue}&price_max=${maxValue}`
              // );
              inspect(`min_price`, `max_price`, minValue, maxValue);
              toggleMenu();
            }}
          >
            적용하기
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Price;
