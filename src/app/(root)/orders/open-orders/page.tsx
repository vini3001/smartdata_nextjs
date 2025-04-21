import PaginatedItems from "./components/OpenOrdersPagination";
import { useState } from "react";
import { viewProps } from "@/app/components/DefaultPage";
import OrdinaryFilter from "@/app/components/OrdinaryFilter";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";
import ClientOpenOrders from "./components/ClientOpenOrders";

export default function OpenOrders() {
  const [viewState, setViewState] = useState<viewProps>({view: 'grid'})

  function handleChangeViewState({view}: viewProps) {
    setViewState({view})
  }

  return (
    <ClientOpenOrders />
  )
}
