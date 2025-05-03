import { Checkbox } from '@/app/components';
import { createTheme } from '@mui/material/styles';
import { DropdownCustomNew } from '../style';
import { createFilterOptions, FormHelperText, TextField, TextFieldProps, ThemeProvider } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';
import { ErrorField } from '@/domain/services/ErrorField';
import { Controller, UseFormRegister } from 'react-hook-form';
import { useState } from 'react';

const theme = createTheme({
  components: {
      MuiAutocomplete: {
          defaultProps: {
            popupIcon: <ExpandMoreOutlined />
          }
      },
  },
});

interface DropdownCheckboxCustomProps {
  props: TextFieldProps
  limitTags?: number
  optionLabel: string
  OptionsList: any[]
  placeholder: string
  error?: ErrorField;
  control: any;
  register?: UseFormRegister<any>;
}

export default function DropdownCheckboxCustom(DropdownCheckboxProps: DropdownCheckboxCustomProps) {
  const [isFocused, setIsFocused] = useState(false);
  const filter = createFilterOptions();

  const {props, OptionsList, optionLabel, limitTags = 2, error, control, placeholder} = DropdownCheckboxProps


  const name = props.name ? props.name : "";

  const makeError = (): React.ReactNode => {
    return error?.hasError ? (
      <FormHelperText title={error?.message}>{error?.message}</FormHelperText>
    ) : (
      <></>
    );
  };
  
  return (
      <ThemeProvider theme={theme}>
        <Controller
        name={name}
        control={control}
        defaultValue={[]}
        render={({ field }) => {
          const handleToggleOption = (selectedOptions: any[]) => {
            const selectedOptionsNew = field.value;
            const optionSelected = selectedOptions[selectedOptions.length - 1]
            const index = selectedOptionsNew.findIndex((selectedOption: any) => selectedOption.id === optionSelected.id);

            if (index === -1) {
              selectedOptionsNew.push(optionSelected);
            } else {
              selectedOptionsNew.splice(index, 1);
            }
            field.onChange(selectedOptionsNew)}
          const handleClearOptions = () => field.onChange([]);
          const handleSelectAll = (isSelected: any) => {
            if (isSelected) {
              field.onChange(OptionsList);
            } else {
              handleClearOptions();
            }
          };
        
          const allSelected = OptionsList.length === field.value.length;
          const handleToggleSelectAll = () => {
            handleSelectAll(!allSelected);
          };
        
          const handleChange = (_event: any, selectedOptions: any, reason: any) => {
            if (reason === "selectOption" || reason === "removeOption") {
              const filterAll = selectedOptions.filter((selectedOption: any) => selectedOption.all === true)

              if (filterAll.length !== 0) {
                handleToggleSelectAll();
              } else if (selectedOptions.length > 0) {
                handleToggleOption(selectedOptions);
              } else {
                field.onChange([])
              }
            } else if (reason === "clear") {
              handleClearOptions();
            }
          };

          return (
            <DropdownCustomNew
            multiple
            limitTags={limitTags}
            aria-expanded="false"
            value={field.value}
            onChange={handleChange}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);
              return [{ [optionLabel]: 'Selecionar todos...', all: true }, ...filtered];
            }}
            options={OptionsList}
            disableCloseOnSelect
            getOptionLabel={(option: any) => option[optionLabel]}
            renderOption={(props, option: any) => {
                const { key, ...optionProps } = props;

                const isSelected = field.value.some((selectedOption: any) => selectedOption.id === option.id) ||
                                   (field.value.length === OptionsList.length && option.all === true)

                return (
                <li key={key} {...optionProps}>
                    <Checkbox props={{checked: isSelected}} />
                    {option[optionLabel]}
                </li>
                );
            }}
            style={{ width: '100%' }}
            renderInput={ params => {
              const { InputProps, ...restParams } = params;
              const { startAdornment, ...restInputProps } = InputProps;
    
              return (
                <TextField
                  {...props}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  error={error?.hasError}
                  helperText={makeError()}
                  placeholder={field.value.length === 0 ? placeholder : ''}
                  { ...restParams }
                  InputProps={ {
                    ...restInputProps,
                    startAdornment: (
                      <div style={{
                        maxHeight: '4rem',
                        overflowY: 'auto'
                      }}
                      >
                        {startAdornment}
                      </div>
                    ),
                  } }
                  InputLabelProps={{
                    shrink: isFocused || field.value.length !== 0,
                    sx: { top: "-1vh", "&.MuiInputLabel-shrink": { top: 0 },
                          "&.Mui-focused": {color: '#828dd4'} }
                  }}
                />
              );
            } }
            // renderInput={(params) => (
            //     <TextField {...params} placeholder={placeholder} />
            // )}
            />
          )
        }} />
      </ThemeProvider>)
}

export const top100Films = [
  { id: 1, value: 'The Shawshank Redemption',},
  { id: 2, value: 'The Godfather'},
  { id: 3, value: 'The Godfather: Part II' },
  { id: 4, value: 'The Dark Knight'},
  { id: 5, value: '12 Angry Men'},
  { id: 6, value: "Schindler's List"},
  { id: 7, value: 'Pulp Fiction'}
]