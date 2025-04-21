import { ButtonBase, DefaultPage } from "@/app/components";
import { Container } from "./styles";
import PaginatedItems from "./components/GroupPeoplePaginate";
import { Box, SvgIcon } from "@mui/material";
import { useState } from "react";
import CreateGroup from "./components/ModalCreate";
import ToolsBand from "@/app/components/ToolsBand";
import ClientGroupPeople from "./components/ClientGroupPeople";


export default function GroupPeople() {
  return (
    <ClientGroupPeople />
    )
}