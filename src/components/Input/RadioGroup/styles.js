import styled, { css } from 'styled-components';

export const Wrapper = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${({ $isHorizonatal }) => ($isHorizonatal ? 'row' : 'column')};

  ${({ $isHorizonatal }) =>
    $isHorizonatal
      ? css`
          flex-wrap: wrap;
          justify-content: space-between;
        `
      : css`
          gap: 1.92rem;
        `};
`;
