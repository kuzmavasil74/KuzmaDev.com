import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Skills from './pages/Skills/Skills.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Resume from './pages/Resume/Resume.jsx'

import styles from './App.module.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
