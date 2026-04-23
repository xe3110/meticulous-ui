import { Root } from './styles';

const RootComponent = ({ children, ...rest }) => {
  return <Root {...rest}>{children}</Root>;
};

export default RootComponent;
