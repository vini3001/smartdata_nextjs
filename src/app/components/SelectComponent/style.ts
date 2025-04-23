import styled from "@emotion/styled";

export const SelectContainer = styled.div`
  .container-label {
    margin-bottom: 1rem;
  }

  && {
    .MuiFormControl-root {
      width: 100%;
    }

    .MuiOutlinedInput-root {
      width: 100%;
      height: 3rem;
      border-radius: 0.5rem;
      background-color: ${(props) => props.theme.colors.select.background};
      border-color: transparent;
    }

    .MuiOutlinedInput-root:hover {
      background-color: ${(props) =>
        props.theme.colors.select.hover.background};
      border: none;
      border-color: transparent;
    }

    .MuiOutlinedInput-notchedOutline {
      border: none;
    }

    .MuiInputBase-input {
      color: ${(props) => props.theme.colors.select.text.primary};
      font-size: 1rem;
      font-family: Oxygen;
      font-weight: 600;
      word-wrap: break-word;
    }

    .MuiSvgIcon-root {
      color: ${(props) => props.theme.colors.select.button};
    }
  }
`;

export const Label = styled.span`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.subtitles};
  font-weight: 600;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 1.4px;
`;
