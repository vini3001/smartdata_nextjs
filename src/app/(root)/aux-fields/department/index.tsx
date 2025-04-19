import { DefaultPage } from "@/presentation/components";
import { Container } from "./styles"
import React from "react";
import GridDepartments from "@/presentation/components/DataGridCustom/GridDepartments";
import { SubdirectoryArrowRightOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import ToolsBand from "@/presentation/components/ToolsBand";


export default function AuxDepartment() {
    return (
      <Box>
        <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={undefined} />
        <AuxDepartmentBody />
      </Box>
        // <DefaultPage body={<AuxDepartmentBody />} path={"Departamentos"}
        //     selectedIcon={undefined} text={undefined} 
        //     sideComponent={undefined} CustomSelectedIcon={<SubdirectoryArrowRightOutlined />} />
    )
}

function AuxDepartmentBody() {
  const [rows, setRows] = React.useState([])
  
  return (
    <Container>
        <GridDepartments data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
    </Container>
  )
}