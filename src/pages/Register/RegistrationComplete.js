import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './RegistrationComplete.css';

function RegistrationComplete({onLogin}) {
  
    return (
        <div className="complete_container">
            
            <div className="icon_container">
                <div>
                    <div className="icon-wrapper_terms_complete">
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div className="terms_conditions">
                        <h6>이용약관</h6>
                    </div>
                </div>
                <div>
                    <div className="icon-wrapper_info_complete">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="info_submission">
                        <h6>정보입력</h6>
                    </div>
                </div>
                <div>
                    <div className="icon-wrapper_complete_complete">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="registration_complete">
                        <h6>가입완료</h6>
                    </div>
                </div>
            </div>

            <h2>회원가입 완료</h2>

            <button className="info_next_button" onClick={onLogin}>로그인</button>

            
        </div>
    );
}

export default RegistrationComplete;

