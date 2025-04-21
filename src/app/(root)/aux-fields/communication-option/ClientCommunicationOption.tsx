'use client'

import { Container } from "./styles";
import React from "react";
import GridGeneric from "@/app/components/DataGridCustom/GridGeneric";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";


export default function ClientAuxCommunication() {
    return (
      <Box>
        <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={undefined} />
        <AuxCommunicationBody />
      </Box>
        // <DefaultPage body={<AuxCommunicationBody />} path={"Meios de Comunicação"}
        //     selectedIcon={undefined} text={undefined} 
        //     sideComponent={undefined} CustomSelectedIcon={<SubdirectoryArrowRightOutlined />} />
    )
}

function AuxCommunicationBody() {
  const [rows, setRows] = React.useState([])
  
  return (
    <Container>
        <GridGeneric data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
    </Container>
  )
}