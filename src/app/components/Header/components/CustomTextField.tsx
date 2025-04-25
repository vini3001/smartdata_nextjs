import SearchIcon from "@/assets/Header/search-icon.svg"
import { SvgIcon, theme } from "./styles";
import TextField from "../../TextFields/TextFieldBase";
import { ThemeProvider } from "@mui/material";

export default function TextFieldHeader() {
    console.log(SearchIcon)
    return  (
        <ThemeProvider theme={theme}>
          <TextField
          props={{
            sx: {'.MuiInputBase-root': {borderRadius: '5px', color: 'white !important'}, 
                 '.MuiOutlinedInput-notchedOutline': {border: 'none !important'}},
            placeholder: "Pesquisar...",
            InputProps: {
              startAdornment: <SvgIcon src={SearchIcon.src} />
            },
            slotProps: {
              input: {
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
                }
              },
              inputLabel: {
                style: {
                  color: 'white'
                }
              }
            }
          }} />
        </ThemeProvider>
    )
}