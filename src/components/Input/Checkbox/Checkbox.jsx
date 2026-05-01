import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import grey from '../../../colors/grey';
import P from '../../Typography/P';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import { Box, Wrapper, CbInput } from './styles';
import { getColor } from './helpers';

const Checkbox = ({
  label,
  value,
  color = 'blue',
  textColor = grey.m700,
  disabled,
  onChange,
  tabIndex,
  innerShade: innerShadeOverride,
  outerShade: outerShadeOverride,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);

  const shade = getColor(color);
  const innerShade = innerShadeOverride ?? shade?.m500 ?? blue.m500;
  const outerShade = outerShadeOverride ?? shade?.m600 ?? blue.m600;
  const lastKeyPressRef = useRef(0);

  const changeHandler = (e) => onChange(e.target.checked);
  const keyDownHandler = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const now = Date.now();
      if (now - lastKeyPressRef.current < 500) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      lastKeyPressRef.current = now;
      if (e.key === ' ') {
        e.preventDefault();
        onChange(!value);
        return;
      }
      onChange(!value);
      setFocused(false);
    }
    if (e.key === 'Escape') setFocused(false);
  };
  const focusHandler = (val) => () => setFocused(val);

  return (
    <Wrapper as='label' $disabled={disabled} {...rest}>
      <CbInput
        type='checkbox'
        checked={value}
        onChange={changeHandler}
        onKeyDown={keyDownHandler}
        onFocus={focusHandler(true)}
        onBlur={focusHandler(false)}
        disabled={disabled}
        tabIndex={tabIndex}
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
      <P color={textColor} size='1.92rem'>
        {label}
      </P>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  /** Text label rendered next to the checkbox */
  label: PropTypes.string,
  /** Controlled checked state */
  value: PropTypes.bool,
  /** Color theme key for the checkbox accent. Defaults to 'blue' */
  color: PropTypes.string,
  /** Color of the label text */
  textColor: PropTypes.string,
  /** Disables the checkbox */
  disabled: PropTypes.bool,
  /** Called with the new boolean value on change */
  onChange: PropTypes.func,
  /** Tab order index for the checkbox input */
  tabIndex: PropTypes.number,
  /** Override the inner fill color (checked state) */
  innerShade: PropTypes.string,
  /** Override the outer border/ring color (checked state) */
  outerShade: PropTypes.string,
};

export default Checkbox;
