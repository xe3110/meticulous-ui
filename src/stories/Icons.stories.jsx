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
      <Icon color={red.m700} size={60} />
      <P>{name}</P>
    </IconWrapper>
  );
};

const AllIcons = () => {
  return <IconsWrapper>{Object.keys(icons).map(renderIcon)}</IconsWrapper>;
};

export default {
  title: 'Icons',
  component: AllIcons,
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
  // import red from 'meticulous-ui/colors/red';

  // import Add from 'meticulous-ui/components/Icons/Add';
  // return <Add color={red.m500} size={20} />

  // import ArrowDown from 'meticulous-ui/components/Icons/ArrowDown';
  // return <ArrowDown color={red.m500} size={10} />

  // import Close from 'meticulous-ui/components/Icons/Close';
  // return <Close color={red.m500} size={14} />

  // import ThumbsUpFilled from 'meticulous-ui/components/Icons/ThumbsUpFilled';
  // return <ThumbsUpFilled color={red.m500} size={14} />

  // import DotsVerticalFilled from 'meticulous-ui/components/Icons/DotsVerticalFilled';
  // return <DotsVerticalFilled color={red.m500} size={14} />

  // import HomeFilled from 'meticulous-ui/components/Icons/HomeFilled';
  // return <HomeFilled color={red.m500} size={14} />

  // import DotsVerticalFilled from 'meticulous-ui/components/Icons/DotsVerticalFilled';
  // return <DotsVerticalFilled color={red.m500} size={14} />

  return <AllIcons />;
};

Default.storyName = 'All Icons';
