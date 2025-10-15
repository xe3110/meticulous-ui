import styled from 'styled-components';

import icons from '../components/Icons';
import grey from '../colors/grey';
import red from '../colors/red';

const P = styled.p`
  width: 100%;
  margin-top: 0.4rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 1.2rem;
  color: ${grey.m600};
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 14rem;
`;

const renderIcon = (name) => {
  const Icon = icons[name];

  return (
    <IconWrapper key={name}>
      <Icon color={red.m700} size={40} />
      <P>{name}</P>
    </IconWrapper>
  );
};

const Icons = () => {
  return <IconsWrapper>{Object.keys(icons).map(renderIcon)}</IconsWrapper>;
};

export default {
  title: 'Icons',
  component: Icons,
  parameters: {
    docs: {
      description: {
        component: 'Collection of icons.',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  return <Icons />;
};

Default.storyName = 'All Icons';
