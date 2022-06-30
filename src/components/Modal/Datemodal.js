import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './Datemodal.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import moment from 'moment';
import Calendar from 'react-calendar';
function Datemodal({ setDateModal }) {
  const [date, setDate] = useState(new Date());

  function hideDateModal() {
    setDateModal(false);
  }

  function onDateChange(e) {
    setDate(prev => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

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
            }}
            to={`/findstay?check_in=${date.check_in}&check_out=${date.check_out}`}
          >
            SEARCH
          </Link>
        </div>
      </div>
    </>
  );
}

export default Datemodal;
