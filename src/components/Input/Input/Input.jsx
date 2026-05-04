import { useState } from 'react';
import styled, { css } from 'styled-components';
import white from '../../../colors/white';
import grey from '../../../colors/grey';
import black from '../../../colors/black';
import red from '../../../colors/red';
import blue from '../../../colors/blue';
import green from '../../../colors/green';
import yellow from '../../../colors/yellow';
import orange from '../../../colors/orange';
import violet from '../../../colors/violet';
import teal from '../../../colors/teal';
import purple from '../../../colors/purple';
import pink from '../../../colors/pink';
import SvgIcon from '../Textarea/SvgIcon';

const COLOR_SHADE_MAP = {
  blue: blue.m500,
  red: red.m500,
  green: green.m500,
  yellow: yellow.m500,
  orange: orange.m500,
  black: black.m500,
  grey: grey.m500,
  violet: violet.m500,
  teal: teal.m500,
  purple: purple.m500,
  pink: pink.m500,
};

const getColor = (clr) => COLOR_SHADE_MAP[clr] ?? grey.m500;

const getCssShade = ({ $hasError, $shade, $isFocused, value, $onlyPh }) => {
  if ($hasError) {
    return typeof value === 'string' && !value && !$isFocused ? grey.m500 : red.m400;
  }
  if ($isFocused && !$onlyPh) {
    return $shade;
  }
  return grey.m500;
};

const getPadding = ({ $hasLeftIcon, $hasRightIcon }) => {
  if ($hasLeftIcon && $hasRightIcon) {
    return '0 3.84rem';
  }
  if ($hasLeftIcon) {
    return '0 0.96rem 0 3.84rem';
  }
  if ($hasRightIcon) {
    return '0 3.84rem 0 0.96rem';
  }
  return '0 0.96rem';
};

const InputBox = styled.input`
  height: 4.8rem;
  border-radius: 0.64rem;
  font-size: 2.24rem;
  border: 2px solid ${({ $hasError }) => ($hasError ? red.m400 : black.m200)};
  padding: ${getPadding};
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: ${({ $background }) => $background} !important;
  overflow: hidden;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px var(--input-bg) inset;
    -webkit-text-fill-color: var(--input-text);
    transition: background-color 9999s ease-in-out 0s;
  }

  &::placeholder {
    color: ${grey.m500};
    font-weight: 300;
    font-size: 2.24rem;
    background-color: ${({ $background }) => $background};
    pointer-events: none;
  }

  &:focus {
    border: 2px solid
      ${({ $shade, $hasError }) => getCssShade({ $shade, $hasError, $isFocused: true })};
    outline: none;
  }
`;

const HelperText = styled.p`
  margin-top: 0.64rem;
  margin-left: 0.64rem;
  font-size: 1.28rem;
  color: ${getCssShade};
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const LeftIconWrapper = styled.div`
  position: absolute;
  top: 1.28rem;
  left: 0.96rem;
`;

const RightIconWrapper = styled.div`
  position: absolute;
  top: 1.28rem;
  right: 0.96rem;
`;

const RightIconParent = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.div`
  position: absolute;
  top: -0.64rem;
  left: 0.8rem;
  font-size: 1.28rem;
  background-color: ${({ $outerBackground }) => $outerBackground};
  border-radius: 0.64rem;
  margin: 0 0.64rem;
  transition: 0.25s;
  font-weight: 400;
  pointer-events: none;
  color: ${getCssShade};

  ${({ $isFocused, value, $onlyPh }) =>
    !$onlyPh && ($isFocused || value)
      ? css`
          top: -0.64rem;
          left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? 3.52 : 0.8)}rem;
          padding: 0 0.64rem;
          margin: 0;
        `
      : css`
          top: 1.28rem;
          left: ${({ $hasLeftIcon }) => ($hasLeftIcon ? 3.52 : 0.8)}rem;
          font-size: 2.24rem;
        `}
`;

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

  const $hasLeftIcon = !!leftIcon;
  const $hasRightIcon = !!rightIcon;

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
      {leftIcon && (
        <LeftIconWrapper aria-hidden='true'>
          <SvgIcon svgIcon={leftIcon} iconStyles={iconStyles} />
        </LeftIconWrapper>
      )}
      {rightIcon && (
        <RightIconWrapper aria-hidden='true'>
          <SvgIcon svgIcon={rightIcon} iconStyles={iconStyles} />
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
