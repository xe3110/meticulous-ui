import styled from 'styled-components';

import Toast from '../src/components/Toast';
import grey from '../src/colors/grey';

const P = styled.p`
  width: 100%;
  margin-top: 0.4rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 1.2rem;
  color: ${grey.m600};
`;

const ToastWrapper = () => {
  return <Toast type='success' title='Help' subtitle='Do this' />;
};

export default {
  title: 'Toast',
  component: ToastWrapper,
  parameters: {
    docs: {
      description: {
        component: 'Toast types.',
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  return <ToastWrapper />;
};

Default.storyName = 'Toasts';
