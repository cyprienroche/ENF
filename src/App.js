import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { allItems, homePath } from './components/MenuItems'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import { ThemeProvider } from '@mui/material/styles'
import { globalTheme } from './components/Theme'
import Layout from './components/Layout'
import UseTheDecisionTree from './pages/FurtherResources/UseTheDecisionTree'

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path={homePath} element={<Home />} />
          {allItems.map(section => (
            section.subsections.map(subsection => (
              <Route path={subsection.path} element={<ThemeProvider theme={section.theme}>{subsection.file}</ThemeProvider>} />
            ))
          ))}
          <Route path={`${homePath}decision-tree/use`} element={<UseTheDecisionTree />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
