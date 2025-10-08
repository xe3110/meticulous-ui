// Libraries
import styled from 'styled-components';

// constants
import { GREY } from '../../../colors';

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
      color={color || GREY}
      src='https://www.svgrepo.com/show/533659/chevron-left.svg'
      alt='Chevron Left'
      width={size}
      height={size}
    />
  );
};

export default ChevronLeft;
