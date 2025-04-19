import { DefaultPage } from "@/presentation/components";
import { Container } from "./styles"
import React from "react"
import GridGeneric from "@/presentation/components/DataGridCustom/GridGeneric";
import { SubdirectoryArrowRightOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ToolsBand from "@/presentation/components/ToolsBand";


export default function AuxSource() {
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