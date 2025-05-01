import { useState } from 'react';
import { CustomDivider, CustomLabelPaginate, PaginationContainer, PaginationContent } from './styles';
import List from './List';

const items = [{id: 1, nome: 'teste1', idade: 2}, {id:2, nome: 'teste2', idade: 2}, {id: 3, nome: 'teste3', idade: 2}]

export default function PaginatedItems() {
  const [itemOffset, setItemOffset] = useState(0);
  const [numberView, setNumberView] = useState(10)

  const numberViews = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const endOffset = itemOffset + numberView;
  
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / numberView);

  const handlePageClick = (_event: any, page: any) => {
    const newOffset = ((page - 1) * numberView) % items.length;
    
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