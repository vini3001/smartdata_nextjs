'use client'

import { Container } from "./styles"
import React from "react"
import GridGeneric from "@/app/components/DataGridCustom/GridGeneric";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";


export default function ClientAuxSource() {
    return (
        <Box>
          <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={undefined} />
          <AuxSourceBody />
        </Box>
        // <DefaultPage body={<AuxSourceBody />} path={"Origem"}
        //     selectedIcon={undefined} text={undefined} 
        //     sideComponent={undefined} CustomSelectedIcon={<SubdirectoryArrowRightOutlined />} />
    )
}

function AuxSourceBody() {
  const [rows, setRows] = React.useState([])
  
  return (
    <Container>
        <GridGeneric data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
    </Container>
  )
}