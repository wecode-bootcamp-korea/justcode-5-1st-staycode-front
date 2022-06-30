import React, { useState } from 'react';
import styles from './DetailModal.module.scss';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DetailModal(props) {
  const { open, close } = props;

  //어떤 날짜를 선택했는지 담은 state date[0]는 체크인 , data[1]은 체크아웃
  const [date, setDate] = useState(new Date());

  //예약이 안되는 날짜 담은 state
  const [noReservation, setNoReservation] = useState([
    new Date(2022, 7, 9),
    new Date(2022, 7, 6),
  ]);
  console.log(date);
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
              // tileDisabled={({ date, view }) =>
              //   view === 'month' &&
              //   noReservation.some(
              //     noReservation =>
              //       date.getFullYear() === noReservation.getFullYear() &&
              //       date.getMonth() === noReservation.getMonth() &&
              //       date.getDate() === noReservation.getDate()
              //   )
              // }
              formatDay={(locale, date) => moment(date).format('DD')}
            />
          </div>
          <button className={styles.commit} onClick={close}>
            확인
          </button>
        </div>
      ) : null}
    </div>
  );
}
export default DetailModal;
