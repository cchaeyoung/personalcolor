import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="login_container">
      <form className="login_form">
        <h2>로그인</h2>
        <div className="input_container">
          <div className="input_section">
            <div className="input_row">
              <label htmlFor="username"><h5>아이디</h5></label>
              <input type="text" placeholder=" 아이디" id="username" name="username" />
            </div>
            <div className="input_row">
              <label htmlFor="password"><h5>비밀번호</h5></label>
              <input type="password" placeholder=" 비밀번호" id="password" name="password" />
            </div>
          </div>
          <div className="button_section">
            <input type="submit" value="로그인" className="login_button"/>
          </div>
        </div>
      </form>

      <div className="forgot_links">
        <div className="forgot_id">
          <label htmlFor="forgot-username">
            <h5>아이디를 잊으셨나요?</h5>
          </label>
          <Link to="/forgot-username" className="forgot_link">
            <button>아이디 찾기</button>
          </Link>
        </div>
        <div className="forgot_pwd">
          <label htmlFor="forgot-password">
            <h5>비밀번호를 잊으셨나요?</h5>
          </label>
          <Link to="/forgot-password" className="forgot_link">
            <button>비밀번호 찾기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
