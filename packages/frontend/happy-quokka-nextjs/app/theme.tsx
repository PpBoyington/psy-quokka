import { createTheme } from '@mui/material'
import { Inter } from 'next/font/google'
import { lime, purple } from '@mui/material/colors'

const inter = Inter({
  subsets: ['latin'],
})

export const theme = createTheme({
  palette: {
    primary: {
      main: '#96BC9F',
    },
    secondary: {
      main: '#FCDFAE',
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
})
