// Libraries
import styled from 'styled-components';

// constants
import { GREY } from '../../../colors';

const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  fill: ${({ color }) => color};
`;

const ChevronRight = (props) => {
  const { color, size } = props;

  return (
    <Image
      {...props}
      color={color || GREY}
      src='https://www.svgrepo.com/show/533661/chevron-right.svg'
      alt='Chevron Right'
      width={size}
      height={size}
    />
  );
};

export default ChevronRight;
