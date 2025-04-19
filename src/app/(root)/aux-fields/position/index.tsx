import { DefaultPage } from "@/presentation/components";
import { Container } from "./styles"
import React from "react"
import GridGeneric from "@/presentation/components/DataGridCustom/GridGeneric";
import { SubdirectoryArrowRightOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ToolsBand from "@/presentation/components/ToolsBand";


export default function AuxPosition() {
    return (
      <Box>
        <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={undefined} />
        <AuxPositionBody />
      </Box>
        // <DefaultPage body={<AuxPositionBody />} path={"Cargos"}
        //     selectedIcon={undefined} text={undefined} 
        //     sideComponent={undefined} CustomSelectedIcon={<SubdirectoryArrowRightOutlined />} />
    )
}

function AuxPositionBody() {
  const [rows, setRows] = React.useState([])
  
  return (
    <Container>
        <GridGeneric data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
    </Container>
  )
}