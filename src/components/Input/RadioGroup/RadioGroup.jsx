import PropTypes from 'prop-types';
import Radio from '../Radio/Radio';
import styled, { css } from 'styled-components';
import blue from '../../../colors/blue';
import green from '../../../colors/green';
import red from '../../../colors/red';
import yellow from '../../../colors/yellow';
import orange from '../../../colors/orange';
import black from '../../../colors/black';
import grey from '../../../colors/grey';
import violet from '../../../colors/violet';
import teal from '../../../colors/teal';
import purple from '../../../colors/purple';
import pink from '../../../colors/pink';

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

const Wrapper = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({ $isHorizonatal }) => ($isHorizonatal ? 'row' : 'column')};

  ${({ $isHorizonatal }) =>
    $isHorizonatal
      ? css`
          flex-wrap: wrap;
          justify-content: space-between;
        `
      : css`
          gap: 1.92rem;
        `};
`;

const RadioGroup = ({
  options,
  color = 'blue',
  value,
  onChange,
  isHorizonatal,
  label,
  ariaLabel,
  name,
  ...rest
}) => {
  const shade = getColor(color);

  const clickHandler = (val) => {
    if (val !== value) {
      onChange(val);
    }
  };

  const renderOption = (opt) => (
    <Radio
      {...opt}
      key={opt?.value}
      name={name}
      color={shade}
      isSelected={value === opt?.value}
      onChange={clickHandler}
    />
  );

  return (
    <Wrapper
      role='radiogroup'
      aria-label={!label ? ariaLabel : undefined}
      $isHorizonatal={isHorizonatal}
      {...rest}
    >
      {label && <legend>{label}</legend>}
      {options.map(renderOption)}
    </Wrapper>
  );
};

RadioGroup.propTypes = {
  /** Array of option objects, each with { value, label, disabled? } */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  /** Currently selected value */
  value: PropTypes.any,
  /** Called with the selected value when a radio is clicked */
  onChange: PropTypes.func,
  /** Color theme key for the radio accent. Defaults to 'blue' */
  color: PropTypes.string,
  /** Renders options in a row when true */
  isHorizonatal: PropTypes.bool,
  /** Visible legend text for the radio group */
  label: PropTypes.string,
  /** Accessible label when no visible label is provided */
  ariaLabel: PropTypes.string,
  /** HTML name attribute shared by all radio inputs in the group */
  name: PropTypes.string,
};

export default RadioGroup;
