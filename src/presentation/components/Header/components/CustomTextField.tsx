import SearchIcon from "/src/presentation/assets/Header/search-icon.svg"
import { SvgIcon, theme } from "./styles";
import TextField from "../../TextFields/TextFieldBase";
import { ThemeProvider } from "@mui/material";

export default function TextFieldHeader() {
    return  (
        <ThemeProvider theme={theme}>
          <TextField
          props={{
            sx: {'.MuiInputBase-root': {borderRadius: '5px', color: 'white !important'}, 
                 '.MuiOutlinedInput-notchedOutline': {border: 'none !important'}},
            placeholder: "Pesquisar...",
            InputProps: {
              style: {
                paddingLeft: 0,
                border: 'none',
                height: '2rem',
                width: '55%',
                marginTop: '2px',
                backgroundColor: '#474A62',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center'
              },
              startAdornment: <SvgIcon src={SearchIcon} />
            },
            InputLabelProps: {
              style: {
                color: 'white'
              }
            }
          }} />
        </ThemeProvider>
    )
}