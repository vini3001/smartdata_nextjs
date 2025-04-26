import { useState } from 'react';
import { CustomDivider, CustomLabelPaginate, ListHeaderInfo, PaginationContainer, PaginationContent } from './styles';
import List from './List';
import DropdownBase from '@/app/components/DropdownBase/DropdownCustom';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export default function PaginatedItems() {
  const [itemOffset, setItemOffset] = useState(0);
  const [numberView, setNumberView] = useState(10)

  const numberViews = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const endOffset = itemOffset + numberView;
 
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / numberView);

  const handlePageClick = (_event: any, page: any) => {
    const newOffset = ((page - 1) * numberView) % items.length;
    console.log(6 % items.length)
    setItemOffset(newOffset);
  };

  function handleSetOption(item: string) {
    setNumberView(parseInt(item))
  }

  return (
    <PaginationContainer>
      <HeaderInfo />
      <PaginationContent>
        <List currentItems={currentItems}/>
      </PaginationContent>
      <CustomDivider style={{opacity: 0}}/>
      <div className='text-footer'>
        <a>Visualizar de </a>
        <DropdownBase isNumber={true} submenu={numberViews} hidden={false} handleSetValue={handleSetOption} />
        <a> veja de 1 a {numberView} de 100 arquivos</a>
      </div>
      <CustomLabelPaginate
        count={pageCount}
        onChange={handlePageClick}
        hidePrevButton 
        hideNextButton
      />
    </PaginationContainer>
  );
}

export function HeaderInfo() {
  return (
      <ListHeaderInfo>
          <div className="title-container">
              <a>Nome</a>
          </div>
          <div className="document-container"><a>Tipo</a></div>
          <div className="hour-container">
              <a>Excluído em</a>
          </div>
          <div >
              <a>Excluído por</a>
          </div>
          <div className='icon-container'/>
      </ListHeaderInfo>
  )
}