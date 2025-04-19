import { DefaultPage } from "@/presentation/components";
import { Container } from "./styles";
import React from "react";
import GridGeneric from "@/presentation/components/DataGridCustom/GridGeneric";
import { SubdirectoryArrowRightOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ToolsBand from "@/presentation/components/ToolsBand";


export default function AuxCommunication() {
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