import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header_container">
        <Link to="/">
          <p>로고</p>
        </Link>
        <div className="header_navbar_container">
          <ul>
            <li>
              <Link to="/personalcolor">
                <span>퍼스널컬러</span>
              </Link>
            </li>
            <li>
              <Link to="/digitalwardrobe">
                <span>디지털옷장</span>
              </Link>
            </li>
            <li>
              <Link to="/recommendationboard">
                <span>게시판</span>
              </Link>
            </li>
            <li>
              <Link to="/userprofile">
                <span>마이페이지</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_welcome_container">
          <ul>
            <li>
              <Link to="/login">
                <span>로그인</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <span>회원가입</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;

