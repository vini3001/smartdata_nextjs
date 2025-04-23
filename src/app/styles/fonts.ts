import localFont from "next/font/local";

export const customFonts = localFont({
    src: [
      {
        path: '/fonts/Oxygen/Oxygen-Bold.ttf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '/fonts/Oxygen/Oxygen-Light.ttf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '/fonts/Oxygen/Oxygen-Regular.ttf',
        weight: '400',
        style: 'normal',
      }]})