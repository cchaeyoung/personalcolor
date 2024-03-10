import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import './UserInfoInput.css';

function UserInfoInput ({ onNext }) {
    

    return (
        <div className="info_container">
            <h2>회원정보 입력</h2>
            
            <div className="icon_container">
              <div>
                <div className="icon-wrapper_terms_info">
                  <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className="terms_conditions">
                  <h6>이용약관</h6>
                </div>
              </div>
              <div>
                <div className="icon-wrapper_info_info">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="info_submission">
                  <h6>정보입력</h6>
                </div>
              </div>
              <div>
                <div className="icon-wrapper_complete_info">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div className="registration_complete">
                  <h6>가입완료</h6>
                </div>
              </div>
            </div>
            
            <div className="form-group_name">
              <label htmlFor="name"><h5>이름</h5></label>
              <input type="text" placeholder=" 이름" id="name" name="name" />
            </div>
            <div className="form-group_id">
              <label htmlFor="username"><h5>아이디</h5></label>
              <input type="text" placeholder=" 아이디" id="username" name="username" />
              <button type="button" className="check_button">중복확인</button>
            </div>
            <div className="form-group_pwd">
              <label htmlFor="password"><h5>비밀번호</h5></label>
              <input type="password" placeholder=" 영문, 숫자, 특수문자 중 2종류 이상" id="password" name="password" />
            </div>
            <div className="form-group_confirmpwd">
              <label htmlFor="confirmPassword"><h5>비밀번호 확인</h5></label>
              <input type="password" placeholder=" 영문, 숫자, 특수문자 중 2종류 이상" id="confirmpassword" name="confirmpassword" />
            </div>
            <div class="form-group_gender">
              <label for="gender"><h5>성별</h5></label>
              <select id="gender" name="gender">
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
              <label for="age"><h5>나이</h5></label>
              <input type="number" id="age" name="age" min="0" />
            </div>
            <div class="form-group_height">
              <label for="height"><h5>키</h5></label>
              <input type="number" id="height" name="height" min="0" />
              <label for="weight"><h5>체중</h5></label>
              <input type="number" id="weight" name="weight" min="0" />
            </div>
            <div class="form-group_size">
              <label for="topSize"><h5>상의 사이즈</h5></label>
              <input type="text" id="topSize" name="topSize" />
              <label for="bottomSize"><h5>하의 사이즈</h5></label>
              <input type="text" id="bottomSize" name="bottomSize" />
              <label for="shoeSize"><h5>신발 사이즈</h5></label>
              <input type="number" id="shoeSize" name="shoeSize" min="0" />
            </div>
            <div className="info_button">
              <button className="info_before_button" >이전</button>
              <button className="info_next_button" onClick={onNext}>다음</button>
            </div>
          </div>
            
    );
}

export default UserInfoInput;
