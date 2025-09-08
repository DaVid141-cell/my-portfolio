import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Project from './pages/project.tsx'
import Contact from './pages/contact.tsx'
import PageLayout from './components/layouts/page-layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Home/>
      <About/>
      <Project/>
      <Contact/>
    </PageLayout>
  </StrictMode>,
)
