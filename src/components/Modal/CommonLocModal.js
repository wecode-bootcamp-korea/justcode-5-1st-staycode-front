import { tileProps } from 'react-calendar/dist/umd/shared/propTypes';

function CommonLocModal({ modalSubmit }) {
  const [city, setCity] = useState('');
  const regions = ['국내전체', '서울', '인천', '부산', '대전', '제주'];
  const navigate = useNavigate();

  function hideLocationModal() {
    setLocationModal(false);
  }

  function toggleButton(text) {
    setCity(text);
  }

  function onInputChange(e) {
    setCity(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    navigate(`/findStay?city=${city}`);
    setLocationModal(false);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <>
      <div className={css.overlay} onClick={hideLocationModal} />
      <div className={`${css.modalWrapper}`}>
        <h1 className={css.modalHeader}>어디로 떠날까요?</h1>
        <FontAwesomeIcon
          className={css.xmark}
          onClick={hideLocationModal}
          icon={faXmark}
        />
        <form onSubmit={onSubmit}>
          <FontAwesomeIcon
            className={css.searchIcon}
            icon={faMagnifyingGlass}
          />
          <input
            value={city}
            onChange={onInputChange}
            className={css.searchInput}
            placeholder="원하는 스테이/지역을 검색해보세요."
          />
        </form>
        <div className={css.regionList}>
          <ul>
            {regions.map(el => {
              return (
                <li
                  className={el === city ? `${css.selected}` : ``}
                  onClick={() => {
                    toggleButton(el);
                  }}
                  key={el}
                >
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={css.modalSubmit}>{modalSubmit}</div>
      </div>
    </>
  );
}

ex
// 헤더에서 불렀느냐 아니면 메인에서 불렀느냐
<CommonLocModal modalSubmit={} />;
