import { useState } from 'react';
import _get from 'lodash-es/get';
import grey from '../../../colors/grey';
import P from '../../Typography/P';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import { Box, Wrapper, CbInput } from './styles';
import { getColor } from './helpers';

const Checkbox = ({ label, value, color = 'blue', textColor = grey.m700, disabled, onChange }) => {
  const [focused, setFocused] = useState(false);

  const shade = getColor(color);
  const innerShade = _get(shade, 'm500', blue.m500);
  const outerShade = _get(shade, 'm800', blue.m800);

  const changeHandler = (e) => onChange(e.target.checked);
  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      onChange(!value);
      setFocused(false);
    }
    if (e.key === 'Escape') setFocused(false);
  };
  const focusHandler = (val) => () => setFocused(val);

  return (
    <Wrapper as='label' $disabled={disabled}>
      <CbInput
        type='checkbox'
        checked={value}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        onFocus={focusHandler(true)}
        onBlur={focusHandler(false)}
        disabled={disabled}
      />
      <Box
        $value={value}
        $focused={focused}
        size={6}
        color={white}
        $innerShade={innerShade}
        $outerShade={outerShade}
        aria-hidden='true'
      />
      <P color={textColor} size='1.2rem'>
        {label}
      </P>
    </Wrapper>
  );
};

export default Checkbox;
