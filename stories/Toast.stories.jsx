import { useState } from 'react';
import styled from 'styled-components';

import { ToastContainer } from '../src/components/Toast/Toast';
import grey from '../src/colors/grey';
import { ERROR, INFO, SUCCESS, WARNING } from '../src/components/Toast/constants';

const P = styled.p`
  width: 100%;
  margin-top: 0.4rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 0;
  font-size: 1.8rem;
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

  const toastChangeHandler = (toasts) => {
    setToasts(toasts);
  };

  const popSuccess = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${SUCCESS}-${Math.random().toString(16).slice(2)}`, type: SUCCESS },
    ]);
  };

  const popError = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${ERROR}-${Math.random().toString(16).slice(2)}`, type: ERROR },
    ]);
  };

  const popWarning = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${WARNING}-${Math.random().toString(16).slice(2)}`, type: WARNING },
    ]);
  };

  const popInfo = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${INFO}-${Math.random().toString(16).slice(2)}`, type: INFO },
    ]);
  };

  return (
    <div>
      <ToastContainer
        toasts={toasts.map(({ id, type }) => ({
          id,
          type,
          ...TYPE_INFO_MAP[type],
        }))}
        setToasts={toastChangeHandler}
      />
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
  title: 'Organisms/Toast',
  component: ToastWrapper,
  parameters: {
    docs: {
      description: {
        component: 'Toast types.',
      },
      source: {
        language: 'jsx',
        code: `
        import { ToastContainer } from 'meticulous-ui/components/Toast';

        export const AllToasts = () => {
          const [toasts, setToasts] = useState([]);

          const toastChangeHandler = (toasts) => {
            setToasts(toasts);
          };

          const popSuccess = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${SUCCESS}-\${Math.random().toString(16).slice(2)}\`, type: SUCCESS },
            ]);
          };

          const popError = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${ERROR}-\${Math.random().toString(16).slice(2)}\`, type: ERROR },
            ]);
          };

          const popWarning = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${WARNING}-\${Math.random().toString(16).slice(2)}\`, type: WARNING },
            ]);
          };

          const popInfo = () => {
            setToasts((toasts) => [
              ...toasts,
              { id: \`\${INFO}-\${Math.random().toString(16).slice(2)}\`, type: INFO },
            ]);
          };

          return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.28rem' }}>
              <ToastContainer
                toasts={toasts.map(({ id, type }) => ({
                  id,
                  type,
                  ...TYPE_INFO_MAP[type], // title, subtitle
                }))}
                setToasts={toastChangeHandler}
              />
              <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popSuccess}>
                <P>Success</P>
              </button>
              <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popError}>
                <P>Error</P>
              </button>
              <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popWarning}>
                <P>Warning</P>
              </button>
              <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popInfo}>
                <P>Info</P>
              </button>
            </div>
          );
        };
        `,
      },
    },
    controls: { disable: true },
    actions: { disable: true },
  },
};

// Default story
export const Default = () => {
  // import { ToastContainer } from '../src/components/Toast/Toast';

  const [toasts, setToasts] = useState([]);

  const toastChangeHandler = (toasts) => {
    setToasts(toasts);
  };

  const popSuccess = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${SUCCESS}-${Math.random().toString(16).slice(2)}`, type: SUCCESS },
    ]);
  };

  const popError = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${ERROR}-${Math.random().toString(16).slice(2)}`, type: ERROR },
    ]);
  };

  const popWarning = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${WARNING}-${Math.random().toString(16).slice(2)}`, type: WARNING },
    ]);
  };

  const popInfo = () => {
    setToasts((toasts) => [
      ...toasts,
      { id: `${INFO}-${Math.random().toString(16).slice(2)}`, type: INFO },
    ]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.28rem' }}>
      <ToastContainer
        toasts={toasts.map(({ id, type }) => ({
          id,
          type,
          ...TYPE_INFO_MAP[type], // title, subtitle
        }))}
        setToasts={toastChangeHandler}
      />
      <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popSuccess}>
        <P>Success</P>
      </button>
      <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popError}>
        <P>Error</P>
      </button>
      <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popWarning}>
        <P>Warning</P>
      </button>
      <button style={{ width: '12.8rem', height: '3.84rem' }} onClick={popInfo}>
        <P>Info</P>
      </button>
    </div>
  );
};

Default.storyName = 'Toasts';
