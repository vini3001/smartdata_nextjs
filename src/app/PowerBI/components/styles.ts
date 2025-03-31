import { Paper } from "@mui/material";
import styled from "styled-components";


export const ContainerModal = styled.div`
  width: 80vw;
  padding: 15px;
`

export const ContentModal = styled.div`
  height: 400px;
`

export const PaperContainer = styled(Paper)`
  &.MuiPaper-root {
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }
  .image-container {
        border-radius: 8px;
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
   }
`