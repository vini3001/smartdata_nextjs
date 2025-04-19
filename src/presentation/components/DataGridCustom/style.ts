import { GridToolbarContainer } from "@mui/x-data-grid";
import styled from "styled-components";


export const CustomToolbar = styled(GridToolbarContainer)`
   align-items: center;
   justify-content: space-between;

   && {
    &.MuiDataGrid-toolbarContainer {
       padding: 10px;
       background-color: white;
       border-bottom: 1px solid #e0e0e0;
    }
   }
`