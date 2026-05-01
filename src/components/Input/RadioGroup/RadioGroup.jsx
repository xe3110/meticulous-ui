import PropTypes from 'prop-types';
import { getColor } from '../Checkbox/helpers';
import Radio from '../Radio/Radio';
import { Wrapper } from './styles';

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
