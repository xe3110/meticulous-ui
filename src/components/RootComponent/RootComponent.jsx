import { Root } from './styles';

const RootComponent = ({ children, style }) => {
  return <Root style={style}>{children}</Root>;
};

export default RootComponent;
