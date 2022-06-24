import React from 'react';
import styles from './DetailSearchBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

function DetailSearchBar(props) {
  const { buttonOnOff } = props;
  return (
    <div className={styles.searchBar}>
      <div>숙소이름</div>
      <button className={styles.calBtn}>
        날짜를 선택해주세요.
        <FontAwesomeIcon icon={faTableList} />
      </button>
      {buttonOnOff === true && (
        <button className={styles.payBtn}>결제하기</button>
      )}
    </div>
  );
}
export default DetailSearchBar;
