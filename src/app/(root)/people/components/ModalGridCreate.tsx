import GridPerson from "@/app/components/DataGridCustom/GridPerson";
import { ContainerModal, ModalContentGrid } from "./styles";
import React from "react";
import { BaseModal } from "@/app/components";
import GridExceptions from "@/app/components/DataGridCustom/GridExceptions";
import GridCommunication from "@/app/components/DataGridCustom/GridCommunication";

interface ModalGridProps {
    isOpen: boolean
    handleSetMedia: (media: any) => void
    handleOpenModal: () => void
}

export default function ModalGridCreate({isOpen, handleSetMedia, handleOpenModal}: ModalGridProps) {
    return (
        <BaseModal title="Comunicação" opened={isOpen} children={<ModalGridBody handleSetMedia={handleSetMedia} />} onClose={handleOpenModal} />
    )
}

function ModalGridBody({handleSetMedia}: Pick<ModalGridProps, "handleSetMedia">) {
    const [rows, setRows] = React.useState([])

    const liftMedia = (media: any) => {
        handleSetMedia(media)
      }

    return (
        <ContainerModal>
            <ModalContentGrid>
              <GridCommunication data={rows} actionUpsert={() => {}} actionDelete={() => {}} liftMedia={liftMedia} />
              <GridExceptions data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
              <GridPerson data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
            </ModalContentGrid>
        </ContainerModal>
    )
}