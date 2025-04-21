import { RoutesEnum } from "@/domain/models/Enums";
import SideBarIcon from "@/assets/SideBar/Icons";
import { Alarm, Article, Business, ConnectWithoutContact, Contacts, Groups, People, Storage, SubdirectoryArrowRightOutlined } from "@mui/icons-material";

export interface MenuProps {
    text: string;
    icon: React.ReactNode;
    route: string;
    dropdown?: boolean
    submenu?: {id: number, text: string, route: string}[]
}

const menus: MenuProps[] = [
    { text: "Home", icon: <SideBarIcon selectedIcon="Home"/>, route: RoutesEnum.HOME },
    { text: "Clientes", icon: <People />, route: RoutesEnum.CLIENTS },
    { text: "Pessoas", icon: <Contacts />, route: RoutesEnum.PEOPLE },
    { text: "Grupos de Pessoas", icon: <Groups />, route: RoutesEnum.GROUPPEOPLE },
    { text: "Informações", icon: <Article />, route: RoutesEnum.INFORMATION },
    { text: "Comunicação", icon: <ConnectWithoutContact />, route: RoutesEnum.COMMUNICATION},
    { text: "Disparos", icon: <Alarm />, route: RoutesEnum.FIRES},
    { text: "Empresas", icon: <Business />, route: RoutesEnum.ENTERPRISE},
    { text: "Campos Auxiliares", icon: <SubdirectoryArrowRightOutlined />, route: '', dropdown: true,
      submenu: [{id: 1, text: "Cargos", route: RoutesEnum.AUX_POSITION},
                {id: 2, text: "Departamentos", route: RoutesEnum.AUX_DEPARTMENT},
                {id: 3, text: "Formato Destino", route: RoutesEnum.AUX_FORMAT_DEST},
                {id: 4, text: "Grupos Informações", route: RoutesEnum.AUX_INFO_GROUP},
                {id: 5, text: "Meios de Comunicação", route: RoutesEnum.AUX_COMMUNICATION},
                {id: 6, text: "Origem", route: RoutesEnum.AUX_SOURCE},
                {id: 7, text: "Finalidade", route: RoutesEnum.AUX_PURPOSE},]
      },
    { text: "Vendas", icon: <SideBarIcon selectedIcon="Sales"/>, route: '', dropdown: true,
    submenu: [{id: 1, text: "Pedidos abertos", route: RoutesEnum.OPENORDERS}, {id: 2, text:"Pedidos faturados", route: RoutesEnum.BILLEDORDERS}]
    },
    { text: "Financeiro", icon: <SideBarIcon selectedIcon="Finance"/>, route: '', dropdown: true },
    { text: "Marketing", icon: <SideBarIcon selectedIcon="Marketing"/>, route: '', dropdown: true },
    { text: "Dashboard", icon: <SideBarIcon selectedIcon="Dashboard"/>, route: '' },
    { text: "PDF", icon: <SideBarIcon selectedIcon="PDF"/>, route: '' },
    { text: "Excel", icon: <SideBarIcon selectedIcon="Excel"/>, route: '' },
    { text: "Governança", icon: <Storage />, route: '', dropdown: true,
      submenu: [{id: 1, text: "Indicadores", route: RoutesEnum.GOV_INDICATORS},
                {id: 2, text: "Dimensões", route: RoutesEnum.GOV_DIMENSIONS},
                {id: 3, text: "Metas", route: RoutesEnum.GOV_GOALS},
                {id: 4, text: "Equipes", route: RoutesEnum.GOV_TEAMS},
                {id: 5, text: "Período", route: RoutesEnum.GOV_PERIODS}]
      },
  ];

export default menus