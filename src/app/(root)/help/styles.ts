import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const HelpBox = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
        font-weight: 500;
        font-size: 20px;
    }

    p {
        font-size: 14px;
    }
`

export const IconImg = styled.img`
   height: 16px;
   width: 16px;
   margin-inline: 0.5rem;
`