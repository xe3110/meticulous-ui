import { Input } from './styles';

const changeHandler = (handleChange, index) => (e) => {
  handleChange(e.target.value, index);
};

const keyDownHandler = (handleKeyDown, index) => (e) => handleKeyDown(e, index);

const Num = ({ inputsRef, handleChange, handleKeyDown, handleFocus, digit, index, length }) => {
  const getRef = (el) => (inputsRef.current[index] = el);

  return (
    <Input
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

export const renderNums =
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
