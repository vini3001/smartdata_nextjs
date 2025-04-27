import { Roboto } from 'next/font/google'

import { amber, blue, green, purple, red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
})

const spacing = 8

const atFooter = {
  position: 'fixed',
  bottom: spacing * 2,
  left: 0, // necessary for margin auto
  right: 0, // necessary for margin auto
  margin: 'auto',
  '& button.MuiButton-contained': { height: 45, flexGrow: 1 },
  '& button:first-child': { marginRight: 10 },
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      // main: '#4ecca3', logo claro
      main: '#4caf50',
    },
    secondary: {
      main: '#505762',
      // main: '#9c27b0',
    },
    error: {
      main: red.A400,
    },
    white: 'ffffff',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  shape: {
    borderRadius: 20,
  },

  overrides: {
    MuiInputBase: {
      root: {
        '@media (max-width: 600px)': {
          fontSize: 16,
        },
      },
    },
    MuiListItemText: {
      root: {
        flex: '1 1', // removes the 'auto' = fix items identation
      },
    },
  },
  props: {
    MuiTooltip: {
      placement: 'top',
      disableFocusListener: true,
      disableTouchListener: true,
    },
    // MuiSelected: { /// trying to customize selected row
    //   root: {
    //     backgroundColor: '#00A194',
    //   },
    // },
  },

  infiniteScroll: (space, padding) => ({
    paper: {
      maxHeight: `calc(100vh - ${theme.spacing(space)}px)`,
      overflow: 'overlay',
      ...(padding && { ...padding }),
    },

    atFooter: { ...atFooter },

    atFooterFlex: {
      ...atFooter,
      display: 'flex',
    },
  }),

  paperSearch: {
    paperSearch: {
      display: 'flex',
      marginBottom: spacing * 2,
    },
    input: {
      marginLeft: spacing,
      flex: 1,
    },
  },

  rightNumbers: {
    prices: {
      maxWidth: 130,
      textAlign: 'right',
    },
    numbers: {
      maxWidth: 90,
      textAlign: 'right', // for text
      justifyContent: 'flex-end', // for icons
    },
  },

  colors: {
    blocked: { backgroundColor: '#ff8a65' },

    success: '#28c101', // green
    green: green[500],
    canceled: red[500],
    draft: amber[500],

    returned: red[500],
    returnedBadge: red[500],
    gift: amber[700],
    giftBadge: amber[500],
    promo: { color: green[500] },

    overdue: red[500],
    paid: blue[700],
    deposit: purple[500],
  },
})

export default theme
