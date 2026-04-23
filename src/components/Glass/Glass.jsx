import { GlassWrapper } from './styles';

const Glass = ({ border = 'none', borderRadius = 0, ...rest }) => (
  <GlassWrapper $border={border} $borderRadius={borderRadius} {...rest} />
);

export default Glass;
