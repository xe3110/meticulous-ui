// components
import Ripple from '../Ripple';

// constants
import { FONT_SIZE_MAPPING, SIZE_REM_MAPPING } from './constants';

// styles
import { Page, Ellipsis, ArrowButton, ClickableChevronRight, ClickableChevronLeft } from './styles';

export const renderPageNum =
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

export const renderThreeDots = () => <Ellipsis aria-hidden='true'>…</Ellipsis>;

export const PrevArrow = ({ iconSize, shades, setPrevPage }) => (
  <ArrowButton onClick={setPrevPage} aria-label='Previous page' $shades={shades}>
    <Ripple rippleColor={shades['m50']}>
      <ClickableChevronLeft size={iconSize} aria-hidden='true' />
    </Ripple>
  </ArrowButton>
);

export const NextArrow = ({ iconSize, shades, setNextPage }) => (
  <ArrowButton onClick={setNextPage} aria-label='Next page' $shades={shades}>
    <Ripple rippleColor={shades['m50']}>
      <ClickableChevronRight size={iconSize} aria-hidden='true' />
    </Ripple>
  </ArrowButton>
);
