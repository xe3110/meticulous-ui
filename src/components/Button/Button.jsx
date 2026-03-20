import _get from 'lodash-es/get';
import Spinner from '../Spinner/Spinner';
import colors from '../../colors';
import blue from '../../colors/blue';
import { ButtonWrapper, Content, ButtonContainer, SpinnerWrapper } from './styles';
import Ripple from '../Ripple';
import white from '../../colors/white';
import grey from '../../colors/grey';
import { MEDIUM, SIZE } from './constants';

const Button = (props) => {
  const {
    children,
    theme = blue,
    size = MEDIUM,
    width,
    leftIcon,
    rightIcon,
    isLoading,
  } = props || {};
  const { m400: selectedColor, m500: hoverColor, m600: activeColor } = _get(colors, theme, blue);
  const { height: $height, width: $width, font: $font } = SIZE[size] || {};

  const textColor = theme !== 'white' ? white : grey.m600;

  return (
    <ButtonContainer
      {...{ $height, $width: width || $width, disabled: props.disabled, $isLoading: isLoading }}
    >
      <Ripple rippleColor={theme['m100']}>
        <ButtonWrapper
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
      </Ripple>
    </ButtonContainer>
  );
};

export default Button;
