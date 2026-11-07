import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Director from './components/Director.tsx'
import KeycaseViewer from './components/KeycaseViewer.tsx'
import KeyplateViewer from './components/KeyplateViewer.tsx'
import AssemblyViewer from './components/AssemblyViewer.tsx'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Director/>}></Route>
      <Route path='/case' element={<KeycaseViewer/>}></Route>
      <Route path='/plate' element={<KeyplateViewer/>}></Route>
      <Route path='/full' element={<AssemblyViewer/>}></Route>
    </Routes>
  </BrowserRouter>
)
