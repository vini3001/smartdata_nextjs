import { useState } from "react";
import { useTheme } from "styled-components";
import BaseModal from "../BaseModal";
import ConversionInformation from "./ConversionInformation";
import {
  ButtonConvert,
  ButtonOpenModal,
  ReviewYourConvertionArrowRight,
  ReviewYourConvertionCurrenceImg,
  ReviewYourConvertionTitle,
  ReviewYourConvetionContainer,
  ReviewYourConvetionImgRow,
  TwoFactorAuthanticationButtonsRow,
} from "./styles";
import Image from "next/image";

export default function ReviewYourConvertion() {
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  return (
    <ReviewYourConvetionContainer>
      <BaseModal
        title=""
        opened={openModal}
        onClose={() => setOpenModal(false)}
        closeIcon
      >
        <ReviewYourConvetionContainer>
          <ReviewYourConvetionImgRow>
            <ReviewYourConvertionCurrenceImg>
              <Image width={200} height={100}
                src={
                  "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Bitcoin-BTC-icon.png"
                }
                alt="bitcoin"
              />
            </ReviewYourConvertionCurrenceImg>
            <ReviewYourConvertionArrowRight>
              <Image width={200} height={100} src={theme.images.arrowRightIcon} alt="arrow right" />
            </ReviewYourConvertionArrowRight>
            <ReviewYourConvertionCurrenceImg>
              <Image width={200} height={100}
                src={"https://cdn-icons-png.flaticon.com/512/6001/6001368.png"}
                alt="ethereum"
              />
            </ReviewYourConvertionCurrenceImg>
          </ReviewYourConvetionImgRow>
          <ReviewYourConvertionTitle>
            Revise sua conversão
          </ReviewYourConvertionTitle>
          <ConversionInformation
            quantity={1}
            convertedQuantity={16.14}
            aproximateValueInReal={132455.44}
            tax={0.0001557}
            total={16.13}
            endAdornmentQuantity="BTC"
            endAdornmentConvertedQuantity="ETH"
            endAdornmentAproximateValueInReal="BRL"
            endAdornmentTax="BTC"
            endAdornmentTotal="ETH"
          />
          <TwoFactorAuthanticationButtonsRow>
            <ButtonConvert variantbutton="secondary" onClick={() => {}}>
              Cancelar
            </ButtonConvert>
            <ButtonConvert variantbutton="primary" onClick={() => {}}>
              Confirmar
            </ButtonConvert>
          </TwoFactorAuthanticationButtonsRow>
        </ReviewYourConvetionContainer>
      </BaseModal>
      <ButtonOpenModal
        variantbutton="secondary"
        onClick={() => setOpenModal(!openModal)}
      >
        Adicionar conta bancária
      </ButtonOpenModal>
    </ReviewYourConvetionContainer>
  );
}
