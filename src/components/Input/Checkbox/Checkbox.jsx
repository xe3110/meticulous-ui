import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import grey from '../../../colors/grey';
import P from '../../Typography/P';
import white from '../../../colors/white';
import blue from '../../../colors/blue';
import green from '../../../colors/green';
import red from '../../../colors/red';
import yellow from '../../../colors/yellow';
import orange from '../../../colors/orange';
import black from '../../../colors/black';
import violet from '../../../colors/violet';
import teal from '../../../colors/teal';
import purple from '../../../colors/purple';
import pink from '../../../colors/pink';
import styled, { css } from 'styled-components';
import Check from '../../Icons/Check';

const COLOR_SHADE_MAP = {
  blue,
  green,
  red,
  yellow,
  orange,
  black,
  grey,
  violet,
  teal,
  purple,
  pink,
};

const getColor = (clr) => COLOR_SHADE_MAP[clr] ?? blue.m500;

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.28rem;
  width: max-content;
  position: relative;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `}
`;

const Box = styled(Check)`
  width: 1.92rem;
  height: 1.92rem;
  border: 1px solid ${({ $value, $outerShade }) => ($value ? $outerShade : grey.m800)};
  border-radius: 0.32rem;
  background-color: ${({ $value, $innerShade }) => ($value ? $innerShade : 'transparent')};
  transition:
    background-color 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px ${({ $focused, $outerShade }) => ($focused ? $outerShade : 'transparent')};

  path {
    stroke-width: 3;
    transform-box: fill-box;
    transform-origin: center;
    transform: scale(${({ $value }) => ($value ? 1 : 0)});
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
`;

const CbInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  whitespace: nowrap;
`;

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
