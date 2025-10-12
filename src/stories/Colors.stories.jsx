import colors from '../colors';
import white from '../colors/white';
import capFirstLetter from '../utils/capFirstLetter';

import styled from 'styled-components';

const P = styled.p`
  width: 100%;
  margin-left: 1rem;
  margin-top: 1.6rem;
  font-weight: 600;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Block = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
  background-color: ${({ clr }) => clr};
`;

const ShadeName = styled.div`
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  text-align: center;
  width: 100%;
  color: ${({ clr }) => clr};
`;

const AllShades = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const getColor = (shade) => {
  const shadeNum = +shade.substring(1);

  return shadeNum > 500 ? white : colors.black.m900;
};

const renderShade = (color) => (shade) => (
  <Block key={`${color}_${shade}`} clr={colors[color][shade]}>
    <ShadeName clr={getColor(shade)}>{shade}</ShadeName>
  </Block>
);

const sortColors = (a, b) => {
  if (Object.keys(colors[a]).length > 11 && Object.keys(colors[b]).length < 11) {
    return 1;
  }

  return -1;
};

const Colors = () => {
  const keys = Object.keys(colors).filter((x) => x !== 'white');

  return (
    <>
      {keys.sort(sortColors).map((color) => {
        const shades = colors[color];

        return (
          <Wrapper key={color}>
            <P>{capFirstLetter(color)}</P>
            <AllShades>{Object.keys(shades).map(renderShade(color))}</AllShades>
          </Wrapper>
        );
      })}
    </>
  );
};

export default {
  title: 'Colors',
  component: Colors,
  parameters: {
    docs: {
      description: {
        component: 'Collection of colors and shades commonly used accross websites & dashboards.',
      },
    },
  },
};

// Default story
export const Default = () => {
  return <Colors />;
};

Default.storyName = 'All Colors';
