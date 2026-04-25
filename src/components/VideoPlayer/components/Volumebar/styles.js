import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 1.28rem;
  top: 2.56rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.96rem;
  pointer-events: none;
  user-select: none;
`;

export const Track = styled.div`
  width: 0.64rem;
  height: 12.8rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.32rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`;

export const Fill = styled.div`
  width: 100%;
  height: ${({ $pct }) => $pct}%;
  background: #fff;
  border-radius: 0.32rem;
  transition: height 0.1s ease;
`;

export const Label = styled.span`
  font-size: 1.76rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 500;
  width: 5.6rem;
  text-align: center;
`;
