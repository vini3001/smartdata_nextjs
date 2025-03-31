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
            <img src={theme.images.keysIcon} alt="keys icon" />
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
        variantButton="secondary"
        onClick={() => setOpenModal(!openModal)}
      >
        Adicionar conta bancária
      </ButtonOpenModal>
    </TwoFactorAuthanticationContainer>
  );
}
