import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import styled from "@emotion/styled";
import { Autocomplete } from '@mui/material';

export const ContainerDropdown = styled(FormControl)` 
   && {
    &.MuiFormControl-root {
        border-radius: 8px;
        width: 100%;
    }
    .MuiInputBase-root {
        background-color: white;
        width: 100%;
        border-radius: 8px;
    }

    .MuiSvgIcon-root {
        font-size: x-large;
    }

    .MuiFormHelperText-root {
      color: ${(props) => props.theme.colors.errors.messageErrorField};
      z-index: 1;
      font-size: 14px;

      background-color: transparent !important;
    }

   }
`

export const DropdownCustom = styled(Select)`
   padding-left: 10px;
   && {
    .MuiSelect-select {
        min-height: auto;
        width: -webkit-fill-available;
        padding: 8.5px 5px 8.5px 5px;
        justify-content: center;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: #DCDCDC;
    }

    &.MuiOutlinedInput-root {
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: #828dd4;
      }
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #828dd4;
      }
    }
   }
`

export const DropdownCustomNew = styled(Autocomplete)`
   && {
    .MuiFormControl-root {
        border-radius: 8px;
        border-color: #DCDCDC;
        width: 100%;
    }
    .MuiInputBase-root {
        background-color: white;
        width: 100%;
        min-height: auto;
        width: -webkit-fill-available;
        padding: 8.5px 5px 8.5px 15px;
        justify-content: start;
        border-radius: 8px;
    }

    .MuiSvgIcon-root {
      font-size: x-large;
      color: currentColor;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: #DCDCDC;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: #828dd4;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #828dd4;
    }

    &.MuiAutocomplete-root {
      .MuiOutlinedInput-root .MuiAutocomplete-input {
        padding: 0;
      }
    }

    .MuiChip-root {
      background-color: #D6D9EF;
    }

    .MuiChip-deleteIcon {
      color: #828dd4;
    }
   }
`

export const Title = styled.a`
  color: ${(props) => props.theme.colors.subtitles};
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  letter-spacing: 1.4px;
`

export const SvgIcon = styled.img`
   height: 16px;
   width: 16px;
   margin-inline: 0.5rem;
`