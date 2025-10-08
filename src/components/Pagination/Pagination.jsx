// Libraries
import _range from 'lodash-es/range';

// helpers
import { renderThreeDots, renderPageNum } from './helpers.jsx';

// styles
import { AllPages, ClickableChevronLeft, ClickableChevronRight } from './styles';

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
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

  if (totalPages <= 7) {
    return (
      <AllPages>
        <ClickableChevronLeft size={20} onClick={setPrevPage} />
        {_range(1, totalPages + 1).map(renderPageNum(pageNumber, setPageNumber))}
        <ClickableChevronRight size={20} onClick={setNextPage} />
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
        <ClickableChevronLeft size={20} onClick={setPrevPage} />
        {_range(1, 5).map(renderPageNum(pageNumber, setPageNumber))}
        {renderThreeDots()}
        {[totalPages - 3, totalPages - 2, totalPages - 1, totalPages].map(
          renderPageNum(pageNumber, setPageNumber)
        )}
        <ClickableChevronRight size={20} onClick={setNextPage} />
      </AllPages>
    );
  }

  return (
    <AllPages>
      <ClickableChevronLeft size={20} onClick={setPrevPage} />
      {_range(1, 3).map(renderPageNum(pageNumber, setPageNumber))}
      {renderThreeDots()}
      {[pageNumber - 1, pageNumber, pageNumber + 1].map(renderPageNum(pageNumber, setPageNumber))}
      {renderThreeDots()}
      {[totalPages - 1, totalPages].map(renderPageNum(pageNumber, setPageNumber))}
      <ClickableChevronRight size={20} onClick={setNextPage} />
    </AllPages>
  );
};

export default Pagination;
