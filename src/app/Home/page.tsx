'use client'

import {
  DefaultPage,
} from "@/presentation/components";
import PaginatedItems from "./components/HomePaginate";
import { useState } from "react";
import OrdinaryFilter, { viewProps } from "@/presentation/components/OrdinaryFilter";

export default function HomePage() {
  const [viewState, setViewState] = useState<viewProps>({view: 'grid'})

  function handleChangeViewState({view}: viewProps) {
    setViewState({view})
  }

  return (
    <DefaultPage body={<PaginatedItems itemsPerPage={6} layout={viewState.view} />}
    path={"Home"} selectedIcon={"Home"} 
    text="Boa noite, Felipe Santos"
    sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument", "visualization", "schedule"]} handleSwitchView={handleChangeViewState}/>} />
  );
}
