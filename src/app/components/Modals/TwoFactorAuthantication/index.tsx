import { useState } from "react";
import { useTheme } from "styled-components";
import BaseModal from "../BaseModal";
import TwoFactorAuthForm from "./TwoFactorAuthForm";
import {
  ButtonOpenModal,
  TwoFactorAuthanticationContainer,
  TwoFactorAuthanticationContent,
  TwoFactorAuthanticationContentImg,
  TwoFactorAuthanticationContentSub,
  TwoFactorAuthanticationContentTitle,
} from "./styles";
import Image from "next/image";

export default function TwoFactorAuthantication() {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  return (
    <TwoFactorAuthanticationContainer>
      <BaseModal
        title=""
        opened={openModal}
        onClose={() => setOpenModal(false)}
        closeIcon
      >
        <TwoFactorAuthanticationContent>
          <TwoFactorAuthanticationContentImg>
            <Image width={200} height={100} src={theme.images.keysIcon} alt="keys icon" />
          </TwoFactorAuthanticationContentImg>
          <TwoFactorAuthanticationContentTitle>
            Autenticação de dois fatores
          </TwoFactorAuthanticationContentTitle>
          <TwoFactorAuthanticationContentSub>
            Informe o código de seu aplicativo autenticador para continuar.
          </TwoFactorAuthanticationContentSub>
          <TwoFactorAuthForm />
        </TwoFactorAuthanticationContent>
      </BaseModal>
      <ButtonOpenModal
        variantbutton="secondary"
        onClick={() => setOpenModal(!openModal)}
      >
        Adicionar conta bancária
      </ButtonOpenModal>
    </TwoFactorAuthanticationContainer>
  );
}
