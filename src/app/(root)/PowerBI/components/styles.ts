import { Button, Paper } from "@mui/material";
import styled from "styled-components";


export const ContainerModal = styled.div`
  width: 80vw;
  padding: 15px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    padding: 20px;
    background-color: rgba(132,140,212,.7);
    border-radius: 99px;
  }

  .swiper-button-next:after {
     position: absolute;
     right: 13px;
     color: white;
  }

  .swiper-button-prev:after {
     position: absolute;
     left: 13px;
     color: white;
  }
`

export const ContentModal = styled.div`
  height: 400px;
`

export const PaperContainer = styled(Paper)`
  &.MuiPaper-root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    border-radius: 8px;
    overflow: hidden;
  }
  .image-container {
        border-radius: 8px;
        position: absolute;
        cursor: pointer;
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