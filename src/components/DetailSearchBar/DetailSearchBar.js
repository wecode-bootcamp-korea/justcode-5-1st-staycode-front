import React, { useState } from 'react';
import styles from './DetailSearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import DetailModal from '../DetailModal/DetailModal';

function DetailSearchBar(props) {
  const { buttonOnOff } = props;
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
      <DetailModal open={modalOpen} close={closeModal} />
      {buttonOnOff === true && (
        <button className={styles.payBtn}>결제하기</button>
      )}
    </div>
  );
}
export default DetailSearchBar;
