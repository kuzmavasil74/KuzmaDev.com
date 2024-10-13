import React, { createRef, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'

import './styles/animation.css'

function App() {
  const location = useLocation()
  const nodeRef = createRef()
  useEffect(() => {
    if (location.pathname === '/about') {
      document.body.classList.remove('no-scroll')
    } else if (location.pathname === '/portfolio') {
      document.body.classList.remove('no-scroll')
    } else if (location.pathname === '/contact') {
      document.body.classList.remove('no-scroll')
    } else if (location.pathname === '/blog') {
      document.body.classList.remove('no-scroll')
    } else {
      document.body.classList.add('no-scroll')
    }
  }, [location])

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        nodeRef={nodeRef}
        classNames="page"
      >
        <div ref={nodeRef}>
          <Routes location={location}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
