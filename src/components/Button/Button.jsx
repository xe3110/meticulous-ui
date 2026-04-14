import _get from 'lodash-es/get';
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
    ...rest
  } = props || {};
  const { m400: selectedColor, m500: hoverColor, m600: activeColor } = _get(colors, theme, blue);
  const { height: $height, width: $width, font: $font } = SIZE[size] || {};

  const textColor = theme !== 'white' ? white : grey.m600;

  const btnChild = (
    <ButtonWrapper
      {...rest}
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
          <Spinner size='small' color={textColor} />
        </SpinnerWrapper>
      ) : (
        <Content
          {...{
            $textColor: textColor,
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
