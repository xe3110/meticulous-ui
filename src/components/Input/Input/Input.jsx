import _omit from 'lodash-es/omit';
import { useState } from 'react';
import { InputBox, Wrapper, Label, HelperText } from './styles';
import { getColor } from './helpers';
import white from '../../../colors/white';

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
  background = white,
  ...params
}) => {
  const [$isFocused, setIsFocused] = useState(false);
  const $shade = getColor(color);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    onChange(e);
  };

  const { placeholder } = params;

  return (
    <Wrapper>
      <InputBox
        {...{
          type,
          name,
          hasError,
          size,
          value,
          $isFocused,
          $shade,
          background,
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        autoComplete={disableAutoComplete ? 'off' : 'on'}
        {..._omit(params, 'placeholder')}
      />
      {(label || (placeholder && !value)) && (
        <Label
          {...{
            hasError,
            $isFocused,
            $shade,
            value,
            background,
            onlyPh: placeholder && !label,
          }}
        >
          {label || placeholder}
        </Label>
      )}
      {helperText && <HelperText {...{ hasError, $isFocused, $shade }}>{helperText}</HelperText>}
    </Wrapper>
  );
};

export default Input;
