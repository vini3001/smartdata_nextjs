import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { ContainerDropdown, DropdownCustom, DropdownCustomNew, Title } from './style';
import { Box, createTheme, FormHelperText, InputLabel, SelectProps, SvgIcon, TextField, TextFieldProps, ThemeProvider } from '@mui/material';
import _ from "lodash";
import { ExpandMoreOutlined } from '@mui/icons-material';
import { ErrorField } from '@/domain/services/ErrorField';
import { Controller, UseFormRegister } from 'react-hook-form';

interface DropdownBase {
  props: SelectProps
  propsText?: TextFieldProps
  error?: ErrorField
  title?: string
  placeholder?: string
  register?: UseFormRegister<any>;
  handleReturnValue: (value: any) => void
  optionLabel: string
  OptionsList: any[]
  control: any;
}

const theme = createTheme({
  components: {
      MuiAutocomplete: {
          defaultProps: {
            popupIcon: <ExpandMoreOutlined />
          }
      },
  },
});

export default function DropdownBase(dropdownProps: DropdownBase) {
  const {props, propsText, title, error, optionLabel, control, OptionsList, placeholder} = dropdownProps

  const name = props.name ? props.name : "";

  return (
          <Box style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '0.2rem'}}>
          {!_.isEmpty(title) && <Title>{title}</Title>}
          <ThemeProvider theme={theme}>
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field }) => {
              const handleChange = (_event: any, selectedOptions: any, reason: any) => {
                field.onChange(selectedOptions)
              };

              return (
                <DropdownCustomNew
                  aria-expanded="false"
                  value={field.value}
                  onChange={handleChange}
                  options={OptionsList}
                  disableCloseOnSelect
                  getOptionLabel={(option: any) => option[optionLabel] || ''}
                  style={{ width: '100%' }}
                  renderInput={ params => {      
                    return (
                      <TextField {...params} 
                      {...propsText}
                      error={error?.hasError}
                      placeholder={placeholder}
                      helperText={error?.hasError ? error.message : ''}
                      InputLabelProps={{
                        sx: { top: "-1vh", "&.MuiInputLabel-shrink": { top: 0 },
                              "&.Mui-focused": {color: '#828dd4'} }
                      }} 
                      />
                    );
                  } }
                  />
                )
              }} />
          </ThemeProvider>
        </Box>
  );
}