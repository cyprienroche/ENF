import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Objectives from './pages/Introduction/Objectives'
import What from './pages/Introduction/What'
import History from './pages/Introduction/History'
import Structure from './pages/Overview/Structure'
import Chapters from './pages/Overview/Chapters'
import ExampleICT from './pages/Overview/ExampleICT'
import Conform from './pages/Practice/Conform'
import Requirements from './pages/Practice/Requirements'
import Test from './pages/Practice/Test'
import DecisionTree from './pages/FurtherResources/DecisionTree'
import NoPage from './pages/NoPage'
import { ThemeProvider } from '@mui/material/styles'
import { furtherTheme, globalTheme, introTheme, overviewTheme, practiceTheme } from './components/Theme'
import Layout from './components/Layout'


function App() {
  return (
    <ThemeProvider theme={globalTheme}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* Introduction */}
          <Route path="objectives" element={<ThemeProvider theme={introTheme}><Objectives /></ThemeProvider>} />
          <Route path="what" element={<ThemeProvider theme={introTheme}><What /></ThemeProvider>} />
          <Route path="history" element={<ThemeProvider theme={introTheme}><History /></ThemeProvider>} />
          {/* Overview */}
          <Route path="structure" element={<ThemeProvider theme={overviewTheme}><Structure /></ThemeProvider>} />
          <Route path="chapters" element={<ThemeProvider theme={overviewTheme}><Chapters /></ThemeProvider>} />
          <Route path="example-ict" element={<ThemeProvider theme={overviewTheme}><ExampleICT /></ThemeProvider>} />
          {/* In Practice */}
          <Route path="conform" element={<ThemeProvider theme={practiceTheme}><Conform /></ThemeProvider>} />
          <Route path="requirements" element={<ThemeProvider theme={practiceTheme}><Requirements /></ThemeProvider>} />
          <Route path="test" element={<ThemeProvider theme={practiceTheme}><Test /></ThemeProvider>} />
          {/* Further Resources */}
          <Route path="decision-tree" element={<ThemeProvider theme={furtherTheme}><DecisionTree /></ThemeProvider>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
