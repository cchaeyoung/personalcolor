import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import './TermsAgreement.css';

function TermsAgreement({ onNext }) {
    // 상태 관리
    const [agreed, setAgreed] = useState({
        termsOfService: false,
        privacyPolicy: false,
        receiveNotifications: false,
        cameraAccess: false,
        storageAccess: false,
    });

    // 체크박스 변경 처리
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setAgreed({ ...agreed, [name]: checked });
    };

    // 전체 동의 처리
    const handleAllAgree = (event) => {
        const isChecked = event.target.checked;
        setAgreed({
            termsOfService: isChecked,
            privacyPolicy: isChecked,
            receiveNotifications: isChecked,
            cameraAccess: isChecked,
            storageAccess: isChecked,
        });
    };

    // 필수 항목 동의 여부 확인
    const essentialAgreed = agreed.termsOfService && agreed.privacyPolicy && agreed.cameraAccess && agreed.storageAccess;

    return (
        <div className="terms_container">
            <h2>회원가입 약관에 동의해주세요.</h2>
            
            <div className="icon_container">
                <div>
                    <div className="icon-wrapper_terms_terms">
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div className="terms_conditions">
                        <h6>이용약관</h6>
                    </div>
                </div>
                <div>
                    <div className="icon-wrapper_info_terms">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="info_submission">
                        <h6>정보입력</h6>
                    </div>
                </div>
                <div>
                    <div className="icon-wrapper_complete_terms">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="registration_complete">
                        <h6>가입완료</h6>
                    </div>
                </div>
            </div>

            <div className="allagreed_container">
                <label>
                    <input type="checkbox" checked={essentialAgreed && agreed.receiveNotifications} onChange={handleAllAgree} />
                    <h5>약관 전체 동의</h5>
                </label>
            </div>
            <div className="agreed_container">
                <div className="consent_group_three">
                    <label>
                        <input type="checkbox" name="termsOfService" checked={agreed.termsOfService} onChange={handleChange} />
                        <h5>이용약관 동의(필수)</h5>
                    </label>
                    <label>
                        <input type="checkbox" name="privacyPolicy" checked={agreed.privacyPolicy} onChange={handleChange} />
                        <h5 className="terms">개인정보처리방침 동의(필수)</h5>
                    </label>
                    <label>
                        <input type="checkbox" name="receiveNotifications" checked={agreed.receiveNotifications} onChange={handleChange} />
                        <h5 className="terms">알림 수신 동의(선택)</h5>
                    </label>
                </div>
                <div className="consent_group_two">
                    <label>
                        <input type="checkbox" name="cameraAccess" checked={agreed.cameraAccess} onChange={handleChange} />
                        <h5 className="terms">카메라 접근 동의(필수)</h5>
                    </label>
                    <label>
                        <input type="checkbox" name="storageAccess" checked={agreed.storageAccess} onChange={handleChange} />
                        <h5 className="terms">저장소 접근 동의(필수)</h5>
                    </label>
                </div>
            </div>
            <button className="next_button" disabled={!essentialAgreed} onClick={onNext}>다음</button>
        </div>
    );
}

export default TermsAgreement;