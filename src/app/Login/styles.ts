import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  //justify-content: center;
`;

export const ContainerAuth = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1.8fr 2fr;  
  background-color: #FAFAFA;
`;

export const FirstColumn = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #323650;

  .image-container {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;
  }

  img {
    height: 55vh;
    width: auto;
    margin-bottom: 2.063rem;
  }

  h1 {
    align-self: stretch;
    text-align: center;
  }

  span {
    text-align: center;
    color: ${(props) => props.theme.colors.text.info};
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  position: relative;
  justify-self: center;
  height: 100%;
`;

export const FooterColumn = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  bottom: 20px;
`