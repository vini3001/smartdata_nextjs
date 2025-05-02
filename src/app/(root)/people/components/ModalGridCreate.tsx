import GridPerson from "@/app/components/DataGridCustom/GridPerson";
import { ContainerModal, ModalContentGrid } from "./styles";
import React from "react";
import { BaseModal } from "@/app/components";
import GridExceptions from "@/app/components/DataGridCustom/GridExceptions";
import GridCommunication from "@/app/components/DataGridCustom/GridCommunication";

interface ModalGridProps {
    isOpen: boolean
    meioPessoa: any
    handleSetMedia: (media: any) => void
    handleOpenModal: () => void
}

export default function ModalGridCreate({isOpen, meioPessoa, handleSetMedia, handleOpenModal}: ModalGridProps) {
    return (
        <BaseModal title="Comunicação" opened={isOpen} children={<ModalGridBody meioPessoa={meioPessoa} handleSetMedia={handleSetMedia} />} onClose={handleOpenModal} />
    )
}

function ModalGridBody({handleSetMedia, meioPessoa}: Pick<ModalGridProps, "handleSetMedia" | "meioPessoa">) {
    const [rows, setRows] = React.useState([])

    const liftMedia = (media: any) => {
        handleSetMedia(media)
      }

    return (
        <ContainerModal>
            <ModalContentGrid>
              <GridCommunication data={rows} setEditing={() => {}} meioPessoa={meioPessoa} liftMedia={liftMedia} />
              <GridExceptions data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
              <GridPerson data={rows} actionUpsert={() => {}} actionDelete={() => {}} />
            </ModalContentGrid>
        </ContainerModal>
    )
}