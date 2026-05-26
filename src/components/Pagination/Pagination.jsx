// Libraries
import { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

// Icons
import ChevronLeft from '../Icons/ChevronLeft';
import ChevronRight from '../Icons/ChevronRight';

// helpers
import Ripple from '../Ripple';

// colors
import colors from '../../colors/colorMap';
import teal from '../../colors/teal';
import grey from '../../colors/grey';
import white from '../../colors/white';
import black from '../../colors/black';

// constants
import {
  ICON_SIZE_MAPPING,
  MEDIUM,
  SIZE_REM_MAPPING,
  FONT_SIZE_MAPPING,
  SELECTED_BG,
  NOT_SELECTED_BG,
  ACTIVE_NOT_SELECTED_BG,
} from './constants.js';

const getShade =
  (type) =>
  ({ $shades }) => {
    if (['#FFFFFF'].includes($shades)) {
      return black.m900;
    }

    if (type === SELECTED_BG) {
      return $shades['m600'];
    }

    if (type === NOT_SELECTED_BG) {
      return $shades['m50'];
    }

    if (type === ACTIVE_NOT_SELECTED_BG) {
      return $shades['m100'];
    }
  };

const AllPages = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  min-width: 100%;
  width: 100%;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      pointer-events: none;
      opacity: 0.4;
    `};
`;

const Page = styled.button`
  border: none;
  padding: 0;
  font-family: inherit;
  outline-offset: 2px;

  height: ${({ $individualRemSize }) => `${$individualRemSize}rem`};
  width: ${({ $individualRemSize }) => `${$individualRemSize}rem`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: ${({ $fontRemSize }) => $fontRemSize}rem;
  ${({ $isSelected }) =>
    $isSelected
      ? css`
          cursor: auto;
          color: ${white};
          background-color: ${getShade(SELECTED_BG)};

          &:focus-visible {
            outline: 1px solid ${getShade(SELECTED_BG)};
          }
        `
      : css`
          cursor: pointer;
          color: ${grey.m500};
          background-color: transparent;

          &:hover {
            background-color: ${getShade(NOT_SELECTED_BG)};
          }

          &:active {
            background-color: ${getShade(ACTIVE_NOT_SELECTED_BG)};
            color: ${white};
          }

          &:focus-visible {
            outline: 1px solid ${getShade(NOT_SELECTED_BG)};
          }
        `}
`;

const Ellipsis = styled.span`
  color: ${grey.m700};
  font-size: 1.4rem;
  user-select: none;
`;

const ArrowButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  outline-offset: 2px;

  &:focus-visible {
    outline: 1px solid ${({ $shades }) => $shades?.['m600']};
  }
`;

const ClickableChevronLeft = styled(ChevronLeft)`
  cursor: pointer;
`;

const ClickableChevronRight = styled(ChevronRight)`
  cursor: pointer;
`;

const MiddleLayer = styled.div`
  min-width: ${({ size }) => size};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const renderPageNum =
  ({ size, selected, shades, changePage }) =>
  (page) => {
    const $individualRemSize = SIZE_REM_MAPPING[size];
    const $fontRemSize = FONT_SIZE_MAPPING[size];
    const $shades = shades;
    const isSelected = selected === page;

    const clickHandler = () => {
      changePage(page);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        clickHandler();
      }
    };

    return (
      <Page
        data-testid={isSelected ? 'current-page' : `test-${page}`}
        $isSelected={isSelected}
        key={`page_${page}`}
        onClick={clickHandler}
        onKeyDown={handleKeyDown}
        tabIndex={isSelected ? 0 : -1}
        aria-label={`Page ${page}`}
        aria-current={isSelected ? 'page' : undefined}
        {...{
          $shades,
          $individualRemSize,
          $fontRemSize,
        }}
      >
        {page}
      </Page>
    );
  };

const renderThreeDots = () => <Ellipsis aria-hidden='true'>…</Ellipsis>;

const PrevArrow = ({ iconSize, shades, setPrevPage }) => (
  <ArrowButton onClick={setPrevPage} aria-label='Previous page' $shades={shades}>
    <Ripple rippleColor={shades['m50']}>
      <ClickableChevronLeft size={iconSize} aria-hidden='true' />
    </Ripple>
  </ArrowButton>
);

