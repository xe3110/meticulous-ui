// Libraries
import _get from 'lodash-es/get';
import _range from 'lodash-es/range';

// helpers
import { renderThreeDots, renderPageNum, PrevArrow, NextArrow } from './helpers.jsx';

// constants
import colors from '../../colors';
import teal from '../../colors/teal';
import { ICON_SIZE_MAPPING, LARGE, MEDIUM, SIZE_REM_MAPPING, SMALL } from './constants.js';

// styles
import { AllPages, MiddleLayer } from './styles';

const Pagination = ({ pageNumber, setPageNumber, totalPages, theme = 'lime', size = LARGE }) => {
  const setPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const setNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleKeyDown = (e) => {
    console.log({ e });

    if (['ArrowLeft', 'ArrowUp'].includes(e.code)) {
      setPrevPage();
    }

    if (['ArrowRight', 'ArrowDown'].includes(e.code)) {
      setNextPage();
    }
  };

  const shades = _get(colors, theme, teal);
  const individualRemSize = SIZE_REM_MAPPING[size];
  const iconSize = ICON_SIZE_MAPPING[size];

  if (totalPages <= 7) {
    return (
      <AllPages onKeyDown={handleKeyDown} tabIndex='0'>
        <PrevArrow {...{ iconSize, shades, setPrevPage }} />
        <MiddleLayer size={`${totalPages * individualRemSize}rem`}>
          {_range(1, totalPages + 1).map(renderPageNum(size, pageNumber, shades, setPageNumber))}
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
      <AllPages onKeyDown={handleKeyDown} tabIndex='0'>
        <PrevArrow {...{ iconSize, shades, setPrevPage }} />
        <MiddleLayer size={`${9 * individualRemSize}rem`}>
          {_range(1, 5).map(renderPageNum(size, pageNumber, shades, setPageNumber))}
          {renderThreeDots()}
          {[totalPages - 3, totalPages - 2, totalPages - 1, totalPages].map(
            renderPageNum(size, pageNumber, shades, setPageNumber)
          )}
        </MiddleLayer>
        <NextArrow {...{ iconSize, shades, setNextPage }} />
      </AllPages>
    );
  }

  return (
    <AllPages onKeyDown={handleKeyDown} tabIndex='0'>
      <PrevArrow {...{ iconSize, shades, setPrevPage }} />
      <MiddleLayer size={`${9 * individualRemSize}rem`}>
        {_range(1, 3).map(renderPageNum(size, pageNumber, shades, setPageNumber))}
        {renderThreeDots()}
        {[pageNumber - 1, pageNumber, pageNumber + 1].map(
          renderPageNum(size, pageNumber, shades, setPageNumber)
        )}
        {renderThreeDots()}
        {[totalPages - 1, totalPages].map(renderPageNum(size, pageNumber, shades, setPageNumber))}
      </MiddleLayer>
      <NextArrow {...{ iconSize, shades, setNextPage }} />
    </AllPages>
  );
};

export default Pagination;
