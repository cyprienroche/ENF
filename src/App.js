import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Objectives from './pages/Introduction/Objectives'
import What from './pages/Introduction/What'
import DecisionTree from './pages/FurtherResources/DecisionTree'
import NoPage from './pages/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="objectives" element={<Objectives />} />
        <Route path="what" element={<What />} />
        <Route path="decision-tree" element={<DecisionTree />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
