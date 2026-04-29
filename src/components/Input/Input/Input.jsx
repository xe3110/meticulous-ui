import { useState } from 'react';
import { InputBox, Wrapper, Label, HelperText, LeftIconWrapper, RightIconWrapper } from './styles';
import { getColor, getIcon } from './helpers';
import white from '../../../colors/white';
import grey from '../../../colors/grey';
import SvgIcon from '../Textarea/SvgIcon';

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
  background = 'transparent',
  outerBackground = white,
  leftIcon,
  rightIcon,
  placeholder,
  ...params
}) => {
  const [$isFocused, setIsFocused] = useState(false);
  const $shade = getColor(color);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    onChange(e);
  };

  const iconStyles = { color: grey.m500, size: 22 };

  const leftIconRef = getIcon(leftIcon);
  const rightIconRef = getIcon(rightIcon);

  const $hasLeftIcon = !!leftIconRef;
  const $hasRightIcon = !!rightIconRef;

  const $hasError = hasError;
  const $background = background;
  const inputId = `input-${name}`;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  return (
    <Wrapper>
      <InputBox
        {...{
          type,
          name,
          $hasError,
          size,
          value,
          $isFocused,
          $shade,
          $background,
          $hasLeftIcon,
          $hasRightIcon,
        }}
        id={inputId}
        aria-invalid={$hasError ? true : undefined}
        aria-describedby={helperId}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        autoComplete={disableAutoComplete ? 'off' : 'on'}
        {...params}
      />
      {leftIconRef && (
        <LeftIconWrapper aria-hidden='true'>
          <SvgIcon svgIcon={leftIconRef} iconStyles={iconStyles} />
        </LeftIconWrapper>
      )}
      {rightIconRef && (
        <RightIconWrapper aria-hidden='true'>
          <SvgIcon svgIcon={rightIconRef} iconStyles={iconStyles} />
        </RightIconWrapper>
      )}
      {(label || (placeholder && !value)) && (
        <Label
          as='label'
          htmlFor={inputId}
          {...{
            $hasError,
            $isFocused,
            $shade,
            value,
            $outerBackground: $isFocused || !!value ? outerBackground : background,
            $hasLeftIcon,
            $hasRightIcon,
            $onlyPh: placeholder && !label,
          }}
        >
          {label || placeholder}
        </Label>
      )}
      {helperText && (
        <HelperText id={helperId} {...{ $hasError, $isFocused, $shade, $hasLeftIcon }}>
          {helperText}
        </HelperText>
      )}
    </Wrapper>
  );
};

export default Input;
