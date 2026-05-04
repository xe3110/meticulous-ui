import { useRef, useState } from 'react';
import white from '../../../colors/white';
import grey from '../../../colors/grey';
import SvgIcon from './SvgIcon';
import styled, { css } from 'styled-components';
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
import allIcons from '../../Icons/iconsMap';

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

const getIcon = (iconName) => allIcons[iconName] ?? null;

const getCssShade = ({ $hasError, $shade, $isFocused, value, $onlyPh }) => {
  if ($hasError) {
    return typeof value === 'string' && !value && !$isFocused ? grey.m500 : red.m400;
  }
  if ($isFocused && !$onlyPh) {
    return $shade;
  }
  return grey.m500;
};

const TextareaBox = styled.textarea`
  border-radius: 0.64rem;
  font-size: 2.24rem;
  border: 2px solid ${({ $hasError }) => ($hasError ? red.m400 : black.m200)};
  padding: 0.96rem;
  font-weight: 400;
  transition: border-color 0.3s ease;
  background-color: ${({ $background }) => $background} !important;
  min-height: 2.24rem;
  min-width: 4.8rem;

  ${({ $isResizeNone }) =>
    $isResizeNone &&
    css`
      resize: none;
    `}

  ${({ $isDynamic }) =>
    $isDynamic &&
    css`
      resize: none;
    `}

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: -moz-available; /* Firefox */
  max-width: -webkit-fill-available; /* Chrome, Safari, Edge */
  max-width: stretch; /* Modern Standard */

  ${({ $isFocused, $value, $onlyPh }) =>
    !$onlyPh && ($isFocused || $value)
      ? css`
          top: -0.64rem;
          left: 0.8rem;
          padding: 0 0.64rem;
          margin: 0;
        `
      : css`
          top: 1.28rem;
          left: 0.8rem;
          font-size: 2.24rem;
        `}
`;

const Parent = styled.div`
  overflow: hidden;
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

const Textarea = ({
  label,
  onChange,
  value,
  type,
  hasError,
  name = 'textarea',
  color = 'blue',
  helperText = '',
  background = 'transparent',
  outerBackground = white,
  isDynamic,
  isResizeNone,
  rows = '2',
  cols = '20',
  leftIcon,
  rightIcon,
  placeholder,
  ...params
}) => {
  const [$isFocused, setIsFocused] = useState(false);
  const $shade = getColor(color);
  const textAreaRef = useRef(null);

  const resizeToContent = (element) => {
    element.style.height = '';
    const overflow = element.scrollHeight - element.clientHeight;
    if (overflow > 0) {
      const currentHeight = parseFloat(window.getComputedStyle(element).height);
      element.style.height = `${currentHeight + overflow}px`;
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleChange = (e) => {
    if (isDynamic && textAreaRef.current) {
      resizeToContent(textAreaRef.current);
    }
    onChange(e);
  };

  const iconStyles = { color: grey.m500, size: 20 };
  const leftIconRef = getIcon(leftIcon);
  const rightIconRef = getIcon(rightIcon);
  const $hasLeftIcon = !!leftIconRef;
  const $hasRightIcon = !!rightIconRef;
  const $hasError = hasError;
  const $isDynamic = isDynamic;
  const $background = background;
  const rowsObj = { rows };
  const textareaId = `textarea-${name}`;
  const helperId = helperText ? `${textareaId}-helper` : undefined;

  return (
    <Wrapper>
      <TextareaBox
        {...{
          type,
          name,
          $hasError,
          value,
          $isFocused,
          $shade,
          $isDynamic,
          $background,
          cols,
          $hasLeftIcon,
          $hasRightIcon,
          $isResizeNone: isResizeNone,
          ...rowsObj,
        }}
        id={textareaId}
        aria-invalid={$hasError ? true : undefined}
        aria-describedby={helperId}
        ref={textAreaRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...params}
      />
      {leftIconRef && (
        <LeftIconWrapper aria-hidden='true' style={{ top: '1.2rem', transform: 'none' }}>
          <SvgIcon svgIcon={leftIconRef} iconStyles={iconStyles} />
        </LeftIconWrapper>
      )}

      {rightIconRef && (
        <RightIconWrapper aria-hidden='true' style={{ top: '1.2rem', transform: 'none' }}>
          <SvgIcon svgIcon={rightIconRef} iconStyles={iconStyles} />
        </RightIconWrapper>
      )}
      <Parent>
        {(label || (placeholder && !value)) && (
          <Label
            as='label'
            htmlFor={textareaId}
            {...{
              $hasError,
              $isFocused,
              $shade,
              $value: value,
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
      </Parent>
    </Wrapper>
  );
};

export default Textarea;
