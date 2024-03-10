import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RegisterFlow from './pages/Register/RegisterFlow';
import PersonalColor from './components/PersonalColor/PersonalColor';
import DigitalWardrobe from './components/DigitalWardrobe/DigitalWardrobe';
import RecommendationBoard from './components/RecommendationBoard/RecommendationBoard';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterFlow />} />
        <Route path="/personalcolor" element={<PersonalColor />} />
        <Route path="/digitalwardrobe" element={<DigitalWardrobe />} />
        <Route path="/recommendationboard" element={<RecommendationBoard />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
