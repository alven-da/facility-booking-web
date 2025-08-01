import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/Footer/Footer';
import FocusableInput from '@/components/PriceCalculator/PriceCalculator';

import Home from '@/components/page/Home/Home';
import Booking from '@/components/page/Booking/Booking';
import Membership from '@/components/page/Membership/Membership';
import Prepayment from '@/components/page/Prepayment/Prepayment';
import Success from '@/components/page/Success/Success';
import Cancelled from '@/components/page/Cancelled/Cancelled';

const App: FC = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<Membership />} />
        <Route path="/select" element={<Booking />} />
        <Route path="/prepayment" element={<Prepayment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancelled" element={<Cancelled />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
