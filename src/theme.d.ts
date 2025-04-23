import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    title: string;
    colors: {
      background: string;
      content: string;
      boxContent: string;
      subtitles: string;
      headline1: string;
      selectCoin: string;
      boxScreenConververt: {
        background: string;
        boxShadow: string;
        buttonSelectCoin: {
          background: string;
          boxShadow: string;
        };
      };
      icon: {
        color: string;
        background: string;
        colorSecondary: string;
      };
      errors: {
        messageErrorField: string;
        backgroundErrorField: string;
      };
      appBar: {
        background: string;
      };
      textField: {
        background: string;
        placeHolder: string;
        iconColor: string;
      };
      button: {
        primary: {
          background: string;
          text: string;
        };
        secondary: {
          background: string;
          text: string;
        };
      };
      text: {
        primary: string;
        info: string;
      };
      neutral: {
        black: string;
      };
      hover: {
        primary: {
          background: string;
        };
      };
      currencePercentage: {
        background: string;
        text: string;
        hover: {
          background: string;
        };
      };
      tabs: {
        background: string;
        backgroundSelected: string;
        text: string;
        hover: {
          background: string;
        };
      };
      currenceCardComponent: {
        background: string;
        text: string;
        hover: {
          background: string;
        };
      };
      accordion: {
        background: string;
        backgroundIcon: string;
        borderColor: string;
        text: string;
      };
      select: {
        background: string;
        button: string;
        text: {
          primary: string;
        };
        hover: {
          background: string;
        };
      };
      destributionCurrence: {
        hover: {
          background: string;
        };
      };
      checkedIcon: {
        background: string;
      };
      reviewYourWithdraw: {
        background: string;
      };
    };
  }
}
