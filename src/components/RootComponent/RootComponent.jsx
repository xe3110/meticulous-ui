import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  -webkit-text-size-adjust: 100%;
`;

const RootComponent = ({ children, ...rest }) => {
  useMemo(() => {
    // Set 1rem = 10px for easier calculations throughout the app
    document.documentElement.style.fontSize = '62.5%';
  }, []);

  return <Root {...rest}>{children}</Root>;
};

RootComponent.propTypes = {
  /** Content to render inside the root wrapper */
  children: PropTypes.node,
};

export default RootComponent;
