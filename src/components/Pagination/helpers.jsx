import { Page, P } from './styles';

export const renderPageNum = (selected, setPageNumber) => (page) => {
  const clickHandler = () => {
    setPageNumber(page);
  };

  return (
    <Page data-testid={selected === page ? "current-page" : `test-${page}`} isSelected={selected === page} onClick={clickHandler}>
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
