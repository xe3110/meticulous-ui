import { Wrapper, Track, Fill, Label } from './styles';

const VolumeBar = ({ volume }) => {
  if (volume === null) return null;
  const pct = Math.round(volume);

  return (
    <Wrapper>
      <Track>
        <Fill $pct={pct} />
      </Track>
      <Label>{pct}</Label>
    </Wrapper>
  );
};

export default VolumeBar;
