import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Datemodal.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';

function Datemodal({ setDateModal, location, url, setQueries }) {
  const [date, setDate] = useState(new Date());

  function hideDateModal() {
    setDateModal(false);
  }

  function inspect(target1, target2, value1, value2) {
    if (url.has(target1)) {
      url.set(target1, value1);
      url.set(target2, value2);
      setQueries(url.toString());
    } else {
      setQueries(url.toString() + `&${target1}=${value1}&${target2}=${value2}`);
    }
  }

  function dateParser(target) {
    if (target !== undefined) {
      const parsedYear = target.getFullYear();
      const parsedMonth =
        target.getMonth() < 9
          ? '0' + (target.getMonth() + 1)
          : target.getMonth() + 1;
      const parsedDate =
        target.getDate() < 10 ? '0' + target.getDate() : target.getDate();
      return `${parsedYear}-${parsedMonth}-${parsedDate}`;
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <>
      <div className={css.overlay} onClick={hideDateModal} />
      <div className={`${css.modalWrapper}`}>
        <h1 className={css.modalHeader}>언제 떠날까요?</h1>
        <FontAwesomeIcon
          className={css.xmark}
          onClick={hideDateModal}
          icon={faXmark}
        />
        <div className={css.calWrapper}>
          <Calendar
            className={css.calendar}
            onChange={setDate}
            value={date}
            minDate={new Date()}
            maxDate={new Date(2022, 11, 30)}
            selectRange={true}
            defaultValue={date}
            formatDay={(locale, date) => moment(date).format('DD')}
          />
        </div>
        <div className={css.modalSubmit}>
          <Link
            onClick={() => {
              hideDateModal();
              inspect(
                'check_in',
                'check_out',
                dateParser(date[0]),
                dateParser(date[1])
              );
            }}
            to={`/findstay?check_in=${dateParser(
              date[0]
            )}&check_out=${dateParser(date[1])}`}
          >
            SEARCH
          </Link>
        </div>
      </div>
    </>
  );
}

export default Datemodal;
