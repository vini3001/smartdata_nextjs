'use client'

import * as React from 'react';
import { ListItemIcon } from '@mui/material';
import { Container, CustomButtonContainer, ListSubMenu } from './styles';
import OpenArrow from '@/assets/ArrowsDropdown/OpenArrow';
import ClosedArrow from '@/assets/ArrowsDropdown/ClosedArrow';
import { useRouter } from 'next/navigation';

interface MenuDropdownProps {
    text: string
    showText: boolean
    submenu: {id: number, text: string, route: string}[]
    icon: React.ReactNode
}

export default function MenuDropdown({text, showText, submenu, icon}: MenuDropdownProps) {
    const [open, setIsOpen] = React.useState<boolean>(false);

    const router = useRouter();

    function handleClick () {
        setIsOpen(!open)
    }

    return (
        <Container>
            <CustomButtonContainer onClick={handleClick}>
            <div className='icon-text'>
                <ListItemIcon>{icon}</ListItemIcon>
                {showText && <span>{text}</span>}
            </div>
            <ListItemIcon>
            {showText && <>
                {!open ? <ClosedArrow color={'currentColor'} svgProps={{sx: {'&.MuiSvgIcon-root': {fontSize: '0.8rem'}}}} /> : <OpenArrow color={'currentColor'} svgProps={{sx: {'&.MuiSvgIcon-root': {fontSize: '0.8rem'}}}} />}
            </>}
            </ListItemIcon>
            </CustomButtonContainer>
            {open &&
                <>
                 {submenu.map((menu) => {
                    return (
                        <ListSubMenu onClick={() => router.push(menu.route)} key={menu.id} >
                            <div className='submenu-container'>
                               {menu.text}
                            </div>
                        </ListSubMenu>
                    )
                 })}
                </>
            }
        </Container>
    )
}