import SvgIcon from '@mui/material/SvgIcon';

interface colorOptionUncheckProps {
    color: string
}

export default function ColorOptionUnchecked({color}: colorOptionUncheckProps) {
    return (
        <SvgIcon  sx={{'&.MuiSvgIcon-root': {fontSize: '2.5rem'}}}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-4 -5 50 50"
          stroke="transparent"
        >
          <svg width="42" height="42" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="15.5" rx="16" ry="15.5" fill={color}/>
          </svg>
        </svg>
      </SvgIcon>
    )
}