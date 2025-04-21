import { FormControl, Select } from "@mui/material";
import styled from "styled-components";

export const ContainerDropdown = styled(FormControl)` 
   && {
    &.MuiFormControl-root {
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
   }
`

export const styleCheckbox = {
  '&.MuiButtonBase-root': {
    padding: '0.1em',
    borderRadius: '5px'
  },

  '.MuiSvgIcon-root': {
    color: '#828DD4'
  }
}