'use client'

import { useState } from 'react';
import { CustomDivider, CustomLabelPaginate, PaginationContainer, PaginationContent } from './styles'
import List from './List';

export interface PaginatedItemsProps {
    itemsPerPage: number;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function PaginatedItems({ itemsPerPage }: PaginatedItemsProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (_event: any, page: any) => {
    const newOffset = ((page - 1) * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <PaginationContainer>
      <PaginationContent>
        <List currentItems={currentItems}/>
      </PaginationContent>
      <CustomDivider />
      <CustomLabelPaginate
        count={pageCount}
        onChange={handlePageClick}
        hidePrevButton 
        hideNextButton
      />
    </PaginationContainer>
  );
}