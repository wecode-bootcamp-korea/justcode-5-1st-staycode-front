import React, { useState, useEffect } from 'react';
import styles from './DetailModal.module.scss';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DetailModal(props) {
  const { open, close, roomData } = props;

  //어떤 날짜를 선택했는지 담은 state date[0]는 체크인 , data[1]은 체크아웃
  const [date, setDate] = useState(new Date());

  //예약이 안되는 날짜 담은 state

  const [disabledDates, setDisabledDates] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/reservation/${roomData}`, { method: 'GET' })
      .then(res => res.json())
      .then(res => {
        console.log('datefetch');
        setDisabledDates(
          res.checkINData.map(data => new Date(data.reservation_start))
        );
        console.log('fetch_end');
      });
  }, []);
  console.log(disabledDates);

  if (!disabledDates) {
    return <div>데이터 없음</div>;
  }

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
              tileDisabled={({ date, view }) =>
                view === 'month' && // Block day tiles only
                disabledDates &&
                disabledDates.some(
                  disabledDate =>
                    date.getFullYear() === disabledDate.getFullYear() &&
                    date.getMonth() === disabledDate.getMonth() &&
                    date.getDate() === disabledDate.getDate()
                )
              }
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
