import { useRef } from 'react';
import Spinner from '../Spinner/Spinner';
import colors from '../../colors/colorMap';
import blue from '../../colors/blue';
import Ripple from '../Ripple';
import white from '../../colors/white';
import grey from '../../colors/grey';
import { MEDIUM, SIZE } from './constants';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonWrapper = styled.button`
  height: ${({ $height }) => $height}rem;
  width: ${({ $width }) => $width}rem;
  border-radius: 0.96rem;
  border: none;
  padding: 0.96rem 0.64rem;
  position: relative;
  overflow: hidden;
  background-color: ${({ $selectedColor, disabled }) => (disabled ? grey.m500 : $selectedColor)};
  cursor: ${({ disabled, $isLoading }) =>
    disabled ? 'not-allowed' : $isLoading ? 'auto' : 'pointer'};

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
    `};

  ${({ disabled, $isLoading }) =>
    !(disabled || $isLoading) &&
    css`
      &:hover {
        background-color: ${({ $hoverColor }) => $hoverColor};
      }

      &:active {
        background-color: ${({ $activeColor }) => $activeColor};
      }
    `};

  &:focus-visible {
    outline: none;
  }
`;

const Content = styled.div`
  font-size: ${({ $font }) => $font}rem;
  font-weight: 500;
  max-width: 100%;
  overflow: hidden;
  color: ${({ $textColor }) => $textColor};
  opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const ButtonContainer = styled.div`
  height: ${({ $height }) => $height}rem;
  width: ${({ $width }) => $width}rem;
  display: inline-block;
  position: relative;
  border-radius: 0.96rem;

  ${({ disabled, $isLoading }) =>
    !(disabled || $isLoading) &&
    css`
      box-shadow: 0 0.4rem 1.5rem rgba(0, 0, 0, 0.2);
      transition:
        transform 0.2s,
        box-shadow 0.2s;

      &:hover,
      &:focus-within {
        box-shadow: 0 0.6rem 2rem rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
      }
    `};
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isLoading }) => ($isLoading ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const Rippled = ({ theme, children }) => <Ripple rippleColor={theme['m100']}>{children}</Ripple>;

const Button = (props) => {
  const {
    children,
    theme = blue,
    size = MEDIUM,
    width,
    leftIcon,
    rightIcon,
    isLoading,
    textColor,
    onKeyDown,
    style,
    ...rest
  } = props || {};

  const lastKeyPressRef = useRef(0);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const now = Date.now();
      if (now - lastKeyPressRef.current < 500) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      lastKeyPressRef.current = now;
    }
    onKeyDown?.(e);
  };
  const { m400: selectedColor, m500: hoverColor, m600: activeColor } = colors[theme] ?? blue;
  const { height: $height, width: $width, font: $font } = SIZE[size] || {};

  const txtClr = ['white', 'yellow'].includes(theme) ? grey.m600 : white;

  const btnChild = (
    <ButtonWrapper
      type='button'
      {...rest}
      onKeyDown={handleKeyDown}
      {...{
        $hoverColor: hoverColor,
        $activeColor: activeColor,
        $selectedColor: selectedColor,
        $height,
        $width: width || $width,
        disabled: props.disabled,
        $isLoading: isLoading,
      }}
    >
      <SpinnerWrapper $isLoading={isLoading}>
        <Spinner size='small' color={textColor || txtClr} />
      </SpinnerWrapper>
      <Content $isLoading={isLoading} $textColor={textColor || txtClr} $font={$font}>
        {children}
      </Content>
    </ButtonWrapper>
  );

  return (
    <ButtonContainer
      style={style}
      {...{ $height, $width: width || $width, disabled: props.disabled, $isLoading: isLoading }}
    >
      {isLoading ? btnChild : <Rippled theme={theme}>{btnChild}</Rippled>}
    </ButtonContainer>
  );
};

Button.propTypes = {
  /** Button label or content */
  children: PropTypes.node,
  /** Color theme key from the meticulous-ui color map. Defaults to `'blue'` */
  theme: PropTypes.string,
  /** Button size variant: `'small'`, `'medium'`, `'large'`, or `'ex-large'` */
  size: PropTypes.string,
  /** Override the button width */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Icon component rendered to the left of the label */
  leftIcon: PropTypes.elementType,
  /** Icon component rendered to the right of the label */
  rightIcon: PropTypes.elementType,
  /** Shows a spinner and disables interaction while true */
  isLoading: PropTypes.bool,
  /** Override the label and icon color */
  textColor: PropTypes.string,
  /** Disables the button */
  disabled: PropTypes.bool,
};

export default Button;
