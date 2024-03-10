import React, { useState } from 'react';
import './UserProfile.css'; // 스타일 파일 연결
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: '사용자 이름',
    height: '사용자 키',
    age: '사용자 나이',
    bottomSize: '하의 사이즈',
    userId: '아이디',
    gender: '성별',
    weight: '체중',
    topSize: '상의 사이즈',
    shoeSize: '신발 사이즈'
  });

  const firstGroupKeys = ['name', 'height', 'age', 'bottomSize', 'userId'];
  const secondGroupKeys = ['gender', 'weight', 'topSize', 'shoeSize'];

  const keyToKorean = {
    name: '이름',
    height: '키',
    age: '나이',
    bottomSize: '하의 사이즈',
    userId: '아이디',
    gender: '성별',
    weight: '체중',
    topSize: '상의 사이즈',
    shoeSize: '신발 사이즈'
  };

  return (
    <div className="userProfile">
      <h3>마이페이지</h3>
      <div className="userProfileContainer">
        <div className="userProfile_name">
          <div className="defaultPhoto">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span>{userInfo.name}</span>
        </div>
        <div className="userInfo">
          <div className="userInfoHeader">
            <h3>기본정보</h3>
            <button className="userInfoChangeButton">정보 수정</button> {/* 정보 변경 버튼 추가 */}
          </div>
          <div className="basicInfo">
            <div className="userInfoGroup">
              {firstGroupKeys.map(key => (
                <div key={key} className="userInfoRow">
                  <span className="userInfoLabel"><h4>{keyToKorean[key]}</h4></span>
                  <span className="userInfoValue">{userInfo[key]}</span>
                </div>
              ))}
            </div>
            <div className="userInfoGroup">
              {secondGroupKeys.map(key => (
                <div key={key} className="userInfoRow">
                  <span className="userInfoLabel"><h4>{keyToKorean[key]}</h4></span>
                  <span className="userInfoValue">{userInfo[key]}</span>
                </div>
              ))}
            <div className="userInfoRow_changepwd">
              <h4>비밀번호 변경</h4>
              <FontAwesomeIcon icon={faChevronRight} /> 
              </div>
            </div>
          </div>
        </div>
        <div className="userProfile_personalcolor">
          <h3>퍼스널컬러</h3>
            <div className="userProfile_personalcolorselect">
              <span><h4>내 퍼스널컬러 등록</h4></span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="userProfile_personalcolorselect">
              <span><h4>퍼스널컬러 검사 결과 보기</h4></span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
        <div className="userProfile_recommendation">
          <h3>게시판 글</h3>
            <div className="userProfile_write">
              <span><h4>내가 쓴 글</h4></span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="userProfile_write">
              <span><h4>댓글 단 글</h4></span>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
