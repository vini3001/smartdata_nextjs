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
              <img
                src={
                  "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Bitcoin-BTC-icon.png"
                }
                alt="bitcoin"
              />
            </ReviewYourConvertionCurrenceImg>
            <ReviewYourConvertionArrowRight>
              <img src={theme.images.arrowRightIcon} alt="arrow right" />
            </ReviewYourConvertionArrowRight>
            <ReviewYourConvertionCurrenceImg>
              <img
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
            <ButtonConvert variantButton="secondary" onClick={() => {}}>
              Cancelar
            </ButtonConvert>
            <ButtonConvert variantButton="primary" onClick={() => {}}>
              Confirmar
            </ButtonConvert>
          </TwoFactorAuthanticationButtonsRow>
        </ReviewYourConvetionContainer>
      </BaseModal>
      <ButtonOpenModal
        variantButton="secondary"
        onClick={() => setOpenModal(!openModal)}
      >
        Adicionar conta bancária
      </ButtonOpenModal>
    </ReviewYourConvetionContainer>
  );
}
