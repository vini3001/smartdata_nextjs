'use client'

import PaginatedItems from "./HomePaginate";
import { useState } from "react";
import OrdinaryFilter, { viewProps } from "@/app/components/OrdinaryFilter";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";
import { styled } from "../../../../../stitches.config";

export default function ClientHomePage() {
  const [viewState, setViewState] = useState<viewProps>({view: 'grid'})

  function handleChangeViewState({view}: viewProps) {
    setViewState({view})
  }

  return (
    <Box>
      <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument", "visualization", "schedule"]} handleSwitchView={handleChangeViewState} />} />
      <PaginatedItems itemsPerPage={6} layout={viewState.view} />
    </Box>
    // <DefaultPage body={<PaginatedItems itemsPerPage={6} layout={viewState.view} />}
    // path={"Home"} selectedIcon={"Home"} 
    // text="Boa noite, Felipe Santos"
    // sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument", "visualization", "schedule"]} handleSwitchView={handleChangeViewState}/>} />
  );
}
