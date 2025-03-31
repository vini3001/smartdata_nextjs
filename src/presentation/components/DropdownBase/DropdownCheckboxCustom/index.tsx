import { Checkbox } from '@/presentation/components';
import createTheme from '@mui/material/styles/createTheme';
import { DropdownCustomNew } from '../style';
import { createFilterOptions, FormHelperText, TextField, TextFieldProps, ThemeProvider } from '@mui/material';
import { ExpandMoreOutlined } from '@mui/icons-material';
import React from 'react';
import { ErrorField } from '@/domain/services/ErrorField';
import { UseFormRegister } from 'react-hook-form';

const theme = createTheme({
  components: {
      MuiAutocomplete: {
          defaultProps: {
            popupIcon: <ExpandMoreOutlined />
          }
      },
  },
});

type ListObject = {id: number, value: string}

interface DropdownCheckboxCustomProps {
  props: TextFieldProps
  OptionsList: ListObject[]
  placeholder: string
  error?: ErrorField;
  register?: UseFormRegister<any>;
}

export default function DropdownCheckboxCustom(DropdownCheckboxProps: DropdownCheckboxCustomProps) {
  const [selectedOptions, setSelectedOptions] = React.useState<ListObject[]>([]);
  const filter = createFilterOptions();

  const {props, OptionsList, error, register, placeholder} = DropdownCheckboxProps

  const handleToggleOption = (selectedOptions: React.SetStateAction<ListObject[]>) => {
    setSelectedOptions(selectedOptions);}
  const handleClearOptions = () => setSelectedOptions([]);
  const handleSelectAll = (isSelected: any) => {
    if (isSelected) {
      setSelectedOptions(OptionsList);
    } else {
      handleClearOptions();
    }
  };

  const allSelected = OptionsList.length === selectedOptions.length;
  const handleToggleSelectAll = () => {
    handleSelectAll(!allSelected);
  };

  const handleChange = (_event: any, selectedOptions: any, reason: any) => {
    if (reason === "selectOption" || reason === "removeOption") {
      if (selectedOptions.find((option: any) => option.id === 0)) {
        handleToggleSelectAll();
      } else {
        handleToggleOption(selectedOptions);
      }
    } else if (reason === "clear") {
      handleClearOptions();
    }
  };

  const name = props.name ? props.name : "";
  console.log(selectedOptions)
  const makeError = (): React.ReactNode => {
    return error?.hasError ? (
      <FormHelperText title={error?.message}>{error?.message}</FormHelperText>
    ) : (
      <></>
    );
  };
  
  return (
      <ThemeProvider theme={theme}>
        <DropdownCustomNew
        multiple
        limitTags={2}
        aria-expanded="false"
        value={selectedOptions}
        onChange={handleChange}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          return [{ value: "Selecionar todos...", id: 0 }, ...filtered];
        }}
        options={OptionsList}
        disableCloseOnSelect
        getOptionLabel={(option: any) => option.value}
        renderOption={(props, option: any, { selected }) => {
            const { key, ...optionProps } = props;
            const selectAllProps =
                  option.id === 0
                    ? { checked: allSelected }
                    : {};
            return (
            <li key={key} {...optionProps}>
                <Checkbox props={{checked: selected, ...selectAllProps }} />
                {option.value}
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
              error={error?.hasError}
              helperText={makeError()}
              onChange={(value) => {console.log(value.target.value)}}
              placeholder={placeholder}
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
            />
          );
        } }
        // renderInput={(params) => (
        //     <TextField {...params} placeholder={placeholder} />
        // )}
        />
      </ThemeProvider>)
}

export const top100Films = [
  { id: 1, value: 'The Shawshank Redemption',},
  { id: 2, value: 'The Godfather'},
  { id: 3, value: 'The Godfather: Part II' },
  { id: 4, value: 'The Dark Knight'},
  { id: 5, value: '12 Angry Men'},
  { id: 6, value: "Schindler's List"},
  { id: 7, value: 'Pulp Fiction',},
];