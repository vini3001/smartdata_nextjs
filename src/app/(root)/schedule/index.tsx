import { DefaultPage } from "@/app/components";
import PaginatedItems from "./components/SchedulePaginate";
import OrdinaryFilter from "@/app/components/OrdinaryFilter";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";


export default function Schedule() {

    return (
        <Box>
          <ToolsBand text={"Visualizar todos agendamentos"} sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument"]} handleSwitchView={()=>{}} />} />
          <PaginatedItems itemsPerPage={6} />
        </Box>
        // <DefaultPage body={<PaginatedItems itemsPerPage={6} />}
        // path={"Home / Visualizar agenda"} selectedIcon={"Home"}
        // text="Visualizar todos agendamentos"
        // sideComponent={<OrdinaryFilter filtersEnabled={["filterNumber", "filterDocument"]} handleSwitchView={()=>{}} />}  />
          );
}