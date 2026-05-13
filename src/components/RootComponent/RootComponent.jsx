import PropTypes from 'prop-types';
import { useMemo } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  -webkit-text-size-adjust: 100%;
`;

const RootComponent = ({ children, ...rest }) => {
  useMemo(() => {
    document.documentElement.style.fontSize = '62.5%';
    document.body.style.fontSize = '1.6rem';
  }, []);

  return <Root {...rest}>{children}</Root>;
};

RootComponent.propTypes = {
  children: PropTypes.node,
};

export default RootComponent;
