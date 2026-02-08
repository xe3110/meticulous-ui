import { useState } from 'react';
import { InputBox, Wrapper, Label } from './styles';
import { getColor } from './helpers';

const Input = ({
  label,
  onChange,
  value,
  type,
  hasError,
  color = 'blue',
  size = '20',
  disableAutoComplete,
}) => {
  const [$isFocused, setIsFocused] = useState(false);
  const $shade = getColor(color);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <Wrapper>
      <InputBox
        {...{ type, hasError, size, value, $isFocused, $shade }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name='name'
        onChange={handleChange}
        autoComplete={disableAutoComplete ? 'off' : 'on'}
      />
      {label && <Label {...{ $isFocused, $shade, value }}>{label}</Label>}
    </Wrapper>
  );
};

export default Input;
