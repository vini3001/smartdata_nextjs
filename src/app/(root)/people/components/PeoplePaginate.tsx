'use client'

import React from 'react';
import { CustomDivider, CustomLabelPaginate, PaginationContainer, PaginationContent } from './styles';
import List from './List';
import { trpc } from '@/lib/trpc';
import UserFilters, { filterObject, filterUser } from '@/app/components/Filters/UserFilter/UserFilters';
import { useLayout } from '@/contexts/FilterContext';

export default function PaginatedItems() {
  const [itemOffset, setItemOffset] = React.useState(0);
  const [numberView, setNumberView] = React.useState(10);
  const [filter, setFilter] = React.useState<filterUser>(filterObject)
  const { setFilterComponent } = useLayout()

  React.useLayoutEffect(() => {
    setFilterComponent(<UserFilters handleSetValue={(value: filterUser) => {setFilter(value)}} />);
  }, [])

  const { data, isLoading } = trpc.people.all.useQuery(filter);

  const persistedData = data !== undefined ? data : []

  const endOffset = itemOffset + numberView;
 
  const currentItems = persistedData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(persistedData.length / numberView);

  const handlePageClick = (_event: any, page: any) => {
    const newOffset = ((page - 1) * numberView) % persistedData.length;
    
    setItemOffset(newOffset);
  };

  function handleSetOption(item: string) {
    setNumberView(parseInt(item))
  }

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