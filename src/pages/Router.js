import React, { useState } from 'react';
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
import Promotion from './Promotion/Promotion';
import DetailRoom from './Detail/DetailRoom';

function Router() {
  const [dateModal, setDateModal] = useState(false);
  const [locationModal, setLocationModal] = useState(false);
  return (
    <BrowserRouter>
      <Header
        dateModal={dateModal}
        setDateModal={setDateModal}
        locationModal={locationModal}
        setLocationModal={setLocationModal}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/findstay/:name" element={<Detail />} />
        <Route path="/findstay/:name/:roomid" element={<DetailRoom />} />
        <Route
          path="/findstay"
          element={
            <Find
              locationModal={locationModal}
              setLocationModal={setLocationModal}
            />
          }
        />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/promotion" element={<Promotion />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
