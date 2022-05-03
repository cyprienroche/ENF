import { createTheme } from '@mui/material/styles'
import { amber, teal, pink, purple, grey } from '@mui/material/colors'

  const commonSettings = {
    typography: {
      subtitle1: {
        color: grey[500],
        fontStyle: 'italic',
        fontSize: 22,
      }
    }
  }

  export const globalTheme = createTheme({}, commonSettings);

  export const introTheme = createTheme({
    palette: {
      primary: amber
    }
  }, commonSettings);

  export const overviewTheme = createTheme({
    palette: {
      primary: teal
    }
  }, commonSettings);

  export const inpracticeTheme = createTheme({
    palette: {
      primary: pink
    }
  }, commonSettings);

  export const furtherTheme = createTheme({
    palette: {
      primary: purple
    }
  }, commonSettings);
