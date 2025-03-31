import * as React from 'react';
import { ItemContainer } from './styles';
import { ButtonFilter, CustomButton, CustomMenuList } from './styles';
import { FilterAlt, KeyboardArrowUp } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomSwitchButton from '../../SwitchButton';
import { Divider, Drawer } from '@mui/material';
import TextField from '../../TextFields/TextFieldBase';

export default function MenuListComposition() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
            <div style={{marginTop: '1rem'}}>
              <ItemContainer>
                <TextField
                  props={{sx: {'.MuiInputBase-root': {border: 'unset', borderRadius: '8px', backgroundColor: '#FAFAFA'}}, placeholder: 'Nome'}} /></ItemContainer>
              <ItemContainer>
                <TextField 
                  props={{sx: {'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: '#FAFAFA'}},placeholder: 'Origem'}} />
              </ItemContainer>
              <ItemContainer>
                <TextField 
                  props={{sx: {'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: '#FAFAFA'}},placeholder: 'Formato destino'}} />
              </ItemContainer>
              <ItemContainer>
                <TextField 
                  props={{sx: {'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: '#FAFAFA'}},placeholder: 'Grupos'}} />
              </ItemContainer>

              <div className='button-container'>
              <ItemContainer style={{width: '100%', gap: '0.5rem'}}>
                  <ButtonFilter variant='outlined' color='green'>Limpar</ButtonFilter>
                  <ButtonFilter variant='outlined' color='purple'>Ok</ButtonFilter>
              </ItemContainer>
            </div>
          </div>
          </CustomMenuList>
        </Drawer>
      </div>
  );
}