const NextArrow = ({ iconSize, shades, setNextPage }) => (
  <ArrowButton onClick={setNextPage} aria-label='Next page' $shades={shades}>
    <Ripple rippleColor={shades['m50']}>
      <ClickableChevronRight size={iconSize} aria-hidden='true' />
    </Ripple>
  </ArrowButton>
);

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalPages,
  theme = 'lime',
  size = MEDIUM,
  isDisabled = false,
  ...rest
}) => {
  const navRef = useRef(null);
  const focusActiveRef = useRef(false);

  useEffect(() => {
    if (focusActiveRef.current) {
      focusActiveRef.current = false;
      navRef.current?.querySelector('[aria-current="page"]')?.focus();
    }
  }, [pageNumber]);

  const changePage = (newPage) => {
    if (newPage !== pageNumber) {
      setPageNumber(newPage);
    }
  };

  const setPrevPage = () => {
    if (pageNumber > 1) {
      changePage(pageNumber - 1);
    }
  };

  const setNextPage = () => {
    if (pageNumber < totalPages) {
      changePage(pageNumber + 1);
    }
  };

  const handleKeyDown = (e) => {
    if (['ArrowLeft', 'ArrowUp'].includes(e.code)) {
      focusActiveRef.current = true;
      setPrevPage();
    }

    if (['ArrowRight', 'ArrowDown'].includes(e.code)) {
      focusActiveRef.current = true;
      setNextPage();
    }
  };

  const shades = colors[theme] ?? teal;
  const individualRemSize = SIZE_REM_MAPPING[size];
  const iconSize = ICON_SIZE_MAPPING[size];

  if (totalPages <= 7) {
    return (
      <AllPages
        ref={navRef}
        onKeyDown={handleKeyDown}
        aria-label='Pagination'
        $isDisabled={isDisabled}
        {...rest}
      >
        <PrevArrow {...{ iconSize, shades, setPrevPage }} />
        <MiddleLayer size={`${totalPages * individualRemSize}rem`}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            renderPageNum({ size, selected: pageNumber, shades, changePage })
          )}
        </MiddleLayer>
        <NextArrow {...{ iconSize, shades, setNextPage }} />
      </AllPages>
    );
  }

  if (
    totalPages < 10 ||
    pageNumber < 4 ||
    (pageNumber > totalPages - 3 && pageNumber <= totalPages)
  ) {
    return (
      <AllPages
        ref={navRef}
        onKeyDown={handleKeyDown}
        aria-label='Pagination'
        $isDisabled={isDisabled}
        {...rest}
      >
        <PrevArrow {...{ iconSize, shades, setPrevPage }} />
        <MiddleLayer size={`${9 * individualRemSize}rem`}>
          {[1, 2, 3, 4].map(renderPageNum({ size, selected: pageNumber, shades, changePage }))}
          {renderThreeDots()}
          {[totalPages - 3, totalPages - 2, totalPages - 1, totalPages].map(
            renderPageNum({ size, selected: pageNumber, shades, changePage })
          )}
        </MiddleLayer>
        <NextArrow {...{ iconSize, shades, setNextPage }} />
      </AllPages>
    );
  }

  return (
    <AllPages
      ref={navRef}
      onKeyDown={handleKeyDown}
      aria-label='Pagination'
      $isDisabled={isDisabled}
    >
      <PrevArrow {...{ iconSize, shades, setPrevPage }} />
      <MiddleLayer size={`${9 * individualRemSize}rem`}>
        {[1, 2].map(renderPageNum({ size, selected: pageNumber, shades, changePage }))}
        {pageNumber > 4 && renderThreeDots()}
        {[pageNumber - 1, pageNumber, pageNumber + 1].map(
          renderPageNum({ size, selected: pageNumber, shades, changePage })
        )}
        {pageNumber < totalPages - 3 && renderThreeDots()}
        {[totalPages - 1, totalPages].map(
          renderPageNum({ size, selected: pageNumber, shades, changePage })
        )}
      </MiddleLayer>
      <NextArrow {...{ iconSize, shades, setNextPage }} />
    </AllPages>
  );
};

export default Pagination;
