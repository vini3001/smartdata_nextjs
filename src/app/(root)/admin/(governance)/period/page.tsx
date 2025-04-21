import { ButtonBase, DefaultPage } from "@/app/components";
import { Container, CustomButton } from "./styles"
import PaginatedItems from "./components/PeriodPaginate";
import { useState } from "react";
import { Box, SvgIcon } from "@mui/material";
import CreatePeriod from "./components/ModalCreate";
import ToolsBand from "@/app/components/ToolsBand";
import ClientGovernancePeriod from "./components/ClientPeriod";


export default function GovernancePeriod() {
    return (
      <ClientGovernancePeriod />
    )
}