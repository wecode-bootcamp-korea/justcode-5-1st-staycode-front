import React, { useState } from 'react';
import styles from './DetailSearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import DetailModal from '../DetailModal/DetailModal';
import { Link } from 'react-router-dom';

function DetailSearchBar(props) {
  const { buttonOnOff, roomData, search } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.searchBar}>
      <div>숙소이름</div>
      <button className={styles.calBtn} onClick={openModal}>
        날짜를 선택해주세요.
        <FontAwesomeIcon icon={faTableList} />
      </button>
      <DetailModal open={modalOpen} close={closeModal} roomData={roomData} />
      {buttonOnOff === true && (
        <Link to={`/reservation/${roomData}${search}`}>
          <button className={styles.payBtn}>결제하기</button>
        </Link>
      )}
    </div>
  );
}
export default DetailSearchBar;
