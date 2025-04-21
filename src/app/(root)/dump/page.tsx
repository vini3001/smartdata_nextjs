import { DefaultPage } from "@/app/components";
import PaginatedItems from "./components/DumpPaginate";
import React from "react";
import { ButtonDump } from "./styles";
import { Box, ClickAwayListener, Grow, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";


export default function FilesDump() {
    return (
        <Box>
            <ToolsBand text={"Boa Noite, Cláudio"} sideComponent={<DumpButton />} />
            <PaginatedItems />
        </Box>
    )
}

function DumpButton() {
const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef<HTMLButtonElement | null>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: any) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        } else if (event.key === 'Escape') {
        setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (anchorRef.current && prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
    <>
        <ButtonDump ref={anchorRef} onClick={handleToggle}>Limpar toda lixeira</ButtonDump> 
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            >
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                style={{
                    inset: '5px 0px auto auto !important',
                    transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
                >
                <Paper sx={{boxShadow: 3}}>
                    <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                        autoFocusItem={open}
                        sx={{
                        '.MuiTypography-root': {fontFamily: 'Oxygen'},
                        '.MuiListItemIcon-root': {minWidth: '23px'}
                        }}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><img src="assets/paste.svg" /></ListItemIcon>
                            <ListItemText>Restaurar</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon><img src="assets/Schedule/botao-lixeira-vermelho.svg" /></ListItemIcon>
                            <ListItemText sx={{color: '#FF4228'}}>Excluir para sempre</ListItemText>
                        </MenuItem>
                    </MenuList>
                    </ClickAwayListener>
                </Paper>
                </Grow>
            )}
            </Popper>
        </>
)
}