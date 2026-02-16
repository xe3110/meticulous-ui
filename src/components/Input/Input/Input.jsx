import { useState } from 'react';
import { InputBox, Wrapper, Label, HelperText } from './styles';
import { getColor } from './helpers';

const Input = ({
  label,
  onChange,
  value,
  type,
  hasError,
  name = 'input',
  color = 'blue',
  size = '20',
  disableAutoComplete,
  helperText = '',
  ...params
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
        {...{ type, name, hasError, size, value, $isFocused, $shade }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        autoComplete={disableAutoComplete ? 'off' : 'on'}
        {...params}
      />
      {label && <Label {...{ hasError, $isFocused, $shade, value }}>{label}</Label>}
      {helperText && <HelperText {...{ hasError, $isFocused, $shade }}>{helperText}</HelperText>}
    </Wrapper>
  );
};

export default Input;
