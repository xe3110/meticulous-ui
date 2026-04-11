import _get from 'lodash-es/get';
import P from '../../Typography/P';
import blue from '../../../colors/blue';
import { Circle, CircleBorder, HiddenInput, Wrapper } from './styles';

const Radio = ({ label, value, name, color, textColor, isSelected, disabled, onChange }) => {
  const innerShade = _get(color, 'm500', blue.m500);
  const outerShade = _get(color, 'm800', blue.m800);

  const changeHandler = () => onChange(value);

  return (
    <Wrapper $disabled={disabled}>
      <HiddenInput
        type='radio'
        name={name}
        value={value}
        checked={isSelected}
        disabled={disabled}
        onChange={changeHandler}
      />
      <CircleBorder $isSelected={isSelected} $shade={outerShade}>
        <Circle $isSelected={isSelected} $shade={innerShade} />
      </CircleBorder>
      <P color={textColor} size='1.2rem'>
        {label}
      </P>
    </Wrapper>
  );
};

export default Radio;
