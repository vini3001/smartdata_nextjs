import React from "react";
import { Container, CustomButtonContainer } from "./styles";
import { ListItemIcon } from "@mui/material";
import OpenArrow from '@/assets/ArrowsDropdown/OpenArrow';
import ClosedArrow from '@/assets/ArrowsDropdown/ClosedArrow';

interface DropdownDaysProps {
    text: string
}

export function DropdownDays({text}: DropdownDaysProps) {
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <Container >
            <CustomButtonContainer onClick={handleOpen}>
            <div className='icon-text'>
                 <a>{text}</a>
            </div>
            <ListItemIcon>
                {!open ? <ClosedArrow svgProps={{sx: {'&.MuiSvgIcon-root': {fontSize: '1rem'}}}} color={"Black"} /> : <OpenArrow svgProps={{sx: {'&.MuiSvgIcon-root': {fontSize: '1rem'}}}}  color={"Black"} />}
            </ListItemIcon>
            </CustomButtonContainer>
        </Container>
    )
}