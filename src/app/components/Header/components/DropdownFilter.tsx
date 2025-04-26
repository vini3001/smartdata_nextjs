import * as React from 'react';
import { ItemContainer } from './styles';
import { ButtonFilter, CustomButton, CustomMenuList } from './styles';
import { FilterAlt, KeyboardArrowUp } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomSwitchButton from '../../SwitchButton';
import { Divider, Drawer } from '@mui/material';
import TextField from '../../TextFields/TextFieldBase';
import DropdownBase from '../../DropdownBase';

interface DropdownProps {
  filters: {id: number, name: string, isDropdown: boolean, submenu: string[]}[]
}

export default function MenuListComposition({filters}: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const defaultFilters = ['Nome', 'Origem', 'Formato Destino', 'Grupos']

  const toggleDrawer = () => {
    setIsOpen(!isOpen)

    return;
  };

  return (
    <div>
      <CustomButton
        onClick={() => {toggleDrawer()}}
        onKeyDown={() => {toggleDrawer()}}
        startIcon={<FilterAlt />}
        endIcon={isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
      >
        Filtro
      </CustomButton>
      <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={() => {toggleDrawer()}}
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            minWidth: '15.98rem',
            boxSizing: 'border-box',
          },
        }}
      >
        <CustomMenuList
          autoFocusItem={isOpen}
          id="composition-menu"
          aria-labelledby="composition-button"
        >
          <ItemContainer className='filter-section'>
              <a>Filtro</a><CustomSwitchButton /><a>Ativo</a>
          </ItemContainer>
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem', gap: '0.1rem'}}>
            {filters.length !== 0 ? filters.map((item) => {
              return (
                <ItemContainer>
                  {item.isDropdown ? (
                      <DropdownBase
                      key={item.id}
                      props={{ sx: { '&.MuiInputBase-root': { border: 'unset', borderRadius: '8px', backgroundColor: '#FAFAFA !important' } }, label: `${item.name}` }} submenu={item.submenu} error={{hasError: false, message: '', nameField: ''}} handleReturnValue={() => {}} />
                  ) : (
                    <TextField
                    key={item.id}
                    props={{sx: {'.MuiInputBase-root': {border: 'unset', borderRadius: '8px', backgroundColor: '#FAFAFA'}}, label: `${item.name}`}} />
                  )}
                </ItemContainer>
              )
            }) : defaultFilters.map((item) => {
              return (
                <ItemContainer>
                <TextField
                  key={item}
                  props={{sx: {'.MuiInputBase-root': {border: 'unset', borderRadius: '8px', backgroundColor: '#FAFAFA'}}, placeholder: `${item}`}} />
              </ItemContainer>
              )
            })}

            <div className='button-container'>
            <ItemContainer style={{width: '100%', gap: '0.5rem'}}>
                <ButtonFilter variant='outlined' customcolor='green'>Limpar</ButtonFilter>
                <ButtonFilter variant='outlined' customcolor='purple'>Ok</ButtonFilter>
            </ItemContainer>
          </div>
        </div>
        </CustomMenuList>
      </Drawer>
    </div>
  );
}
