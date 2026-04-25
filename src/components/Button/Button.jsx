import { useRef } from 'react';
import Spinner from '../Spinner/Spinner';
import colors from '../../colors';
import blue from '../../colors/blue';
import { ButtonWrapper, Content, ButtonContainer, SpinnerWrapper } from './styles';
import Ripple from '../Ripple';
import white from '../../colors/white';
import grey from '../../colors/grey';
import { MEDIUM, SIZE } from './constants';

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
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size='small' color={textColor || txtClr} />
        </SpinnerWrapper>
      ) : (
        <Content
          {...{
            $textColor: textColor || txtClr,
            $font,
          }}
        >
          {children}
        </Content>
      )}
    </ButtonWrapper>
  );

  return (
    <ButtonContainer
      {...{ $height, $width: width || $width, disabled: props.disabled, $isLoading: isLoading }}
    >
      {isLoading ? btnChild : <Rippled theme={theme}>{btnChild}</Rippled>}
    </ButtonContainer>
  );
};

export default Button;
