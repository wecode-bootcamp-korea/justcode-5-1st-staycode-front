import css from './SliderButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
function SlideButton({ direction, onClick }) {
  return (
    <button
      className={direction == 'Prev' ? css.Prev : css.Next}
      onClick={onClick}
    >
      {direction == 'Prev' ? (
        <FontAwesomeIcon icon={faChevronLeft} className={css.left_bracket} />
      ) : (
        <FontAwesomeIcon icon={faChevronRight} className={css.right_bracket} />
      )}
    </button>
  );
}

export default SlideButton;
