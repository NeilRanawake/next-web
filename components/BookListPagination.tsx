import { useState } from 'react';
import { Box, Center, Pagination } from '@mantine/core';

interface BookProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

function BookListPagination({totalItems, itemsPerPage, onPageChange, currentPage}: BookProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
        <Box mt={50}>
          <Center>
        <Pagination
      total={totalPages}
      currentPage={currentPage}
      onChange={onPageChange}
      withEdges
    />
    </Center>
        </Box>
  );
};

export default BookListPagination;
