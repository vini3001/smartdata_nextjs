import { ButtonBase } from "@/app/components";
import styled from "@emotion/styled"


export const Container = styled.div`
  width: 100%;
`
export const CustomButton = styled(ButtonBase)`
  span {
    position: relative;
    top: 1px;
    font-size: 15px;
  }
`