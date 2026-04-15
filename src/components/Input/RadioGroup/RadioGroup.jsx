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
    >
      {label && <legend>{label}</legend>}
      {options.map(renderOption)}
    </Wrapper>
  );
};

export default RadioGroup;
