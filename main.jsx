import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Pagination from './src/components/Pagination';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pagination pageNumber={1} totalPages={10} setPageNumber={() => {}} />
  </StrictMode>
);
