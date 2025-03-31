import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CustomButton, CustomMenuList } from './styles';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Divider, Drawer} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '@/domain/models/Enums';
import ThemeModal from './ThemeModal';
import UserIcon from '../../PerfilIcon';

export default function UserDropDownFilter() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [isOpenModal, setIsOpenModal]  = React.useState<boolean>(false)

  const navigate =  useNavigate()
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen)

    return;
  };

  function handleNavigateSchedule() {
    navigate(RoutesEnum.USER_PROFILE);
  }

  function handleNavigateBin() {
    navigate(RoutesEnum.DUMP)
  }

  function handleNavigateHelp() {
    navigate(RoutesEnum.HELP)
  }

  function handleCloseThemeModal() {
    setIsOpenModal(false)
  }

  function handleOpenThemeModal() {
    setIsOpenModal(true)
  }

  return (
    <div>
      <CustomButton
        onClick={() => {toggleDrawer()}}
        onKeyDown={() => {toggleDrawer()}}
        endIcon={isOpen ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
      >
         <UserIcon style={{minWidth: '20px', minHeight: '20px'}} size={"small"} />
      </CustomButton>
      <Drawer
          anchor={'right'}
          open={isOpen}
          onClose={() => {toggleDrawer()}}
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              minWidth: '15.98rem',
              boxSizing: 'border-box',
            },
          }}
        >
          <CustomMenuList
            autoFocusItem={isOpen}
            id="composition-menu"
            aria-labelledby="composition-button"
          >
            <MenuItem>
              <UserIcon style={{minWidth: '35px', minHeight: '35px'}} size={"small"} />
              <div className='perfil-container'>
                <a>Cláudio</a>
                <span>On-line</span>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleOpenThemeModal} className='list-custom'><img src="src/presentation/assets/Home/Vector4.svg" />Temas</MenuItem>
            <MenuItem onClick={handleNavigateSchedule} className='list-custom'><img src="src/presentation/assets/Home/config.svg" />Configurações</MenuItem>
            <Divider />
            <MenuItem onClick={handleNavigateHelp} className='list-custom'><img src="src/presentation/assets/Home/Vector6.svg" />Smart Assistente</MenuItem>
            <Divider />
            <MenuItem onClick={handleNavigateBin} className='list-custom'><img src="src/presentation/assets/Home/botao_lixeira.svg" />Lixo</MenuItem>
            <MenuItem className='list-custom'><img src="src/presentation/assets/Home/botao_logout.svg" />Sair</MenuItem>
          </CustomMenuList>
        </Drawer>
        <ThemeModal isOpen={isOpenModal} handleChangeView={handleCloseThemeModal} />
    </div>
  );
}
