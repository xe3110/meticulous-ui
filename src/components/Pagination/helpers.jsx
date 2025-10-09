import { FONT_SIZE_MAPPING, SIZE_REM_MAPPING } from './constants';
import { Page, P } from './styles';

export const renderPageNum = (size, selected, setPageNumber) => (page) => {
  const individualRemSize = SIZE_REM_MAPPING[size];
  const fontRemSize = FONT_SIZE_MAPPING[size];

  const clickHandler = () => {
    setPageNumber(page);
  };

  return (
    <Page
      data-testid={selected === page ? 'current-page' : `test-${page}`}
      isSelected={selected === page}
      onClick={clickHandler}
      {...{
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
