import { useEffect, useRef, useState } from 'react';
import css from './Stay.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

function Stay({ data }) {
  const target = useRef(null);
  const [page, setPage] = useState(0);
  const finalPage = data.images.length - 1;
  const navigate = useNavigate();
  const location = useLocation();
  const moveRight = () => {
    setPage(prev => {
      if (prev < finalPage) {
        return (prev = prev + 1);
      } else return prev;
    });
  };

  const moveLeft = () => {
    setPage(prev => {
      if (0 < prev) {
        return (prev = prev - 1);
      } else return prev;
    });
  };

  const dotsArray = Array.from({ length: finalPage + 1 }, (_, i) => i);

  useEffect(() => {
    target.current.style.transition = 'all 0.3s ease-in-out';
    target.current.style.transform = `translateX(-${page * 380}px)`;
  }, [page]);

  return (
    <div className={css.stayWrapper}>
      <h1 className={css.stayName}>{data.name}</h1>
      <span className={css.stayType}>{data.stay_type}</span>
      <div className={css.infoWrapper}>
        <div className={css.stayInfo}>
          <span>{data.city}</span>
          <span>{`기준 ${Math.min(...data.guests)}명 / 최대 ${Math.max(
            ...data.guests
          )}명`}</span>
          <span className={css.prices}>{`₩${Math.min(
            ...data.prices
          ).toLocaleString('en')} ~ ₩${Math.max(...data.prices).toLocaleString(
            'en'
          )}`}</span>
          <div
            onClick={() => {
              navigate(`/findstay/${data.id}${location.search}`);
            }}
          >
            예약하기
          </div>
        </div>
        <div className={css.stayImageWrapper}>
          <FontAwesomeIcon
            className={
              page === 0
                ? `${css.arrowLeft} ${css.inactive}`
                : `${css.arrowLeft}`
            }
            onClick={moveLeft}
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            className={
              page === finalPage
                ? `${css.arrowRight} ${css.inactive}`
                : `${css.arrowRight}`
            }
            onClick={moveRight}
            icon={faChevronRight}
          />
          <div className={css.imageSwiper} ref={target}>
            {data.images.map(el => (
              <div
                onClick={() => {
                  navigate(`/findstay/${data.id}${location.search}`);
                }}
                className={css.stayImage}
                key={el}
                style={{ backgroundImage: `url(${el})` }}
              />
            ))}
          </div>
          <div className={css.dotsWrapper}>
            {dotsArray.map(el => (
              <span
                className={css.swiperPagination}
                key={el}
                style={{
                  backgroundColor: page === el ? `#FFFFFF` : `rgba(0,0,0,0.2)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stay;
