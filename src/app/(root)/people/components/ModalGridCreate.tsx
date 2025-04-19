import GridPerson from "@/presentation/components/DataGridCustom/GridPerson";
import { ContainerModal, ModalContentGrid } from "./styles";
import React from "react";
import { BaseModal } from "@/presentation/components";
import GridExceptions from "@/presentation/components/DataGridCustom/GridExceptions";
import GridCommunication from "@/presentation/components/DataGridCustom/GridCommunication";

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