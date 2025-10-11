// Libraries
import styled from 'styled-components';

// constants
import grey from '../../../colors/grey';

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
      color={color || grey.m500}
      src='https://www.svgrepo.com/show/533661/chevron-right.svg'
      alt='Chevron Right'
      width={size}
      height={size}
    />
  );
};

export default ChevronRight;
