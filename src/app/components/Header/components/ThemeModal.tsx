import { ClickAwayListener, Grow, Paper } from "@mui/material";
import React from "react";
import { ColorPicker, ModalContainer, ModalContent } from "./styles";
import SwitchTheme from "./SwtichTheme";
import ColorOptionChecked from "@/assets/Profile/theme-colors/ColorChecked";
import ColorOptionUnchecked from "@/assets/Profile/theme-colors/ColorUnchecked";

interface ThemeModalProps {
   isOpen: boolean
   handleChangeView: () => void 
}

export default function ThemeModal({isOpen, handleChangeView}: ThemeModalProps) {
    const [selected, setSelected] = React.useState<string | null>('Option1');
    const anchorRef = React.useRef<HTMLButtonElement | null>(null);

    const handleClose = (event: any) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        handleChangeView();
    };

    const prevOpen = React.useRef(isOpen);
    React.useEffect(() => {
        if (anchorRef.current && prevOpen.current === true && isOpen === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = isOpen;
    }, [isOpen]);

    return  (
        <ModalContainer
          style={{right: '17rem', left: 'unset'}}
          sx={{ width: {md: '27rem'}, zIndex: 1500}}
          open={isOpen}
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
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <ModalContent>
                    <h4>Temas</h4>
                    <span>Altere a aparência e a cor do tema para personalizar seu espaço de trabalho.</span>
                    <SwitchTheme />
                    <span style={{marginBottom: '0.5rem'}}>Temas Smartdata</span>
                    <div>
                      <ColorPicker id="Option1" checked={selected === 'Option1'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#828DD4"} />} icon={<ColorOptionUnchecked color={"#828DD4"}  />}/>
                      <ColorPicker id="Option2" checked={selected === 'Option2'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#2993DA"} />} icon={<ColorOptionUnchecked color={"#2993DA"}  />}/>
                      <ColorPicker id="Option3" checked={selected === 'Option3'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#EA6399"} />} icon={<ColorOptionUnchecked color={"#EA6399"}  />}/>
                      <ColorPicker id="Option4" checked={selected === 'Option4'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#B469DA"} />} icon={<ColorOptionUnchecked color={"#B469DA"}  />}/>
                      <ColorPicker id="Option5" checked={selected === 'Option5'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#6D8CF9"} />} icon={<ColorOptionUnchecked color={"#6D8CF9"}  />}/>
                      <ColorPicker id="Option6" checked={selected === 'Option6'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#F86116"} />} icon={<ColorOptionUnchecked color={"#F86116"}  />}/>
                      <ColorPicker id="Option7" checked={selected === 'Option7'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#299D9D"} />} icon={<ColorOptionUnchecked color={"#299D9D"}  />}/>
                      <ColorPicker id="Option8" checked={selected === 'Option8'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#595D66"} />} icon={<ColorOptionUnchecked color={"#595D66"}  />}/>
                      <ColorPicker id="Option9" checked={selected === 'Option9'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#55CDA0"} />} icon={<ColorOptionUnchecked color={"#55CDA0"}  />}/>
                    </div>
                  </ModalContent>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </ModalContainer>
    )
}