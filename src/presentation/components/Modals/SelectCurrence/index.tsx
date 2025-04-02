import { Search } from "@mui/icons-material";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
import { useTheme } from "styled-components";
import { TextField } from "../..";
import BaseModal from "../BaseModal";
import {
  ButtonOpenModal,
  FilterCurrenceTypeBox,
  FilterCurrenceTypeContainer,
  FilterCurrenceTypeImg,
  FilterCurrenceTypeText,
  SelectCurrenceContainer,
} from "./styles";
import Image from "next/image";

export default function SelectCurrence() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const theme = useTheme();
  const optionsPerPage = 5;

  const options = [
    "Todos",
    "Cripto",
    "Defi",
    "FB tokens",
    "Gamecoins",
    "NFTs",
    "Tokens",
    "Tokens de segurança",
    "Tokens de utilidade",
    "Tokens de valor",
  ];
  

  const handleArrowClick = () => {
    const nextPage = selectedOption + optionsPerPage;
    setSelectedOption(nextPage >= options.length ? 0 : nextPage);
  };

  return (
    <SelectCurrenceContainer>
      <BaseModal
        title=""
        opened={openModal}
        onClose={() => setOpenModal(false)}
        closeIcon={false}
      >
        <SelectCurrenceContainer>
          <TextField
            props={{
              id: "outlined-basic",
              placeholder: "Buscar",
              InputProps: {
                startAdornment: <Search />,
                endAdornment: <TuneIcon />,
              },
            }}
          />

          <FilterCurrenceTypeContainer>
            {options
              .slice(selectedOption, selectedOption + optionsPerPage)
              .map((option, index) => (
                <FilterCurrenceTypeBox
                  isSelected={index === 0}
                  key={index}
                  onClick={() => setSelectedOption(selectedOption + index)}
                >
                  <FilterCurrenceTypeText>{option}</FilterCurrenceTypeText>
                </FilterCurrenceTypeBox>
              ))}
            {options.length > optionsPerPage && (
              <FilterCurrenceTypeImg>
                <Image width={200} height={100}
                  src={theme.images.arrowRightIcon}
                  alt="arrow right icon"
                  onClick={handleArrowClick}
                />
              </FilterCurrenceTypeImg>
            )}
          </FilterCurrenceTypeContainer>
        </SelectCurrenceContainer>
      </BaseModal>
      <ButtonOpenModal
        variantbutton="secondary"
        onClick={() => setOpenModal(!openModal)}
      >
        Adicionar conta bancária
      </ButtonOpenModal>
    </SelectCurrenceContainer>
  );
}
