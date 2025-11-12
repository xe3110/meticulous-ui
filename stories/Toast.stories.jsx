import { useState } from 'react';
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
  const [success, showSuccess] = useState(false);
  const [error, showError] = useState(false);
  const [warning, showWarning] = useState(false);

  const removeSuccess = () => {
    showSuccess(false);
  };

  const removeError = () => {
    showError(false);
  };

  const removeWarning = () => {
    showWarning(false);
  };

  const popSuccess = () => {
    showSuccess(true);
    setTimeout(removeSuccess, 5000);
  };

  const popError = () => {
    showError(true);
    setTimeout(removeError, 5000);
  };

  const popWarning = () => {
    showWarning(true);
    setTimeout(removeWarning, 5000);
  };

  return (
    <div>
      {success && (
        <Toast
          type='success'
          title='Congratulations'
          subtitle='You have successfully logged in'
          onExpire={removeSuccess}
          duration={5000}
        />
      )}
      {warning && (
        <Toast
          type='warning'
          title='Successful'
          subtitle='Your order has been placed successfully'
          onExpire={removeWarning}
          duration={5000}
        />
      )}
      {error && (
        <Toast
          type='error'
          title='Warning'
          subtitle='Your session is about to expire'
          onExpire={removeError}
          duration={5000}
        />
      )}
      <button onClick={popSuccess}>
        <P>Success</P>
      </button>
      <button onClick={popError}>
        <P>Error</P>
      </button>
      <button onClick={popWarning}>
        <P>Warning</P>
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
