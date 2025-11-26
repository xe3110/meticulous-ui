import { useState, useRef, useEffect } from 'react';
import { OTPWrapper } from './styles';
import { renderNums } from './helpers';

const OtpInput = ({ length = 6, value = '', onChange, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);

  // When external value changes
  useEffect(() => {
    if (!value) return;

    const str = String(value).replace(/\D/g, '').slice(0, length);
    const newOtp = str.split('');

    // Fill remaining empty boxes with ""
    while (newOtp.length < length) newOtp.push('');

    setOtp(newOtp);

    // If complete OTP provided, trigger onComplete
    if (str.length === length) {
      onComplete?.(str);
    }
  }, [value, length, onComplete]);

  const updateOtp = (newOtp) => {
    setOtp(newOtp);
    const joined = newOtp.join('');

    onChange?.(joined);

    if (joined.length === length) {
      onComplete?.(joined);
    }
  };

  const handleChange = (val, index) => {
    val = val.replace(/\D/g, '');

    const newOtp = [...otp];
    newOtp[index] = val;
    updateOtp(newOtp);

    if (val && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '');
    if (!pasted) return;

    const newOtp = Array(length).fill('');
    pasted
      .slice(0, length)
      .split('')
      .forEach((char, i) => (newOtp[i] = char));

    updateOtp(newOtp);

    const lastIndex = Math.min(pasted.length - 1, length - 1);
    inputsRef.current[lastIndex]?.focus();
  };

  return (
    <OTPWrapper
      style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
      onPaste={handlePaste}
    >
      {otp.map(renderNums({ inputsRef, handleChange, handleKeyDown }))}
    </OTPWrapper>
  );
};

export default OtpInput;
