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
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Pagination pageNumber={currentPage} totalPages={totalPages} setPageNumber={handlePageChange} />
  );
};

export const ManyPages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;

  return (
    <Pagination pageNumber={currentPage} totalPages={totalPages} setPageNumber={setCurrentPage} />
  );
};

ManyPages.storyName = '50 Pages';

Default.storyName = 'Default Pagination';
