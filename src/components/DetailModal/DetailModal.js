import React, { useState } from 'react';
import styles from './DetailModal.module.scss';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DetailModal(props) {
  const { open, close } = props;

  const [date, setDate] = useState(new Date());

  //예약이 안되는 날짜 담은 state
  const [mark, setMark] = useState([]);

  return (
    <div
      className={
        open ? `${styles.openModal} ${styles.modal}` : `${styles.modal}`
      }
    >
      {open ? (
        <div className={styles.modalInner}>
          <div>
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
          {date.length > 0 ? (
            <p className={styles.check}>
              <div>CHECK IN : {date[0].toDateString()}</div>
              <div>CHECK OUT : {date[1].toDateString()}</div>
            </p>
          ) : (
            <p>
              <span>Default selected date:</span> {date.toDateString()}
            </p>
          )}
          <button className={styles.close} onClick={close}>
            &times;
          </button>
        </div>
      ) : null}
    </div>
  );
}
export default DetailModal;
