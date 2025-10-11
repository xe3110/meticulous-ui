// Libraries
import styled, { css } from 'styled-components';

// Icons
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

// constants
import grey from '../../colors/grey';
import white from '../../colors/white';
import black from '../../colors/black';
import { SELECTED_BG, NOT_SELECTED_BG, ACTIVE_NOT_SELECTED_BG } from './constants';

const getShade =
  (type) =>
  ({ shades }) => {
    if (['#FFFFFF'].includes(shades)) {
      return black.m900;
    }

    if (type === SELECTED_BG) {
      return shades['m500'];
    }

    if (type === NOT_SELECTED_BG) {
      return shades['m50'];
    }

    if (type === ACTIVE_NOT_SELECTED_BG) {
      return shades['m100'];
    }
  };

export const AllPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 100%;
  width: 100%;
`;

export const Page = styled.div`
  height: ${({ individualRemSize }) => `${individualRemSize}rem`};
  width: ${({ individualRemSize }) => `${individualRemSize}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${({ fontRemSize }) => fontRemSize}rem;
  ${({ isSelected }) =>
    isSelected
      ? css`
          cursor: auto;
          color: ${white};
          background-color: ${getShade(SELECTED_BG)};
        `
      : css`
          cursor: pointer;
          color: ${grey.m500};

          &:hover {
            background-color: ${getShade(NOT_SELECTED_BG)};
          }

          &:active {
            background-color: ${getShade(ACTIVE_NOT_SELECTED_BG)};
            color: ${white};
          }
        `}
`;

export const P = styled.p`
  color: ${grey.m500};
`;

export const ClickableChevronLeft = styled(ChevronLeft)`
  cursor: pointer;
`;

export const ClickableChevronRight = styled(ChevronRight)`
  cursor: pointer;
`;

export const MiddleLayer = styled.div`
  min-width: ${({ size }) => size};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
