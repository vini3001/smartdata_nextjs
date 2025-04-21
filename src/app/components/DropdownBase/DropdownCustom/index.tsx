import * as React from 'react';
import { ListItemIcon } from '@mui/material';
import { Container, CustomButtonContainer, CustomButtonSubMenu, SubMenu } from './styles';
import "./style.css"
import ClosedArrow from '@/assets/ArrowsDropdown/ClosedArrow';
import OpenArrow from '@/assets/ArrowsDropdown/OpenArrow';

interface DropdownBaseProps {
    isNumber: boolean
    submenu: string[]
    hidden: boolean
    handleSetValue: (item: string) => void
}

export default function DropdownBaseFilled({isNumber, submenu, hidden, handleSetValue}: DropdownBaseProps) {
    const [open, setOpen] = React.useState(false);
    const [selectedOption, setSelectedOption] = React.useState('')

    const anchorRef = React.useRef<HTMLDivElement>(null);
    const documentRef = React.useRef<HTMLDivElement>(null);

    function handleOpenSubMenu () {
        if (documentRef.current && anchorRef.current) {
            const headerClassList = documentRef.current.classList;
            setOpen(!open)
            headerClassList.toggle('menuShow')
        }
    }

    React.useEffect(() => {
      setSelectedOption(submenu[0])
    }, [])

    function handleSetOption(item: string) {
        setSelectedOption(item)
        handleSetValue(item)
    }

    return (
        <Container isnumber={isNumber ? 'true' : 'false'} hidden={hidden}>
            <CustomButtonContainer ref={anchorRef} isopen={open ? 'true' : 'false'} isnumber={isNumber ? 'true' : 'false'} onClick={handleOpenSubMenu}>
            <div className='icon-text'>
                 <a>{selectedOption}</a>
            </div>
            <ListItemIcon>
                {!open ? <ClosedArrow color={'#828DD4'} svgProps={{sx: {'&.MuiSvgIcon-root': {fontSize: '0.7rem'}}}} /> : <OpenArrow color={'#828DD4'} svgProps={{sx: {'&.MuiSvgIcon-root': {fontSize: '0.7rem'}}}} />}
            </ListItemIcon>
            </CustomButtonContainer>
            <SubMenu isnumber={isNumber ? 'true' : 'false'} id='dropdown-layout' ref={documentRef}>
                {submenu.map((item) => {
                    return (
                        <CustomButtonSubMenu key={item} onClick={() => {handleSetOption(item)}}><span>{item}</span></CustomButtonSubMenu>
                    )
                })}
            </SubMenu>
        </Container>
    )
}