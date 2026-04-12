import _get from 'lodash-es/get';
import grey from '../../../colors/grey';
import P from '../../Typography/P';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import { Box, Wrapper } from './styles';
import { getColor } from './helpers';

const Checkbox = ({ label, value, color = 'blue', textColor = grey.m700, disabled, onChange }) => {
  const clickHandler = () => {
    if (disabled) return;
    onChange(!value);
  };

  const shade = getColor(color);
  const innerShade = _get(shade, 'm500', blue.m500);
  const outerShade = _get(shade, 'm800', blue.m800);

  return (
    <Wrapper onClick={clickHandler} $disabled={disabled}>
      <input
        type='checkbox'
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} // visually hidden
      />
      <Box
        $value={value}
        size={6}
        color={white}
        $innerShade={innerShade}
        $outerShade={outerShade}
      />
      <P color={textColor} size='1.2rem'>
        {label}
      </P>
    </Wrapper>
  );
};

export default Checkbox;
