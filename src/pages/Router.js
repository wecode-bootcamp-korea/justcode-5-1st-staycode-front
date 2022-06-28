import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Basket from './Basket/Basket';
import Detail from './Detail/Detail';
import Find from './Find/Find';
import Reservation from './Reservation/Reservation';
import JoinMember from './Login/JoinMember';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/joinMember" element={<JoinMember />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/find" element={<Find />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
