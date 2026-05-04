import grey from '../../colors/grey';
import blue from '../../colors/blue';
import white from '../../colors/white';
import styled from 'styled-components';
import P from '../Typography/P';

const Wrapper = styled.div`
  width: ${({ $width }) => $width};
  background-color: ${({
    $isSelected,
    $defaultColor,
    $isHighlighted,
    $hoverColor,
    $selectedColor,
  }) => ($isSelected ? $selectedColor : $isHighlighted ? $hoverColor : $defaultColor)};

  cursor: ${({ $isSelected, $isDisabled }) =>
    $isSelected ? 'auto' : $isDisabled ? 'not-allowed' : 'pointer'};
  padding: 0.96rem 0 1.28rem 1.6rem;
  margin-top: 0.16rem;
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? 'none' : 'auto')};

  &:active {
    background-color: ${({ $isSelected, $activeColor, $selectedColor }) =>
      $isSelected ? $selectedColor : $activeColor};
  }
`;

const PWrapper = styled(P)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: calc(${({ $width }) => $width} - 3.2rem);
`;

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
  id,
  value,
  label,
  width = '32rem',
  isSelected,
  defaultColor = white,
  selectedColor = blue.m200,
  hoverColor = blue.m50,
  activeColor = blue.m100,
  isHighlighted,
  size = '1.92rem',
  onSelect,
  isDisabled,
  onMouseEnter,
  ...rest
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
      id={id}
      role='option'
      {...rest}
      aria-selected={isSelected}
      aria-disabled={isDisabled || undefined}
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
