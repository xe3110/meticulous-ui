import grey from '../../colors/grey';
import blue from '../../colors/blue';
import white from '../../colors/white';
import { PWrapper, Wrapper } from './styles';

const getColor = ({ isSelected, isDisabled }) => {
  if (isSelected) {
    return grey.m700;
  }

  if (isDisabled) {
    return grey.m300;
  }

  return grey.m500;
};

const MenuItem = ({
  value,
  label,
  width = '20rem',
  isSelected,
  defaultColor = white,
  selectedColor = blue.m200,
  hoverColor = blue.m50,
  activeColor = blue.m100,
  isHighlighted,
  size = '1.2rem',
  onSelect,
  isDisabled,
  onMouseEnter,
}) => {
  const handleClick = () => {
    if (!isDisabled) {
      onSelect(value);
    }
  };

  return (
    <Wrapper
      {...{
        $isSelected: isSelected,
        $width: width,
        $defaultColor: defaultColor,
        $selectedColor: selectedColor,
        $hoverColor: hoverColor,
        $activeColor: activeColor,
        $isDisabled: isDisabled,
        $isHighlighted: isHighlighted,
      }}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      title={label}
    >
      <PWrapper size={size} color={getColor({ isSelected, isDisabled })} $width={width}>
        {label}
      </PWrapper>
    </Wrapper>
  );
};

export default MenuItem;
