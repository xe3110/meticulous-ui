import styled from 'styled-components';

const GlassWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${({ $borderRadius }) => $borderRadius};
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  background:
    radial-gradient(
      60rem 22rem at 50% 45%,
      rgba(20, 40, 20, 0.06),
      rgba(10, 25, 10, 0.02) 50%,
      transparent 70%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.06) 40%,
      rgba(255, 255, 255, 0.03) 100%
    );

  box-shadow:
    0 3rem 6rem rgba(7, 22, 10, 0.3),
    0 2px 0 rgba(255, 255, 255, 0.03) inset;

  border: 1px solid rgba(255, 255, 255, 0.25);
  color: rgba(8, 34, 16, 0.95);

  ::before {
    content: '';
    position: absolute;
    left: -12%;
    top: -24%;
    width: 62%;
    height: 62%;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.24),
      rgba(255, 255, 255, 0.06) 40%,
      transparent 60%
    );
    filter: blur(4.6rem);
    opacity: 0.85;
    pointer-events: none;
    transform: translateZ(0);
  }

  ::after {
    content: '';
    position: absolute;
    right: -6%;
    bottom: -18%;
    width: 68%;
    height: 68%;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 40%,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.01) 40%,
      transparent 70%
    );
    filter: blur(5.4rem);
    opacity: 0.45;
    pointer-events: none;
    transform: translateZ(0);
  }
`;

const Glass = ({ border = 'none', borderRadius = 0, ...rest }) => (
  <GlassWrapper $border={border} $borderRadius={borderRadius} {...rest} />
);

export default Glass;
