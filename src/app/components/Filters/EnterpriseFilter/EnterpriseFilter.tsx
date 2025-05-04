import * as React from 'react';
import { ItemContainer } from '../style';
import { ButtonFilter, CustomButton, CustomMenuList } from '../style'
import { FilterAlt, KeyboardArrowUp } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CustomSwitchButton from '../../SwitchButton';
import { Divider, Drawer, SelectChangeEvent } from '@mui/material';
import TextField from '../../TextFields/TextFieldBase';
import { filters } from '@/utils/filters'
import DropdownUser from '../../DropdownBase/DropdownUser/DropdownUser';

export const filterObjectEnterprise = {
    order: 'desc',
    active: true,
    name: '',
    location: ''
} as const

export type filterEnterprise = {
  order: 'asc' | 'desc',
  active: boolean,
  name: string,
  location: string
}

interface EnterpriseFiltersProps {
  handleSetValue: (value: filterEnterprise) => void
}

export default function EnterpriseFilters({handleSetValue}: EnterpriseFiltersProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [local, setLocal] = React.useState(filterObjectEnterprise)

  const EnterpriseFilters = filters.people

  const toggleDrawer = () => {
    setIsOpen(!isOpen)

    return;
  };

  const handleReturnValue = () => {
     handleSetValue(local)
  }

  const handleClearFields = () => {
     handleSetValue(filterObjectEnterprise)
  }

  const handleChangeDropdown = (e: SelectChangeEvent<unknown>, _: React.ReactNode) => {
    const { name, value } = e.target
    const newState = { ...local, [name]: value }
    setLocal(newState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { type, name, value, checked } = e.target
    const newState = { ...local, [name]: type === 'checkbox' ? checked : value }
    setLocal(newState)
  }

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
              <a>Filtro</a><CustomSwitchButton props={{}} customControl={undefined} /><a>Ativo</a>
          </ItemContainer>
          <Divider />
          <div style={{display: 'flex', flexDirection: 'column', marginTop: '1rem', gap: '0.1rem'}}>
            {EnterpriseFilters.length !== 0 && EnterpriseFilters.map((item) => {
              return (
                <ItemContainer key={item.id}>
                  {item.isDropdown ? (
                      <DropdownUser
                      props={{ onChange: handleChangeDropdown, sx: { '&.MuiInputBase-root': { border: 'unset', borderRadius: '8px', backgroundColor: '#FAFAFA !important' } }, label: `${item.label}` }} 
                      submenu={item.submenu} error={{ hasError: false, message: '', nameField: '' }} handleReturnValue={() => { } } control={undefined} />
                  ) : (
                    <TextField
                    props={{name: item.name, onChange: handleChange, sx: {'.MuiInputBase-root': {border: 'unset', borderRadius: '8px', backgroundColor: '#FAFAFA'}}, label: `${item.label}`}} />
                  )}
                </ItemContainer>
              )
            })}

            <div className='button-container'>
            <ItemContainer style={{width: '100%', gap: '0.5rem'}}>
                <ButtonFilter onClick={handleClearFields} variant='outlined' customcolor='green'>Limpar</ButtonFilter>
                <ButtonFilter onClick={handleReturnValue} variant='outlined' customcolor='purple'>Ok</ButtonFilter>
            </ItemContainer>
          </div>
        </div>
        </CustomMenuList>
      </Drawer>
    </div>
  );
}
