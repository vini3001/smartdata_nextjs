'use client'

import { Container } from "./styles"
import React from "react"
import GridGeneric from "@/app/components/DataGridCustom/GridGeneric";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";


export default function ClientAuxPurpose() {
    return (
      <Box>
        <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={undefined} />
        <AuxPurposeBody />
      </Box>
        // <DefaultPage body={<AuxPurposeBody />} path={"Finalidade"}
        //     selectedIcon={undefined} text={undefined} 
        //     sideComponent={undefined} CustomSelectedIcon={<SubdirectoryArrowRightOutlined />} />
    )
}

function AuxPurposeBody() {
  const [rows, setRows] = React.useState([])
  
  return (
    <Container>
        <GridGeneric data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
    </Container>
  )
}