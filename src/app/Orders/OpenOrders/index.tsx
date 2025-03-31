import {
  DefaultPage,
} from "@/presentation/components";
import PaginatedItems from "./components/HomePaginate";
import { useState } from "react";
import { viewProps } from "@/presentation/components/DefaultPage";
import OrdinaryFilter from "@/presentation/components/OrdinaryFilter";

export default function OpenOrders() {
  const [viewState, setViewState] = useState<viewProps>({view: 'grid'})

  function handleChangeViewState({view}: viewProps) {
    setViewState({view})
  }

  return (
    <DefaultPage body={<PaginatedItems itemsPerPage={6} layout={viewState.view} />}
    path={"Home / PDF's"} selectedIcon={"Home"} 
    text="Relatorio de vendas / financeiro"
    sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument", "visualization", "schedule"]} handleSwitchView={handleChangeViewState}/>} />
  );
}
