import React from 'react';
import styles from './DetailFqa.module.scss';

function DetailFqa({ roomData }) {
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
              {/* 맵돌리기 */}
              <tr>
                <td>201호</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>301호</td>
                <td>4</td>
                <td>6</td>
              </tr>
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
                <td>201호</td>
                <td>100000</td>
                <td>150000</td>
              </tr>
              <tr>
                <td>301호</td>
                <td>200000</td>
                <td>250000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DetailFqa;
