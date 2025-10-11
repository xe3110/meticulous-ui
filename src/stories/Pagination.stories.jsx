import { useState } from 'react';
import Pagination from '../components/Pagination'; // adjust path as needed
import styled from 'styled-components';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'A simple pagination component to navigate through pages.',
      },
    },
  },
};

// Default story
export const Default = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 5;

  return (
    <Pagination
      {...{
        pageNumber,
        totalPages,
        setPageNumber,
      }}
    />
  );
};

export const ManyPages = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 50;

  return (
    <Pagination
      {...{
        pageNumber,
        totalPages,
        setPageNumber,
      }}
    />
  );
};

const P = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 1.6rem;
  font-weight: 600;
`;

export const DifferentColors = () => {
  const [rPageNumber, setRPageNumber] = useState(1);
  const [bPageNumber, setBPageNumber] = useState(1);
  const [greenPageNumber, setGreenPageNumber] = useState(1);
  const [pPageNumber, setPPageNumber] = useState(1);
  const [greyPageNumber, setGreyPageNumber] = useState(1);
  const [blackPageNumber, setBlackPageNumber] = useState(1);
  const totalPages = 50;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <P>RED</P>
        <Pagination
          {...{ totalPages }}
          pageNumber={rPageNumber}
          setPageNumber={setRPageNumber}
          theme='red'
        />
      </div>
      <div>
        <P>BLUE</P>
        <Pagination
          {...{ totalPages }}
          pageNumber={bPageNumber}
          setPageNumber={setBPageNumber}
          theme='blue'
        />
      </div>
      <div>
        <P>GREEN</P>
        <Pagination
          {...{ totalPages }}
          pageNumber={greenPageNumber}
          setPageNumber={setGreenPageNumber}
          theme='green'
        />
      </div>
      <div>
        <P>PURPLE</P>
        <Pagination
          {...{ totalPages }}
          pageNumber={pPageNumber}
          setPageNumber={setPPageNumber}
          theme='purple'
        />
      </div>
      <div>
        <P>GREY</P>
        <Pagination
          {...{ totalPages }}
          pageNumber={greyPageNumber}
          setPageNumber={setGreyPageNumber}
          theme='grey'
        />
      </div>
      <div>
        <P>BLACK</P>
        <Pagination
          {...{ totalPages }}
          pageNumber={blackPageNumber}
          setPageNumber={setBlackPageNumber}
          theme='black'
        />
      </div>
    </div>
  );
};

export const SmallSize = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      {...{
        pageNumber,
        totalPages,
        setPageNumber,
      }}
      size='small'
    />
  );
};

export const MediumSize = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      {...{
        pageNumber,
        totalPages,
        setPageNumber,
      }}
      size='medium'
    />
  );
};

export const LargeSize = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      {...{
        pageNumber,
        totalPages,
        setPageNumber,
      }}
      size='large'
    />
  );
};

SmallSize.storyName = 'Small Size';
MediumSize.storyName = 'Medium Size';
LargeSize.storyName = 'Large Size';
ManyPages.storyName = 'Many Pages';
DifferentColors.storyName = 'Different Colors';

Default.storyName = 'Default Pagination';
