import blue from '../../colors/blue';
import green from '../../colors/green';
import red from '../../colors/red';
import yellow from '../../colors/yellow';
import orange from '../../colors/orange';
import black from '../../colors/black';
import grey from '../../colors/grey';
import violet from '../../colors/violet';
import teal from '../../colors/teal';
import purple from '../../colors/purple';
import pink from '../../colors/pink';
import styled, { keyframes } from 'styled-components';

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

const horizontalGrow = keyframes`
  0%   { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const PageLdr = styled.div`
  width: 90%;
  height: 3px;
  background-color: ${({ $color }) => $color};
  transform-origin: left;
  animation: ${horizontalGrow} 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

const PageLoader = ({ theme = 'blue', color, ...props }) => {
  const shade = getColor(theme);
  const clr = color || (shade?.m500 ?? blue.m500);

  return (
    <PageLdr
      {...props}
      $color={clr}
      role='progressbar'
      aria-label='Loading'
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
};

export default PageLoader;
