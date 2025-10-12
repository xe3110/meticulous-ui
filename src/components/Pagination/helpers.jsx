// components
import Ripple from '../Ripple';

// constants
import { FONT_SIZE_MAPPING, SIZE_REM_MAPPING } from './constants';

// styles
import { Page, P, ClickableChevronRight, ClickableChevronLeft } from './styles';

export const renderPageNum =
  ({ size, selected, shades, setPageNumber }) =>
  (page) => {
    const individualRemSize = SIZE_REM_MAPPING[size];
    const fontRemSize = FONT_SIZE_MAPPING[size];

    const clickHandler = () => {
      setPageNumber(page);
    };

    return (
      <Page
        data-testid={selected === page ? 'current-page' : `test-${page}`}
        isSelected={selected === page}
        key={`page_${page}`}
        onClick={clickHandler}
        {...{
          shades,
          individualRemSize,
          fontRemSize,
        }}
      >
        {page}
      </Page>
    );
  };

export const renderThreeDots = () => (
  <>
    <P>.</P>
    <P>.</P>
    <P>.</P>
  </>
);

export const PrevArrow = ({ iconSize, shades, setPrevPage }) => (
  <Ripple rippleColor={shades['m50']}>
    <ClickableChevronLeft size={iconSize} onClick={setPrevPage} />
  </Ripple>
);

export const NextArrow = ({ iconSize, shades, setNextPage }) => (
  <Ripple rippleColor={shades['m50']}>
    <ClickableChevronRight size={iconSize} onClick={setNextPage} />
  </Ripple>
);
