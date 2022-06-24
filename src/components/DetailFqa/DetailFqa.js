import React from 'react';
import styles from './DetailFqa.module.scss';

function DetailFqa(prop) {
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
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
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
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DetailFqa;
