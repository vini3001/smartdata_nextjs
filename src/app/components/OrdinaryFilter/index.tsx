'use client'

import { FilterContent } from "./styles";
import DropdownBase from "../DropdownBase/DropdownCustom";
import { CustomIcon, CustomIconLeft, CustomIconRight } from "./styles";
import { RoutesEnum } from "@/domain/models/Enums";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface DefaultPageProps {
  filtersEnabled: ("filterNumber" | "filterDocument" | "visualization" | "schedule" | "dumpButton" | "searchHelp")[];
  handleSwitchView: (view: viewProps) => void;
}

export interface viewProps {
    view: 'grid' | 'list'
  }

export default function OrdinaryFilter({filtersEnabled, handleSwitchView}: DefaultPageProps) {
    const submenu = ['todos', 'dashboard', 'excel', 'pdf']
    const numberViews = Array.from({ length: 10 }, (_, i) => (i+1).toString());

    const router = useRouter();

    function handleNavigateSchedule() {
        router.push(RoutesEnum.SCHEDULE);
    }

    return (
        <FilterContent className="filter-options">
            <span hidden={!filtersEnabled.includes("filterNumber")}>visualizar últimos</span>
            <DropdownBase isNumber={true} submenu={numberViews} hidden={!filtersEnabled.includes("filterNumber")} handleSetValue={()=>{}} />
            <DropdownBase isNumber={false} submenu={submenu} hidden={!filtersEnabled.includes("filterDocument")} handleSetValue={()=>{}} />
            <div className="filter-vectors" hidden={!filtersEnabled.includes("visualization")}>
                <CustomIconLeft onClick={() => {handleSwitchView({view: 'list'})}}><Image width={200} height={100} src="assets/Home/Vector1.svg" alt={""} /></CustomIconLeft>
                <CustomIconRight onClick={() => {handleSwitchView({view: 'grid'})}}><Image width={200} height={100} src="assets/Home/Vector2.svg" alt={""} /></CustomIconRight>
            </div>
            <div className="icon-container" hidden={!filtersEnabled.includes("schedule")} >
            <CustomIcon onClick={handleNavigateSchedule}>
                <a>visualizar agenda</a>
                <div className="icon-separator">
                <Image width={200} height={100} src="assets/Home/Vector3.svg" alt={""} />
                </div>
            </CustomIcon>
            </div>
        </FilterContent>
    )
}