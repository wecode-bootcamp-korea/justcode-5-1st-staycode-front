import { React, useState } from 'react';
import css from './JoinMember.module.scss';
import Dacument from './Dacument';
import { AiOutlineDown } from 'react-icons/ai';
import { BASE_URL } from '../../config';

function JoinMember() {
  //   const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [showTimer, setShowTimer] = useState(false);
  const [string, setString] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    phone: '',
  });

  const onChange = event => {
    setInputs(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const validation = (email, password, name, pass, phone) => {
    console.log('idText:', email);
    console.log('pwText: ', password);
    console.log('name: ', name);
    console.log('pass: ', pass);
    console.log('phone: ', phone);

    if (!email.includes('@')) {
      const string = '@ 가 빠졌습니다.';
      return false;
    }

    if (password.length < 7) {
      return false;
    }

    if (name.length < 5) {
      return false;
    }

    if (password !== pass) {
      return false;
    }
    return true;
  };
  const buttonOnClick = () => {
    if (validation(email, password, name, pass, phone)) {
      const signURL = `http://${BASE_URL}/signup`;
      fetch(signURL, {
        method: 'POST',
        body: JSON.stringify({
          email,
          name,
          password,
          phone,
        }),
        headers: {
          'content-Type': 'application/json',
        },
      });
      alert('가입이 되었습니다. ');
    } else {
      console.log('string: ', string);
      alert(`${string} 가입에 실패하였습니다.`);
      // setEmail('');
      // setPassword('');
      // setName('');
      // setPass('');
      // setPhone('');
    }
  };

  const val = validation(email, password, name, pass, phone);
  //console.log('val', name);
  return (
    <>
      <div className={css.wrap}>
        <div className={css.first}>
          J o i n <br />
          <div className={css.log}>회원가입</div>
        </div>
        <div className={css.line_front}></div>
        <div className={css.email_section}>
          {/* <div className={css.eMail}>이메일</div> */}
          <span className={css.pose}>이메일 </span>
          <input
            value={email}
            placeholder="이메일을 입력해주세요"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className={css.email_section}>
          <div>
            {' '}
            <span className={css.pose}>이름</span>
          </div>

          <input
            value={name}
            placeholder="이름을 입력하세요"
            onChange={event => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className={css.email_section}>
          <div>
            <span className={css.pose}>비밀번호</span>
          </div>
          <input
            value={password}
            placeholder="비밀번호를 입력하세요"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <div className={css.func}>
            <a href="#" title="english">
              영문
            </a>

            <a href="#" title="number" className={css.func1}>
              숫자
            </a>

            <a href="#" title="special" className={css.func2}>
              특수문자
            </a>

            <a href="#" title="length" className={css.func3}>
              8자이상 20자 이하
            </a>
          </div>
        </div>
        <div className={css.email_section}>
          <input
            value={pass}
            placeholder="비밀번호를 확인해 주세요"
            required
            onChange={event => {
              setPass(event.target.value);
            }}
          />
        </div>
        <div className={css.email_section1}>
          <div className={css.phone}>
            <span className={css.pose}>휴대전화</span>
          </div>
          <div className={css.korea}>
            <select>
              <option>대한민국+82</option>
              <option>니카라과+505</option>
              <option>니제르+227</option>
              <option>노르웨이+47</option>
            </select>
          </div>
          <input
            value={phone}
            placeholder="휴대전화번호를 입력해주세요"
            required
            onChange={event => {
              setPhone(event.target.value);
            }}
          />
        </div>
        <div className={css.find_password}>
          {/* <button className={css.sent}>인증번호 발송</button> */}
        </div>
        {/* <div className={css.find_password}>
          <button className={css.find_num}>인증번호 확인</button>
          <button className={css.agree_num}>인증번호 재발송</button>
        </div> */}

        <div className={css.find_password1}>
          <input type="checkbox" value="agree" className={css.gap} />
          <span class={css.scale}>사용자 약관에 전체 동의</span>
        </div>
        <div className={css.find_password}>
          <input
            type="checkbox"
            id="cb1"
            value="service_agree"
            className={css.gap}
          />
          <span class={css.font}>서비스 이용 약관 동의(필수)</span>
          <div className={css.toggle}>
            <button onClick={() => setShowTimer(!showTimer)}>
              {' '}
              <AiOutlineDown />{' '}
            </button>
            <div className={css.find_password_box}>
              {showTimer && <Dacument />}
            </div>
          </div>
        </div>
        <div className={css.find_password}>
          <input type="checkbox" value="service_agree" className={css.gap} />
          <span class={css.font}>개인정보 처리방침 동의(필수)</span>
        </div>
        <div className={css.find_password}>
          <input type="checkbox" value="service_agree" className={css.gap} />
          <span class={css.font}>만 14세 이상 확인(필수)</span>
        </div>
        <div className={css.find_password}>
          <input type="checkbox" value="service_agree" className={css.gap} />
          <span class={css.font}>평생회원제 동의(필수)</span>
        </div>
        <div className={css.find_password}>
          <input type="checkbox" value="service_agree" className={css.gap} />
          <span class={css.font}>마케팅 정보 수신 동의(선택)</span>
        </div>
        <div className={css.find_password}>
          <button className={css.join_member} onClick={buttonOnClick}>
            회원가입
          </button>
          <div className={css.gap_line}></div>
        </div>
      </div>
    </>
  );
}
export default JoinMember;
