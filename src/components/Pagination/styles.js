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
  min-width: 100%;
  width: 100%;
`;

export const Page = styled.div`
  height: ${({individualRemSize}) => `${individualRemSize}rem`};
  width: ${({individualRemSize}) => `${individualRemSize}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${({fontRemSize}) => fontRemSize}rem;
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
        // :hover {
        //   color: red;
        // }

export const P = styled.p`
  color: ${GREY};
`;

export const ClickableChevronLeft = styled(ChevronLeft)`
  cursor: pointer;
`;

export const ClickableChevronRight = styled(ChevronRight)`
  cursor: pointer;
`;

export const MiddleLayer = styled.div`
  min-width: ${({size}) => size};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
