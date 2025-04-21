import { ButtonBase } from "@/app/components"
import { Box, Button, Paper } from "@mui/material"
import styled from "styled-components"

export const ContainerModalTemplate = styled(Box)`
  overflow-y: auto;
  width: 95vw;
  height: fit-content;
  padding-right: 0.5rem;
`

export const TemplateContainer = styled(Box)`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 10px;
  width: auto;

  .react-multi-carousel-item {
    display: flex;
    //align-items: center;
    //width: 100% !important;
    list-style: none;
  }

  .react-multi-carousel-track {
    list-style: none;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .react-multi-carousel-list {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative
  }

  .react-multi-carousel-dot-list {
    display: flex;
    flex-direction: row;
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
    height: 30rem;
    width: 20rem;
  }

  .MuiCardContent-root {
    display: flex;
    flex-direction: column;
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

export const TemplateLabel = styled.a`
  font-family: 'Oxygen';
  font-weight: 700;
  font-size: 14px;
  text-align: left;
  overflow-wrap: break-word;
`

export const TemplateSubLabel = styled.a`
  font-family: 'Oxygen';
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  overflow-wrap: break-word;
`

export const TemplateBox = styled(Box)`
 && {
  &.MuiBox-root {
    display: flex;
    align-items: start;
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
      padding: 10px
    }
  }
`

export const TemplateWrapper = styled(Paper)`
  && {
    &.MuiPaper-root {
      display: flex;
      background-color: unset;
      justify-content: center;
      width: 100%;
    }
  }
`

export const ContainerFields = styled(Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 45%;
  gap: 1rem;
`

export const LeftArrow = styled(Button)`
  && {
    &.MuiButtonBase-root {
      position: absolute;
      left: calc(4% + 1px);
      outline: 0;
      transition: all .5s;
      border-radius: 35px;
      z-index: 1000;
      border: 0;
      background: rgba(132,140,212,.5);
      min-width: 43px;
      min-height: 43px;
      opacity: 1;
      cursor: pointer
    }
  }
`

export const RightArrow = styled(Button)`
  && {
    &.MuiButtonBase-root {
      position: absolute;
      right: calc(4% + 1px);
      outline: 0;
      transition: all .5s;
      border-radius: 35px;
      z-index: 1000;
      border: 0;
      background: rgba(132,140,212,.5);
      min-width: 43px;
      min-height: 43px;
      opacity: 1;
      cursor: pointer
    }
  }
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