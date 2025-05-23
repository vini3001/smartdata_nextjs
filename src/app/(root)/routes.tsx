import { RoutesEnum } from "@/domain/models/Enums";
import SideBarIcon from "@/assets/SideBar/Icons";
import { Alarm, Article, Business, ConnectWithoutContact, Contacts, Groups, People, Storage, SubdirectoryArrowRightOutlined } from "@mui/icons-material";

export interface MenuProps {
    text: string;
    icon: React.ReactNode;
    route: string;
    dropdown?: boolean
    submenu?: {id: number, text: string, icon: React.ReactNode, route: string,
               filters?: {id: number, name: string, isDropdown: boolean, submenu: string[]}[]}[]
}

const menus: MenuProps[] = [
    { text: "Home", icon: <SideBarIcon selectedIcon="Home"/>, route: RoutesEnum.HOME},
    { text: "Clientes", icon: <People />, route: RoutesEnum.CLIENTS },
    { text: "Pessoas", icon: <Contacts />, route: RoutesEnum.PEOPLE },
    { text: "Grupos de Pessoas", icon: <Groups />, route: RoutesEnum.GROUPPEOPLE },
    { text: "Informações", icon: <Article />, route: RoutesEnum.INFORMATION },
    { text: "Comunicação", icon: <ConnectWithoutContact />, route: RoutesEnum.COMMUNICATION },
    { text: "Disparos", icon: <Alarm />, route: RoutesEnum.FIRES },
    { text: "Empresas", icon: <Business />, route: RoutesEnum.ENTERPRISE },
    { text: "Campos Auxiliares", icon: <SubdirectoryArrowRightOutlined />, route: '/aux-fields/', dropdown: true,
      submenu: [{id: 1, text: "Cargos", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_POSITION},
                {id: 2, text: "Departamentos", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_DEPARTMENT},
                {id: 3, text: "Formato Destino", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_FORMAT_DEST},
                {id: 4, text: "Grupos Informações", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_INFO_GROUP},
                {id: 5, text: "Meios de Comunicação", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_COMMUNICATION},
                {id: 6, text: "Origem", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_SOURCE},
                {id: 7, text: "Finalidade", icon: <SubdirectoryArrowRightOutlined />, route: RoutesEnum.AUX_PURPOSE},]
      },
    { text: "Vendas", icon: <SideBarIcon selectedIcon="Sales"/>, route: '/orders/', dropdown: true,
    submenu: [{id: 1, text: "Pedidos abertos", icon: <SideBarIcon selectedIcon="Sales"/>, route: RoutesEnum.OPENORDERS}, 
      {id: 2, text:"Pedidos faturados", icon: <SideBarIcon selectedIcon="Sales"/>, route: RoutesEnum.BILLEDORDERS}]
    },
    { text: "Financeiro", icon: <SideBarIcon selectedIcon="Finance"/>, route: '/finance/', dropdown: true },
    { text: "Marketing", icon: <SideBarIcon selectedIcon="Marketing"/>, route: '/marketing/', dropdown: true },
    { text: "Dashboard", icon: <SideBarIcon selectedIcon="Dashboard"/>, route: '/dashboard/' },
    { text: "PDF", icon: <SideBarIcon selectedIcon="PDF"/>, route: '/pdf/' },
    { text: "Excel", icon: <SideBarIcon selectedIcon="Excel"/>, route: '/excel/' },
    { text: "Governança", icon: <Storage />, route: '/admin/', dropdown: true,
      submenu: [{id: 1, text: "Indicadores", icon: <Storage />, route: RoutesEnum.GOV_INDICATORS },
                {id: 2, text: "Dimensões", icon: <Storage />, route: RoutesEnum.GOV_DIMENSIONS },
                {id: 3, text: "Metas", icon: <Storage />, route: RoutesEnum.GOV_GOALS },
                {id: 4, text: "Equipes", icon: <Storage />, route: RoutesEnum.GOV_TEAMS },
                {id: 5, text: "Período", icon: <Storage />, route: RoutesEnum.GOV_PERIODS }]
      },
  ];

export default menus