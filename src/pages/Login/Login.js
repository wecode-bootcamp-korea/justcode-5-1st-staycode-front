import { React, useState } from 'react';
// import JoinMember from './JoinMember';
import css from './Login.module.scss';
import { Link, Navigate, Route, useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import { BrowserRouter, Routes } from 'react-router-dom';
import JoinMember from './JoinMember';
import { BASE_URL } from '../../config';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const onChange = event => {
    setInputs(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const validation = (email, password) => {
    if (!email.includes('@')) {
      return false;
    }
    if (password.length < 7) {
      return false;
    }
    return true;
  };

  const buttonOnClick = () => {
    console.log('email: ', email);
    console.log('pw: ', password);
    if (validation(email, password)) {
      console.log('val: ', validation);
      const loginURL = `http://${BASE_URL}/login`;
      fetch(loginURL, {
        method: 'POST',
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          'content-Type': 'application/json',
          authentication: localStorage.getItem('token'),
        },
      })
        .then(res => {
          if (res.status === 200) {
            console.log('status :', res.status);
            alert('login이 되었습니다.');
            navigate('/');
          } else if (res.statusCode !== 200) {
            console.log('status error: ', res.statusCode);
            alert('로그인에 실패하였습니다.');
          }
          return res.json();
        })
        .then(jsonData => {
          localStorage.setItem('token', jsonData.token);
          console.log('localStorage: ', localStorage);
          localStorage.getItem('token');
          console.log('getItem: ', localStorage);
          //token 을 key 값으로 필요한 곳에서 가져감
        });
    }
  };
  const val = validation(email, password);
  return (
    <>
      {/* <div className={css.container}> */}
      <div className={css.wrap}>
        <div className={css.first}>
          L O G I N<div className={css.log}> 로그인 </div>
        </div>
        <div className={css.line}> </div>
        <div className={css.email_section}>
          <input
            value={email}
            placeholder="이메일 아이디"
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className={css.password_section}>
          <input
            placeholder="비밀번호"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </div>
        <button className={css.login_section} onClick={buttonOnClick}>
          l o g i n
        </button>
        <div>
          <Link to="./JoinMember">
            <button className={css.join_membership}>회원가입</button>
          </Link>
        </div>
        <div className={css.find_password}>
          <button className={css.find_butt}>비밀번호 찾기</button>
          <button className={css.find_butt1}>비회원 예약 조회</button>
        </div>
      </div>
    </>
  );
}

export default Login;
