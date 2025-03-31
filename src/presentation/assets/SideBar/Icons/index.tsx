
const Icons = {
  Home: "Home",
  Sales: "Sales",
  Finance: "Finance",
  Marketing: "Marketing",
  Dashboard: "Dashboard",
  PDF: "PDF",
  Excel: "Excel",
};

export interface IconProps {
    selectedIcon: string;
}

export default function SideBarIcon({selectedIcon}: IconProps) {
    const iconPath = `src/presentation/assets/SideBar/Icons/${Icons[selectedIcon  as keyof typeof Icons]}.svg`

    return (
        <img src={iconPath} />
    )
}