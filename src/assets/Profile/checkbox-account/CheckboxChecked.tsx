import SvgIcon from '@mui/material/SvgIcon';

export default function CheckboxChecked() {
    return (
        <SvgIcon  sx={{'&.MuiSvgIcon-root': {fontSize: '1.2rem'}}}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" rx="2" fill="white"/>
            <path d="M3 9.55556L7.4 14L14 4" stroke="#828DD4" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SvgIcon>
    )
}