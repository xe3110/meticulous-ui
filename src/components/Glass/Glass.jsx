import { GlassWrapper } from './styles';

const Glass = ({ border = 'none', borderRadius = 0 }) => (
  <GlassWrapper $border={border} $borderRadius={borderRadius} />
);

export default Glass;
