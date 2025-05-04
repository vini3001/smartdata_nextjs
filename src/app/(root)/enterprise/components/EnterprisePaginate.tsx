import { useState } from 'react';
import { CustomDivider, CustomLabelPaginate, PaginationContainer, PaginationContent } from './styles';
import List from './List';
import React from 'react';
import { useLayout } from '@/contexts/FilterContext';
import EnterpriseFilters, { filterEnterprise, filterObjectEnterprise } from '@/app/components/Filters/EnterpriseFilter/EnterpriseFilter';
import { trpc } from '@/lib/trpc';

export default function PaginatedItems() {
  const [itemOffset, setItemOffset] = useState(0);
  const [numberView, setNumberView] = useState(10)
  const [filter, setFilter] = React.useState<filterEnterprise>(filterObjectEnterprise)
  const { setFilterComponent } = useLayout()

  React.useLayoutEffect(() => {
    setFilterComponent(<EnterpriseFilters handleSetValue={(value: filterEnterprise) => {setFilter(value)}} />);
  }, [])

  const { data, isLoading } = trpc.company.all.useQuery(filter);
  
  const persistedData = data !== undefined ? data : []

  const endOffset = itemOffset + numberView;
 
  const currentItems = persistedData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(persistedData.length / numberView);

  const handlePageClick = (_event: any, page: any) => {
    const newOffset = ((page - 1) * numberView) % persistedData.length;
    
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