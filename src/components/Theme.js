import { createTheme } from '@mui/material/styles'
import { brown, pink, purple, grey, green, indigo } from '@mui/material/colors'

  const commonSettings = {
    typography: {
      subtitle1: {
        color: grey[800],
        fontStyle: 'italic',
        fontSize: 22,
      }
    }
  }

  export const globalTheme = createTheme({
    palette: {
      primary: {
        light: indigo[700],
        main: indigo[800],
        dark: indigo[900],
      }
    }
  }, commonSettings);

  export const introTheme = createTheme({
    palette: {
      primary: {
        light: brown[700],
        main: brown[800],
        dark: brown[900],
      }
    }
  }, commonSettings);

  export const overviewTheme = createTheme({
    palette: {
      primary: {
        light: green[800],
        main: green[800],
        dark: green[900],
      }
    }
  }, commonSettings);

  export const inpracticeTheme = createTheme({
    palette: {
      primary: {
        light: pink[700],
        main: pink[800],
        dark: pink[900],
      }
    }
  }, commonSettings);

  export const furtherTheme = createTheme({
    palette: {
      primary: {
        light: purple[700],
        main: purple[800],
        dark: purple[900],
      }
    }
  }, commonSettings);
