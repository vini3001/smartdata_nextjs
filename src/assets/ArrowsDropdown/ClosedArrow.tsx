import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface ClosedArrowProps {
   svgProps: SvgIconProps | undefined
   color: string
}

export default function ClosedArrow({color, svgProps}: ClosedArrowProps) {
    return (
        <SvgIcon {...svgProps}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg width='12' height='5' viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L6 6L1 1" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SvgIcon>
    )
}