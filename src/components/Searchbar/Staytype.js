import css from './Staytype.module.scss';
function Staytype({ selected, exit, urlChange, staychecked, setStaychecked }) {
  const types = ['게스트하우스', '펜션', '한옥', '호텔', '독채', '리조트'];

  const onClick = e => {
    if (!staychecked.includes(e)) {
      setStaychecked(prev => prev.concat(e));
    } else {
      setStaychecked(prev => {
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
            <input
              type="checkbox"
              checked={staychecked.includes(el)}
              id={el}
              onClick={() => onClick(el)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          urlChange('stay_type', staychecked.join());
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
