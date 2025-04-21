import GridPerson from "@/app/components/DataGridCustom/GridPerson";
import { ContainerModal, ModalContentGrid } from "./styles";
import React from "react";
import { BaseModal } from "@/app/components";
import GridExceptions from "@/app/components/DataGridCustom/GridExceptions";
import GridCommunication from "@/app/components/DataGridCustom/GridCommunication";

interface ModalGridProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function ModalGridCreate({isOpen, handleOpenModal}: ModalGridProps) {
    return (
        <BaseModal title="Comunicação" opened={isOpen} children={<ModalGridBody />} onClose={handleOpenModal} />
    )
}

function ModalGridBody() {
    const [rows, setRows] = React.useState([])

    return (
        <ContainerModal>
            <ModalContentGrid>
              <GridCommunication data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
              <GridExceptions data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
              <GridPerson data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
            </ModalContentGrid>
        </ContainerModal>
    )
}