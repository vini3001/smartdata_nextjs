import { useState } from "react";
import { useTheme } from "styled-components";
import { LoadingComponent } from "../..";
import BaseModal from "../BaseModal";
import WithdrawInformation from "./WithdrawInformation";
import {
  ButtonOpenModal,
  ButtonOption,
  ReviewYourWithdrawArrowRight,
  ReviewYourWithdrawButtonsRow,
  ReviewYourWithdrawContainer,
  ReviewYourWithdrawCurrenceImg,
  ReviewYourWithdrawImgRow,
  ReviewYourWithdrawTitle,
} from "./styles";
import Image from "next/image";

interface ReviewYourWithdrawProps {
  modalTitle: string;
  currenceIcon: string;
  quantity: number;
  aproximateValueInReal: number;
  tax: number;
  total: number;
  wallet: string;
  walletAddress: string;
  destinationTag: string;
  rede: string;
  endAdornmentQuantity: string;
  endAdornmentAproximateValueInReal: string;
  endAdornmentTax: string;
  endAdornmentTotal: string;
  onClickConfirm: () => void;
  onClickCancel: () => void;
  isLoading?: boolean;
}

export default function ReviewYourWithdraw(props: ReviewYourWithdrawProps) {
  const {
    modalTitle,
    currenceIcon,
    quantity,
    aproximateValueInReal,
    tax,
    total,
    wallet,
    walletAddress,
    destinationTag,
    rede,
    endAdornmentAproximateValueInReal,
    endAdornmentQuantity,
    endAdornmentTax,
    endAdornmentTotal,
    onClickCancel,
    onClickConfirm,
    isLoading,
  } = props;
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  const loadInformation = () => {
    if (isLoading === true) {
      return <LoadingComponent />;
    } else {
      return (
        <ReviewYourWithdrawContainer>
          <ReviewYourWithdrawImgRow>
            <ReviewYourWithdrawCurrenceImg>
              <Image width={200} height={100} src={currenceIcon} alt="currence icon" />
            </ReviewYourWithdrawCurrenceImg>
            <ReviewYourWithdrawArrowRight>
              <Image width={200} height={100} src={theme.images.withdrawIcon} alt="arrow right" />
            </ReviewYourWithdrawArrowRight>
          </ReviewYourWithdrawImgRow>
          <ReviewYourWithdrawTitle>{modalTitle}</ReviewYourWithdrawTitle>
          <WithdrawInformation
            quantity={quantity}
            aproximateValueInReal={aproximateValueInReal}
            tax={tax}
            total={total}
            endAdornmentQuantity={endAdornmentQuantity}
            endAdornmentAproximateValueInReal={
              endAdornmentAproximateValueInReal
            }
            endAdornmentTax={endAdornmentTax}
            endAdornmentTotal={endAdornmentTotal}
            wallet={wallet}
            walletAddress={walletAddress}
            destinationTag={destinationTag}
            rede={rede}
          />
          <ReviewYourWithdrawButtonsRow>
            <ButtonOption
              variantbutton="secondary"
              onClick={() => onClickCancel()}
            >
              Cancelar
            </ButtonOption>
            <ButtonOption
              variantbutton="primary"
              onClick={() => onClickConfirm()}
            >
              Sacar
            </ButtonOption>
          </ReviewYourWithdrawButtonsRow>
        </ReviewYourWithdrawContainer>
      );
    }
  };

  return (
    <ReviewYourWithdrawContainer>
      <BaseModal
        title=""
        opened={openModal}
        onClose={() => setOpenModal(false)}
        closeIcon
      >
        {loadInformation()}
      </BaseModal>
      <ButtonOpenModal
        variantbutton="secondary"
        onClick={() => setOpenModal(!openModal)}
      >
        Adicionar conta bancária
      </ButtonOpenModal>
    </ReviewYourWithdrawContainer>
  );
}

ReviewYourWithdraw.defaultProps = {
  isLoading: false,
};
