// Libraries
import styled, { css } from 'styled-components';

// Icons
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

// constants
import { GREY, TEAL, WHITE } from '../../colors';

export const AllPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 175rem;
  width: 175rem;
`;

export const Page = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  padding-top: 0.6rem;
  text-align: center;
  font-size: 1.4rem;
  ${({ isSelected }) =>
    isSelected
      ? css`
          cursor: auto;
          color: ${WHITE};
          background-color: ${TEAL};
        `
      : css`
          cursor: pointer;
          color: ${GREY};
        `}
`;

export const P = styled.p`
  color: ${GREY};
`;

export const ClickableChevronLeft = styled(ChevronLeft)`
  cursor: pointer;
`;

export const ClickableChevronRight = styled(ChevronRight)`
  cursor: pointer;
`;
