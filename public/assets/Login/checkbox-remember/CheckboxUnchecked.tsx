import SvgIcon from '@mui/material/SvgIcon';

export default function CheckboxChecked() {
    return (
        <SvgIcon  sx={{'&.MuiSvgIcon-root': {fontSize: '1.2rem'}}}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="12" height="12" rx="2" stroke="#26336B"/>   
        </svg>
      </SvgIcon>
    )
}