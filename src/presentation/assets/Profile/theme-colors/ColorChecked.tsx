import SvgIcon from '@mui/material/SvgIcon';

interface colorOptionCheckProps {
  color: string
}

export default function ColorOptionChecked({color}: colorOptionCheckProps) {
    return (
        <SvgIcon  sx={{'&.MuiSvgIcon-root': {fontSize: '2.5rem'}}}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 50 50"
          stroke="transparent"
        >
          <svg width="50" height="50" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19.5" cy="19.5" r="15.5" fill={color}/>
            <circle cx="19.5" cy="19.5" r="19" stroke={color}/>
            <path d="M14 19.5556L18.4 24L25 14" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </svg>
      </SvgIcon>
    )
}