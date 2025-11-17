import { useState } from 'react';
import styled from 'styled-components';

import Toast, { ToastContainer } from '../src/components/Toast/Toast';
import grey from '../src/colors/grey';
import { ERROR, INFO, SUCCESS, WARNING } from '../src/components/Toast/constants';

const P = styled.p`
  width: 100%;
  margin-top: 0.4rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 1.2rem;
  color: ${grey.m600};
`;

const TYPE_INFO_MAP = {
  [SUCCESS]: {
    title: 'Successfull',
    subtitle: 'You have logged in successfully',
  },
  [INFO]: {
    title: 'Info',
    subtitle: 'You will be logged out in 10 minutes',
  },
  [WARNING]: {
    title: 'Attention',
    subtitle: 'You will be logged out in 2 minutes',
  },
  [ERROR]: {
    title: 'Error',
    subtitle: 'Please check the password',
  },
};

const ToastWrapper = () => {
  const [toasts, setToasts] = useState([]);

  const popSuccess = () => {
    setToasts((toasts) => [...toasts, SUCCESS]);
  };

  const popError = () => {
    setToasts((toasts) => [...toasts, ERROR]);
  };

  const popWarning = () => {
    setToasts((toasts) => [...toasts, WARNING]);
  };

  const popInfo = () => {
    setToasts((toasts) => [...toasts, INFO]);
  };

  const onExpire = (i) => () => {
    setToasts((toasts) => {
      const copy = [...toasts];
      copy.splice(toasts.length - i - 1, 1);

      return copy;
    });
  };

  const renderToasts = (type, i) => (
    <Toast {...{ type }} key={`${i}-${type}`} {...TYPE_INFO_MAP[type]} onExpire={onExpire(i)} />
  );

  return (
    <div>
      <ToastContainer>{[...toasts].reverse().map(renderToasts)}</ToastContainer>
      <button onClick={popSuccess}>
        <P>Success</P>
      </button>
      <button onClick={popError}>
        <P>Error</P>
      </button>
      <button onClick={popWarning}>
        <P>Warning</P>
      </button>
      <button onClick={popInfo}>
        <P>Info</P>
      </button>
    </div>
  );
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
