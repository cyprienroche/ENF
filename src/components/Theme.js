import { createTheme } from '@mui/material/styles'
import { amber, teal, pink, purple } from '@mui/material/colors'
import { ThemeProvider } from '@mui/material/styles'

  export const globalTheme = createTheme({});

  export const introTheme = createTheme({
    palette: {
      primary: amber
    }
  });

  export const overviewTheme = createTheme({
    palette: {
      primary: teal
    }
  });

  export const practiceTheme = createTheme({
    palette: {
      primary: pink
    }
  });

  export const furtherTheme = createTheme({
    palette: {
      primary: purple
    }
  });
