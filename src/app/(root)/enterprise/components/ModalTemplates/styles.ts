import { ButtonBase } from "@/app/components"
import { Box, Button, Paper } from "@mui/material"
import styled from "@emotion/styled"

export const ContainerModalTemplate = styled(Box)`
  overflow-y: auto;
  width: 95vw;
  height: fit-content;
  padding-right: 1rem;
`

export const TemplateContainer = styled(Box)`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 10px;
  width: auto;
  gap: 0.5rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    width: auto;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    padding: 20px;
    background-color: rgba(132,140,212,.7);
    border-radius: 99px;
  }

  .swiper-button-next:after {
     position: absolute;
     right: 12px;
     color: white;
  }

  .swiper-button-prev:after {
     position: absolute;
     left: 12px;
     color: white;
  }
`

export const TemplateOptionContainer = styled(ButtonBase)`
 && {
  &.MuiButton-root {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-radius: 10px;
    padding: 1.2rem;
    min-height: 30rem;
    width: 20rem;
  }

  .MuiCardContent-root {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    gap: 1rem;
  }
 }

 .image-container {
  width: 100%;
  border-radius: 10px;
  max-height: 8rem;
 }
`

export const TemplateLabel = styled.p`
  font-family: 'Oxygen';
  font-weight: 700;
  width: 100%;
  font-size: 14px;
  text-align: left;
  text-wrap: wrap;
  white-space: normal;
  overflow-wrap: break-word;
`

export const TemplateSubLabel = styled.a`
  font-family: 'Oxygen';
  font-weight: 400;
  width: 100%;
  font-size: 12px;
  text-align: left;
  overflow-wrap: break-word;
`

export const TemplateBox = styled(Box)`
 && {
  &.MuiBox-root {
    display: flex;
    align-items: start;
    max-width: 100%;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
  }
 }
`

export const TemplatePaper = styled(Paper)`
  && {
    &.MuiPaper-root {
      display: flex;
      overflow: auto;
      align-items: start;
      width: 50rem;
      height: 100%;
      justify-content: center;
      background-color: transparent;
    }
  }
`

export const TemplateWrapper = styled(Paper)`
  && {
    &.MuiPaper-root {
      display: flex;
      flex-direction: column;
      background-color: unset;
      justify-content: center;
      align-items: center;
      width: 25rem;
      gap: 0.2rem;
    }

    .MuiTypography-root {
      font-family: unset;
    }
  }
`

export const TemplateCheckboxContainer = styled(Box)`
  display: flex;
  width: fit-content;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
`

export const ContainerFields = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 45%;
  gap: 1rem;
`

export const FormButtonTemplate = styled(Button)`
  && {
    &.MuiButtonBase-root { 
      position: relative;
      align-self: end;
      bottom: -30px;
      font-size: 14px;
      font-weight: 400;
      text-wrap: nowrap;
      padding-inline: 12px;
      width: 10rem;
      border-radius: 10px;
      text-transform: none;
    }
   }
`