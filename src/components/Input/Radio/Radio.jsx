import P from '../../Typography/P';
import blue from '../../../colors/blue';
import { Circle, CircleBorder, HiddenInput, Wrapper } from './styles';

const Radio = ({ label, value, name, color, textColor, isSelected, disabled, onChange }) => {
  const innerShade = color?.m500 ?? blue.m500;
  const outerShade = color?.m800 ?? blue.m800;

  const changeHandler = () => onChange(value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!disabled) onChange(value);
    }
  };

  return (
    <Wrapper $disabled={disabled} $focusShade={outerShade}>
      <HiddenInput
        type='radio'
        name={name}
        value={value}
        checked={isSelected}
        disabled={disabled}
        onChange={changeHandler}
        onKeyDown={handleKeyDown}
      />
      <CircleBorder aria-hidden='true' $isSelected={isSelected} $shade={outerShade}>
        <Circle $isSelected={isSelected} $shade={innerShade} />
      </CircleBorder>
      <P color={textColor} size='1.2rem'>
        {label}
      </P>
    </Wrapper>
  );
};

export default Radio;
