import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { ContainerDropdown, DropdownCustom, Title } from '../style'
import { Box, createTheme, FormHelperText, InputLabel, SelectChangeEvent, SelectProps, SvgIcon, ThemeProvider } from '@mui/material';
import _ from "lodash";
import { ExpandMoreOutlined } from '@mui/icons-material';
import TextField from '../../TextFields/TextFieldBase';
import { ErrorField } from '@/domain/services/ErrorField';
import { Controller, UseFormRegister } from 'react-hook-form';

interface DropdownBase {
  props: SelectProps
  submenu: {id: number, name: string, value: string}[]
  error: ErrorField
  control: any
  title?: string
  placeholder?: string
  searchBar?: boolean
  register?: UseFormRegister<any>;
  handleReturnValue: (value: string) => void
}

const theme = createTheme({
  components: {
    MuiSelect: {
      defaultProps: {
        IconComponent: ExpandMoreOutlined
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: "-0.8vh",
          "&.MuiInputLabel-shrink": { top: 0 },
          "&.Mui-focused": {
            color: '#828dd4'
          }
        }
      }
    }
  }
});

export default function DropdownUser({props, submenu, title, error, register, control, placeholder, searchBar = false, handleReturnValue}: DropdownBase) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<string>('')
  const [filterValue, setFilterValue] = React.useState('')
  const [input, setInput] = React.useState('')

  const name = props.name ? props.name : "";

  const makeError = (): React.ReactNode => {
    return error?.hasError ? (
      <FormHelperText title={error?.message}>{error?.message}</FormHelperText>
    ) : (
      <></>
    );
  };

  const handleClose = (event: any) => {
    if (event?.type === 'click' && event.target.tagName === 'INPUT') {
      event.stopPropagation();
      return;
    }

    setOpen(false);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
     if (event.key === 'Enter') {
        setFilterValue(input)
     }
  }

  return (
          <Box style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '0.2rem'}}>
          {!_.isEmpty(title) && <Title>{title}</Title>}
          <ThemeProvider theme={theme}>
          <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => {
              const handleChange = (event: SelectChangeEvent<unknown>, _: React.ReactNode) => {
                event.target.value !== '' && setValue(event.target.value as string);
                field.onChange(event.target.value as string)
              };
           
              
              return (
                <ContainerDropdown sx={{ minWidth: 'auto' }}>
                <InputLabel disabled={props.disabled} id="demo-simple-select-error-label">{props.label}</InputLabel>
                <DropdownCustom
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  renderValue={(selected: any) => {
                    if (selected !== undefined) {
                      if (selected.length === 0) {
                        return (<>{placeholder !== undefined ? (<a style={{fontFamily: 'Oxygen', color: 'rgba(0,0,0,0.4)'}}>{placeholder}</a>) : (<a style={{display: 'flex', height: '23px'}}></a>)}</>)
                      }
                    }
                    return selected
                  }}
                  {...props}
                  value={value}
                  open={open}
                  error={error?.hasError}
                  slotProps={{input: {
                    name
                  }}
                  }
                  {...(register && register(name))}
                  onOpen={() => setOpen(true)}
                  onClose={handleClose}
                  onChange={handleChange}
                >
                  {searchBar &&   
                      <MenuItem onMouseDown={(e) => e.stopPropagation()}
                      onKeyDown={(e) => e.stopPropagation()} disableRipple
                              disableTouchRipple
                              selected={false}
                              sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                "&:focus": {
                                  backgroundColor: "transparent",
                                },
                                "&.Mui-focusVisible": {
                                  backgroundColor: "transparent",
                                },
                                '&.Mui-selected': {
                                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                                  "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                                  }
                              }}}
                              value=''>
                      <TextField props={{
                        placeholder: 'Pesquisar',
                        onChange: (e) => {setInput(e.target.value)},
                        onKeyDown: handleKeyDown,
                        slotProps: {
                          input: {
                            startAdornment: <SvgIcon sx={{fontSize: '18px', width: '1.5rem'}}>
                                          <svg width="12" height="12" viewBox="0 -3 7 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15 15L10.9581 10.9581M10.9581 10.9581C12.052 9.86411 12.6666 8.38039 12.6666 6.8333C12.6666 5.28621 12.052 3.80249 10.9581 2.70853C9.86411 1.61458 8.38039 1 6.8333 1C5.28621 1 3.80249 1.61458 2.70853 2.70853C1.61458 3.80249 1 5.28621 1 6.8333C1 8.38039 1.61458 9.86411 2.70853 10.9581C3.80249 12.052 5.28621 12.6666 6.8333 12.6666C8.38039 12.6666 9.86411 12.052 10.9581 10.9581Z" stroke="black" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                        </SvgIcon>
                          }
                        },
                        InputProps: {
                          style: {
                            paddingLeft: 0,
                            border: 'none',
                            height: '2rem',
                            width: '100%',
                            marginTop: '2px',
                            backgroundColor: 'white',
                            color: 'black',
                            justifyContent: 'center',
                            alignItems: 'center'
                          },
                          startAdornment: <SvgIcon sx={{fontSize: '18px', width: '1.5rem'}}>
                                          <svg width="12" height="12" viewBox="0 -3 7 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15 15L10.9581 10.9581M10.9581 10.9581C12.052 9.86411 12.6666 8.38039 12.6666 6.8333C12.6666 5.28621 12.052 3.80249 10.9581 2.70853C9.86411 1.61458 8.38039 1 6.8333 1C5.28621 1 3.80249 1.61458 2.70853 2.70853C1.61458 3.80249 1 5.28621 1 6.8333C1 8.38039 1.61458 9.86411 2.70853 10.9581C3.80249 12.052 5.28621 12.6666 6.8333 12.6666C8.38039 12.6666 9.86411 12.052 10.9581 10.9581Z" stroke="black" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                        </SvgIcon>
                        },}} />
                    </MenuItem> }
                    {submenu.map((item, index) => {
                          return <MenuItem key={index} value={item.value}>{item.name}</MenuItem>
                    })}
                </DropdownCustom>
                {makeError()}
            </ContainerDropdown>
              )
            }}
          />
          </ThemeProvider>
        </Box>
  );
}