import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Objectives from './pages/Introduction/Objectives'
import What from './pages/Introduction/What'
import History from './pages/Introduction/History'
import DecisionTree from './pages/FurtherResources/DecisionTree'
import NoPage from './pages/NoPage'
import { ThemeProvider } from '@mui/material/styles'
import { furtherTheme, globalTheme, introTheme, overviewTheme, practiceTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        {/* Introduction */}
        <Route path="objectives" element={<ThemeProvider theme={introTheme}><Objectives /></ThemeProvider>} />
        <Route path="what" element={<ThemeProvider theme={introTheme}><What /></ThemeProvider>} />
        <Route path="history" element={<ThemeProvider theme={introTheme}><History /></ThemeProvider>} />
        {/* Overview */}
        {/* In Practice */}
        {/* Further Resources */}
        <Route path="decision-tree" element={<ThemeProvider theme={furtherTheme}><DecisionTree /></ThemeProvider>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
