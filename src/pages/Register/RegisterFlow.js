import React, { useState } from 'react';
import TermsAgreement from '../../components/Registration/TermsAgreement/TermsAgreement.js';
import UserInfoInput from '../../components/Registration/UserInfoInput/UserInfoInput.js';
import RegistrationComplete from './RegistrationComplete';

const RegisterFlow = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleLogin = () => {
    // 로그인 페이지로 이동
    window.location.href = '/login';
  };

  return (
    <div>
      {step === 1 && <TermsAgreement onNext={handleNext} />}
      {step === 2 && <UserInfoInput onNext={handleNext} />}
      {step === 3 && <RegistrationComplete onLogin={handleLogin} />}
    </div>
  );
};

export default RegisterFlow;
