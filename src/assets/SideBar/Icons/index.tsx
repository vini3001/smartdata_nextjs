import Image from "next/image";

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
    const iconPath = `/assets/SideBar/Icons/${Icons[selectedIcon  as keyof typeof Icons]}.svg`

    return (
        <Image width={200} height={100} src={iconPath} alt={""} />
    )
}