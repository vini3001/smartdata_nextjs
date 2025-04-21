import { ButtonBase } from "@/app/components";
import PaginatedItems from "./components/ClientsPaginate";
import { Box, SvgIcon } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CreateGroup from "./components/ModalCreate";
import DefaultPage from "@/app/components/DefaultPage";
import { People } from "@mui/icons-material";
import { Container } from "./styles";
import ToolsBand from "@/app/components/ToolsBand";
import ClientsPage from "./components/ClientsClientPage";


export default function Clients() {
  
    return (
      <ClientsPage />
    )
}