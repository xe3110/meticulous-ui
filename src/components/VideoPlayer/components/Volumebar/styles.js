import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  pointer-events: none;
  user-select: none;
`;

export const Track = styled.div`
  width: 0.4rem;
  height: 8rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.2rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

export const Fill = styled.div`
  width: 100%;
  height: ${({ $pct }) => $pct}%;
  background: #fff;
  border-radius: 0.2rem;
  transition: height 0.1s ease;
`;

export const Label = styled.span`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  width: 3.5rem;
  text-align: center;
`;
