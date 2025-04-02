import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

interface OpenArrowProps {
   svgProps: SvgIconProps | undefined
   color: string
}

export default function OpenArrow({color = 'black', svgProps}: OpenArrowProps) {
    return (
        <SvgIcon {...svgProps}>
        {/* credit: cog icon from https://heroicons.com */}
        <svg width='12' height='5' viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.00039 6.04389L5.95621 1.0001L11 5.95592" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SvgIcon>
    )
}