import { useState, useRef, useEffect } from 'react';
import { OTPWrapper } from './styles';
import { renderNums } from './helpers';

const OtpInput = ({ length = 6, value = '', onChange, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const inputsRef = useRef([]);
  const otpRef = useRef(otp);
  const programmaticFocusRef = useRef(false);

  const focusCell = (index) => {
    programmaticFocusRef.current = true;
    inputsRef.current[index]?.focus();
  };

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
    otpRef.current = newOtp;
    setOtp(newOtp);
    const joined = newOtp.join('');

    onChange?.(joined);

    if (joined.length === length) {
      onComplete?.(joined);
    }
  };

  const handleChange = (val, index) => {
    val = val.replace(/\D/g, '').slice(-1);

    const newOtp = [...otp];
    newOtp[index] = val;
    updateOtp(newOtp);

    if (val && index < length - 1) {
      focusCell(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        updateOtp(newOtp);
      }
      if (index > 0) focusCell(index - 1);
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      focusCell(index - 1);
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      focusCell(index + 1);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const next = e.shiftKey ? index - 1 : index + 1;
      if (next >= 0 && next < length) focusCell(next);
    }
  };

  const handleFocus = (index) => {
    if (programmaticFocusRef.current) {
      programmaticFocusRef.current = false;
      return;
    }
    const firstEmpty = otpRef.current.findIndex((d) => d === '');
    const target = firstEmpty === -1 ? length - 1 : firstEmpty;
    if (index !== target) focusCell(target);
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
    focusCell(lastIndex);
  };

  return (
    <OTPWrapper
      style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
      onPaste={handlePaste}
    >
      {otp.map(renderNums({ inputsRef, handleChange, handleKeyDown, handleFocus }))}
    </OTPWrapper>
  );
};

export default OtpInput;
