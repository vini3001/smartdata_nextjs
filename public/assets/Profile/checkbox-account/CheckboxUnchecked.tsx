import SvgIcon from '@mui/material/SvgIcon';

export default function CheckboxUnchecked() {
    return (
        <SvgIcon  sx={{'&.MuiSvgIcon-root': {fontSize: '1.2rem'}}}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" rx="2" fill="white"/>
        </svg>
      </SvgIcon>
    )
}