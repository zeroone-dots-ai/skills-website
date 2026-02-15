import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { SkillDetail } from './pages/SkillDetail'
import { Install } from './pages/Install'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="skills/:id" element={<SkillDetail />} />
          <Route path="install" element={<Install />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
