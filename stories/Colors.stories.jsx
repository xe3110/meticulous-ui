import colors from '../src/colors';
import white from '../src/colors/white';
import capitalize from '../src/utils/capitalize';

import styled from 'styled-components';

const P = styled.p`
  width: 100%;
  margin-left: 1rem;
  margin-top: 1.6rem;
  font-weight: 600;
  font-size: 1.6rem;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Block = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  background-color: ${({ clr }) => clr};
`;

const ShadeName = styled.div`
  position: absolute;
  bottom: 0.4rem;
  font-size: 1.6rem;
  left: 0;
  text-align: center;
  width: 100%;
  color: ${({ clr }) => clr};
`;

const AllShades = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex-wrap: wrap;
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

const AllColors = () => {
  const keys = Object.keys(colors).filter((x) => x !== 'white');

  return (
    <>
      {keys.sort(sortColors).map((color) => {
        const shades = colors[color];

        return (
          <Wrapper key={color}>
            <P>{capitalize(color)}</P>
            <AllShades>{Object.keys(shades).map(renderShade(color))}</AllShades>
          </Wrapper>
        );
      })}
    </>
  );
};

export default {
  title: 'Tokens/Colors',
  component: AllColors,
  parameters: {
    docs: {
      description: {
        component: 'Collection of colors and shades commonly used accross websites & dashboards.',
      },
      source: {
        language: 'jsx',
        code: `
          import Add from 'meticulous-ui/components/Icons/Add';

          // amber
          import amber from 'meticulous-ui/colors/amber';
          return <Add color={amber.m500} size={20} />

          // black
          import black from 'meticulous-ui/colors/black';
          return <Add color={black.m500} size={20} />

          // blue
          import blue from 'meticulous-ui/colors/blue';
          return <Add color={blue.m500} size={20} />

          // blueGray
          import blueGray from 'meticulous-ui/colors/blueGray';
          return <Add color={blueGray.m500} size={20} />

          // brown
          import brown from 'meticulous-ui/colors/brown';
          return <Add color={brown.m500} size={20} />

          // cider
          import cider from 'meticulous-ui/colors/cider';
          return <Add color={cider.m500} size={20} />

          // deepOrange
          import deepOrange from 'meticulous-ui/colors/deepOrange';
          return <Add color={deepOrange.m500} size={20} />

          // deepPurple
          import deepPurple from 'meticulous-ui/colors/deepPurple';
          return <Add color={deepPurple.m500} size={20} />

          // green
          import green from 'meticulous-ui/colors/green';
          return <Add color={green.m500} size={20} />

          // grey
          import grey from 'meticulous-ui/colors/grey';
          return <Add color={grey.m500} size={20} />

          // indigo
          import indigo from 'meticulous-ui/colors/indigo';
          return <Add color={indigo.m500} size={20} />

          // lightBlue
          import lightBlue from 'meticulous-ui/colors/lightBlue';
          return <Add color={lightBlue.m500} size={20} />

          // lightGreen
          import lightGreen from 'meticulous-ui/colors/lightGreen';
          return <Add color={lightGreen.m500} size={20} />

          // lime
          import lime from 'meticulous-ui/colors/lime';
          return <Add color={lime.m500} size={20} />

          // orange
          import orange from 'meticulous-ui/colors/orange';
          return <Add color={orange.m500} size={20} />

          // pink
          import pink from 'meticulous-ui/colors/pink';
          return <Add color={pink.m500} size={20} />

          // purple
          import purple from 'meticulous-ui/colors/purple';
          return <Add color={purple.m500} size={20} />

          // red
          import red from 'meticulous-ui/colors/red';
          return <Add color={red.m500} size={20} />

          // teal
          import teal from 'meticulous-ui/colors/teal';
          return <Add color={teal.m500} size={20} />

          // violet
          import violet from 'meticulous-ui/colors/violet';
          return <Add color={violet.m500} size={20} />

          // white
          import white from 'meticulous-ui/colors/white';
          return <Add color={white} size={20} />

          // yellow
          import yellow from 'meticulous-ui/colors/yellow';
          return <Add color={yellow.m500} size={20} />
        `,
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  return <AllColors />;
};

Default.storyName = 'All Colors';
