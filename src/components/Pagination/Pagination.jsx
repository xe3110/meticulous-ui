// Libraries
import _range from 'lodash-es/range';

// helpers
import { renderThreeDots, renderPageNum } from './helpers.jsx';

// constants
import { ICON_SIZE_MAPPING, LARGE, MEDIUM, SIZE_REM_MAPPING, SMALL } from './constants.js';

// styles
import { AllPages, ClickableChevronLeft, ClickableChevronRight, MiddleLayer } from './styles';

const Pagination = ({ pageNumber, setPageNumber, totalPages, size = LARGE }) => {
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

  const individualRemSize = SIZE_REM_MAPPING[size];
  const iconSize = ICON_SIZE_MAPPING[size];

  if (totalPages <= 7) {
    return (
      <AllPages>
        <ClickableChevronLeft size={iconSize} onClick={setPrevPage} />
        <MiddleLayer size={`${totalPages * individualRemSize}rem`}>
          {_range(1, totalPages + 1).map(renderPageNum(size, pageNumber, setPageNumber))}
        </MiddleLayer>
        <ClickableChevronRight size={iconSize} onClick={setNextPage} />
      </AllPages>
    );
  }

  if (
    totalPages < 10 ||
    pageNumber < 4 ||
    (pageNumber > totalPages - 3 && pageNumber <= totalPages)
  ) {
    return (
      <AllPages>
        <ClickableChevronLeft size={iconSize} onClick={setPrevPage} />
        <MiddleLayer size={`${9 * individualRemSize}rem`}>
          {_range(1, 5).map(renderPageNum(size, pageNumber, setPageNumber))}
          {renderThreeDots()}
          {[totalPages - 3, totalPages - 2, totalPages - 1, totalPages].map(
            renderPageNum(size, pageNumber, setPageNumber)
          )}
        </MiddleLayer>
        <ClickableChevronRight size={iconSize} onClick={setNextPage} />
      </AllPages>
    );
  }

  return (
    <AllPages>
      <ClickableChevronLeft size={iconSize} onClick={setPrevPage} />
      <MiddleLayer size={`${9 * individualRemSize}rem`}>
        {_range(1, 3).map(renderPageNum(size, pageNumber, setPageNumber))}
        {renderThreeDots()}
        {[pageNumber - 1, pageNumber, pageNumber + 1].map(renderPageNum(size, pageNumber, setPageNumber))}
        {renderThreeDots()}
        {[totalPages - 1, totalPages].map(renderPageNum(size, pageNumber, setPageNumber))}
      </MiddleLayer>
      <ClickableChevronRight size={iconSize} onClick={setNextPage} />
    </AllPages>
  );
};

export default Pagination;
