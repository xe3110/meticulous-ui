import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import grey from '../../colors/grey';

const OTPWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {\
    gap: 0.32rem;
  }
`;

const OtpInputBox = styled.input`
  height: 3.2rem;
  width: 3.2rem;
  font-size: 1.92rem;
  text-align: center;
  color: ${grey.m600};
  border: 1px solid ${grey.m800};
  border-radius: 0.32rem;
`;

const changeHandler = (handleChange, index) => (e) => {
  handleChange(e.target.value, index);
};

const keyDownHandler = (handleKeyDown, index) => (e) => handleKeyDown(e, index);

const Num = ({ inputsRef, handleChange, handleKeyDown, handleFocus, digit, index, length }) => {
  const getRef = (el) => (inputsRef.current[index] = el);

  return (
    <OtpInputBox
      key={`key-${index}`}
      ref={getRef}
      maxLength={1}
      inputMode='numeric'
      autoComplete='one-time-code'
      aria-label={`Digit ${index + 1} of ${length}`}
      value={digit}
      onChange={changeHandler(handleChange, index)}
      onKeyDown={keyDownHandler(handleKeyDown, index)}
      onFocus={() => handleFocus(index)}
    />
  );
};

const renderNums =
  ({ inputsRef, handleChange, handleKeyDown, handleFocus, length }) =>
  (digit, index) => (
    <Num
      key={`otp-num-${index}`}
      {...{
        inputsRef,
        handleChange,
        handleKeyDown,
        handleFocus,
        digit,
        index,
        length,
      }}
    />
  );

const OtpInput = ({ length = 6, value = '', onChange, onComplete, ...rest }) => {
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
    const firstEmpty = otp.findIndex((d) => d === '');
    const lastValid = firstEmpty === -1 ? length - 1 : firstEmpty;

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
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (index + 1 <= lastValid) focusCell(index + 1);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (e.shiftKey) {
        if (index > 0) focusCell(index - 1);
      } else {
        focusCell(lastValid);
      }
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
    <OTPWrapper onPaste={handlePaste} {...rest}>
      {otp.map(renderNums({ inputsRef, handleChange, handleKeyDown, handleFocus, length }))}
    </OTPWrapper>
  );
};

OtpInput.propTypes = {
  /** Number of OTP input boxes. Defaults to 6 */
  length: PropTypes.number,
  /** Controlled OTP value (digits only) */
  value: PropTypes.string,
  /** Called with the current OTP string on each keystroke */
  onChange: PropTypes.func,
  /** Called with the completed OTP string when all boxes are filled */
  onComplete: PropTypes.func,
};

export default OtpInput;
