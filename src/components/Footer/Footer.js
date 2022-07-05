import React from 'react';
import css from './Footer.module.scss';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { TbCopyright } from 'react-icons/tb';

function Footer() {
  return (
    // <div className={css.container}>footer</div>;
    <div>
      <div className={css.wrapup}>
        <div>
          <div>
            <div xs={4} md={4}>
              <div className={css.aBout}>
                <a href="#" /> ABOUT
              </div>
              <div className={css.point}>
                <a href="#" /> 4 POINT APPROACH
              </div>
              <div className={css.nEws}>
                <a href="#" /> NEWSLETTER
              </div>
              <div className={css.cAreers}>
                <a href="#" /> CAREERS
              </div>
            </div>
            <div>
              <div className={css.cent}>고객센터</div>
              <div>
                <button className={css.btt1} onClick={''}>
                  {' '}
                  1:1 문의
                </button>
                <button className={css.btt2} onClick={''}>
                  {' '}
                  입점 문의
                </button>
                <button className={css.btt3} onClick={''}>
                  {' '}
                  제휴 문의
                </button>
              </div>
              <div className={css.open}>
                운영시간:10:00 ~ 18:00 (점심시간:12:30~13:30)
              </div>
              <div className={css.open1}>이용약관</div>
              <span className={css.info}>개인정보 처리방침</span>
            </div>
            <div>
              <div className={css.stay}>S T A Y</div>
              <div className={css.folio}>F O L I O</div>
              <div className={css.icon}>
                <span className={css.face}>
                  <FaFacebookF />
                </span>
                <span className={css.insta}>
                  <FaInstagram />
                </span>
                <span className={css.naver}>
                  <SiNaver />
                </span>
                <span className={css.youtu}>
                  <BsYoutube />
                </span>
                <div className={css.copy}>Copyright</div>
                <div className={css.cfont}>
                  <TbCopyright />
                </div>
                <div className={css.copy_st}>STAYFOLIO</div>
              </div>
            </div>
          </div>
          <div> </div>
        </div>
        <div className={css.bottom_line}></div>
        <div className={css.bottom_line1}>
          (주) 스테이폴리오 | 대표자 : 이상묵 | 서울특별시 종로구 자하문로9길
          24, 2층(통인동) | TEL: 1670-4123 | EMAIL:help@stayfolio.com |
          사업자등록번호: 676-87-00055 | 통신판매업신고 : 제2015-서울종로-0499호
          | 관광사업자등록 : 일반여행업 2018-000049호(종로구청)
        </div>
        <div className={css.bottom_line2}>[사업자정보확인]</div>
      </div>
    </div>
  );
}

export default Footer;
