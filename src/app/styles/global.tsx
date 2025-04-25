'use client';

import { css, Global, useTheme } from '@emotion/react';

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Oxygen';
          font-weight: 300;
          scrollbar-width: thin;
          scrollbar-color: #e0e0e0 transparent;
        }

        body {
          font-size: 16px;
          background-color: ${theme.colors.background};
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
        }

        body::-webkit-scrollbar {
          width: 5px;
        }

        body::-webkit-scrollbar-track {
          background: transparent;
        }

        body::-webkit-scrollbar-thumb {
          background: transparent;
          transition: background 0.3s;
        }

        body:hover::-webkit-scrollbar-thumb,
        body:active::-webkit-scrollbar-thumb {
          background: red;
        }

        a, span {
          font-size: 14px;
        }

        h1 {
          font-size: 2.375rem;
          color: ${theme.colors.headline1};
        }

        h2 {
          font-size: 2rem;
          letter-spacing: 0.2%;
          color: ${theme.colors.headline1};
        }

        h3 {
          font-size: 24px;
          font-weight: 400;
          line-height: 30px;
          color: ${theme.colors.headline1};
        }

        h4 {
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.2%;
          color: ${theme.colors.headline1};
        }

        img {
          width: fit-content;
          height: auto;
        }

        .MuiModal-root {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #__next {
          height: 100%;
        }
      `}
    />
  );
};

export default GlobalStyles;
