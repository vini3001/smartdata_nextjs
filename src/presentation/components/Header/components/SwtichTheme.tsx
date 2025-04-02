import { FormControl } from '@mui/material';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import lightIcon from '/public/assets/Theme/light-icon.svg'
import darkIcon from '/public/assets/Theme/dark-icon.svg'

const MaterialUITheme= styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '&.MuiSwitch-root': {
        width: '100%',
        height: '4.5rem',
        margin: 0,
        padding: 0,
    },
    '& .MuiSwitch-switchBase': {
      top: '.2rem',
      margin: 1,
      padding: 0,
      transform: 'translateX(100%)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(3%)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url(${lightIcon})`},
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#E8E8E8'
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: '#fff',
      borderRadius: 20 / 2,
      [theme.breakpoints.up('md')]: { width: '12.26rem' },
      height: '2rem',
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${darkIcon})`
      }
    },
    '& .MuiSwitch-track': {
      height: '2.5rem',
      opacity: 1,
      backgroundColor: '#E8E8E8',
      borderRadius: 20 / 2
    },
  }));

export default function SwitchTheme() {
    return (
        <FormControl sx={{marginTop: '0.5rem'}}> 
             <MaterialUITheme sx={{ m: 1 }} defaultChecked />
        </FormControl>
    )
}