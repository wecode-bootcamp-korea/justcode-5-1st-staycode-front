import React, { useEffect } from 'react';
import css from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Modal({
  setDateModal,
  children,
  setLocationModal,
  city,
  setCity,
  date,
}) {
  function hideDateModal() {
    setDateModal(false);
  }
  function hideLocationModal() {
    setLocationModal(false);
  }
  const closeModal = setDateModal ? hideDateModal : hideLocationModal;

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <>
      <div className={css.overlay} onClick={closeModal} />
      <div className={`${css.modalWrapper}`}>
        <h1 className={css.modalHeader}>
          {setDateModal ? '언제 떠날까요?' : '어디로 떠날까요?'}
        </h1>
        <FontAwesomeIcon
          className={css.xmark}
          onClick={closeModal}
          icon={faXmark}
        />
        {children}
        <div className={css.modalSubmit}>
          <Link
            onClick={() => {
              closeModal();
              setCity('');
            }}
            to={
              city
                ? `findstay?city=${city}`
                : date
                ? `findstay?check_in=${date.check_in}&check_out=${date.check_out}`
                : '/findstay'
            }
          >
            SEARCH
          </Link>
        </div>
      </div>
    </>
  );
}

export default Modal;
