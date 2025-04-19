import { Button, Paper } from "@mui/material";
import styled from "styled-components";


export const ContainerModal = styled.div`
  width: 80vw;
  padding: 15px;

  .react-multi-carousel-item {
    display: flex;
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

export const ContentModal = styled.div`
  height: 400px;
`

export const PaperContainer = styled(Paper)`
  &.MuiPaper-root {
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }
  .image-container {
        border-radius: 8px;
        position: absolute;
        cursor: pointer;
        width: 100%;
        height: 100%;
        object-fit: cover;
   }
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