import React from 'react';
import css from './Dacument.module.scss';

const Dacument = () => {
  return (
    <div className={css.container}>
      <div className={css.line}> 개인정보 수집 및 이용 동의</div>
      <div className={css.line1}>
        1. 수집항목: [필수] 이름, 연락처, 이메일주소, <br />
        인원정보
      </div>
      <div className={css.line1}>2. 수집 및 이용목적: 사업자회원과 예약이</div>
      <div className={css.line1}>
        3. 보관기간: 회원탈퇴 등 개인정보 이용목적 달성 시까지 보관. 단, 상법 및
        ‘전자상거래 등에서의 소비자 보호에 관한 법률’ 등 관련 법령에 의하여 일정
        기간 보관이 필요한 경우에는 해당 기간 동안 보관함
      </div>
      <div className={css.line1}>
        4. 동의 거부권 등에 대한 고지: 정보주체는 개인정보의 수집 및 이용 동의를
        거부할 권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.
      </div>
      <div className={css.line1}>
        개인정보 제3자 제공 동의 1. 개인정보를 제공받는 자: 예약상품판매
        제휴업체
      </div>
      <div className={css.line1}>
        2. 제공하는 개인정보 항목: [필수] 스테이폴리오 아이디, 이름, 연락처,
        이메일주소, 인원정보
      </div>
      <div className={css.line1}>
        3. 개인정보를 제공받는 자의 이용목적: 사업자회원과 예약이용자의 원활한
        거래 진행, 고객상담, 불만처리 등 민원 처리, 분쟁조정 해결을 위한
        기록보존
      </div>
      <div className={css.line1}>
        4. 개인정보를 제공받는 자의 개인정보 보유 및 이용기간: 개인정보 이용목적
        달성 시 까지 보존합니다.
      </div>
      <div className={css.line1}>
        5. 동의 거부권 등에 대한 고지: 정보주체는 개인정보 제공 동의를 거부할
        권리가 있으나, 이 경우 상품 및 서비스 예약이 제한될 수 있습니다.
      </div>
    </div>
  );
};

export default Dacument;
