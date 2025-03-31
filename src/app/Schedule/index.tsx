import { DefaultPage } from "@/presentation/components";
import PaginatedItems from "./components/SchedulePaginate";
import OrdinaryFilter from "@/presentation/components/OrdinaryFilter";


export default function Schedule() {

    return (
        <DefaultPage body={<PaginatedItems itemsPerPage={6} />}
        path={"Home / Visualizar agenda"} selectedIcon={"Home"}
        text="Visualizar todos agendamentos"
        sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument"]} handleSwitchView={()=>{}} />}  />
          );
}