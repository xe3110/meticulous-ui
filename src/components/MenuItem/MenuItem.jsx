import grey from '../../colors/grey';
import blue from '../../colors/blue';
import white from '../../colors/white';
import { PWrapper, Wrapper } from './styles';

const MenuItem = ({
  value,
  label,
  width = '20rem',
  isSelected,
  defaultColor = white,
  selectedColor = blue.m200,
  hoverColor = blue.m50,
  activeColor = blue.m100,
  size = '1.2rem',
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(value);
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
      }}
      onClick={handleClick}
      title={label}
    >
      <PWrapper size={size} color={isSelected ? grey.m700 : grey.m500} $width={width}>
        {label}
      </PWrapper>
    </Wrapper>
  );
};

export default MenuItem;
