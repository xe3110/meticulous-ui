// Libraries
import { useRef, useEffect } from 'react';

// helpers
import { renderThreeDots, renderPageNum, PrevArrow, NextArrow } from './helpers.jsx';

// constants
import colors from '../../colors';
import teal from '../../colors/teal';
import { ICON_SIZE_MAPPING, MEDIUM, SIZE_REM_MAPPING } from './constants.js';

// styles
import { AllPages, MiddleLayer } from './styles';

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalPages,
  theme = 'lime',
  size = MEDIUM,
  isDisabled = false,
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
        {renderThreeDots()}
        {[pageNumber - 1, pageNumber, pageNumber + 1].map(
          renderPageNum({ size, selected: pageNumber, shades, changePage })
        )}
        {renderThreeDots()}
        {[totalPages - 1, totalPages].map(
          renderPageNum({ size, selected: pageNumber, shades, changePage })
        )}
      </MiddleLayer>
      <NextArrow {...{ iconSize, shades, setNextPage }} />
    </AllPages>
  );
};

export default Pagination;
