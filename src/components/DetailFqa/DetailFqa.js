import React from 'react';
import styles from './DetailFqa.module.scss';

function DetailFqa({ roomData, onOff }) {
  //전달받은 roomData로 Fqa 표데이터에 뿌려주기

  return (
    <div className={styles.fqa}>
      <div className={styles.fqaName}>
        F A Q<br />
        <br />
        인원 및 금액
      </div>
      <div className={styles.faqTable}>
        <div className={styles.faqSubname}>인원 및 금액</div>
        <div className={styles.faqTableBox}>
          <table>
            <tbody>
              <tr>
                <td>객실</td>
                <td>기준인원</td>
                <td>최대인원</td>
              </tr>
              <tr>
                <td>{roomData[0].name}</td>
                <td>{roomData[0].max_guest}</td>
                <td>{roomData[0].max_guest + 1}</td>
              </tr>
              {onOff && (
                <tr>
                  <td>{roomData[1].name}</td>
                  <td>{roomData[1].max_guest}</td>
                  <td>{roomData[1].max_guest + 1}</td>
                </tr>
              )}
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>객실</td>
                <td>비수기</td>
                <td>성수기</td>
              </tr>
              {/* 맵돌리기 */}
              <tr>
                <td>{roomData[0].name}</td>
                <td>{roomData[0].price.toLocaleString('en')}</td>
                <td>{(roomData[0].price + 50000).toLocaleString('en')}</td>
              </tr>
              {onOff && (
                <tr>
                  <td>{roomData[1].name}</td>
                  <td>{roomData[1].price.toLocaleString('en')}</td>
                  <td>{(roomData[1].price + 50000).toLocaleString('en')}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DetailFqa;
