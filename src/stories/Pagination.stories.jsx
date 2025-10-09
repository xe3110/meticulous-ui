import { useState } from 'react';
import Pagination from '../components/Pagination'; // adjust path as needed

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
        setPageNumber
      }}
    />
  );
};

export const FewPages = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      {...{
        pageNumber,
        totalPages,
        setPageNumber
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
        setPageNumber
      }}
    />
  );
};

ManyPages.storyName = '50 Pages';

Default.storyName = 'Default Pagination';
