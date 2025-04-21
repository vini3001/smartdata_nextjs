'use client'

import { Container } from "./styles"
import React from "react";
import GridDepartments from "@/app/components/DataGridCustom/GridDepartments";
import { Box } from "@mui/material";
import ToolsBand from "@/app/components/ToolsBand";


export default function ClientAuxDepartment() {
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