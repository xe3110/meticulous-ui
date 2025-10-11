// Libraries
import styled from 'styled-components';

// constants
import grey from '../../../colors/grey';

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({ color }) => color};
`;

const ChevronLeft = (props) => {
  const { color, size } = props;

  return (
    <Image
      {...props}
      color={color || grey.m500}
      src='https://www.svgrepo.com/show/533659/chevron-left.svg'
      alt='Chevron Left'
      width={size}
      height={size}
    />
  );
};

export default ChevronLeft;
