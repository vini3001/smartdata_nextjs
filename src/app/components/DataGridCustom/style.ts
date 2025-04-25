//import { GridToolbar } from "@mui/x-data-grid/internals"
import styled from "@emotion/styled"
import { Toolbar } from "@mui/x-data-grid"


export const CustomToolbar = styled(Toolbar)`
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