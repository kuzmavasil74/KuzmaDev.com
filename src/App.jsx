import React, { Suspense, lazy, useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from './pages/Home/Home.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

const About = lazy(() => import('./pages/About/About.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const Blog = lazy(() => import('./pages/Blog/Blog.jsx'))
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio.jsx'))
const BlogPost = lazy(() => import('./components/BlogPost/BlogPost.jsx'))

const titles = {
  '/': 'Vasyl Kuzma - Full-stack Developer',
  '/about': 'About - Vasyl Kuzma',
  '/portfolio': 'Portfolio - Vasyl Kuzma',
  '/blog': 'Blog - Vasyl Kuzma',
  '/contact': 'Contact - Vasyl Kuzma',
}

import './styles/animation.css'

function App() {
  const location = useLocation()
  const nodeRef = useRef(null)
  useEffect(() => {
    const noScrollPaths = ['/']
    const shouldDisableScroll = noScrollPaths.includes(location.pathname)

    if (shouldDisableScroll) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    document.title = titles[location.pathname] ?? titles['/']
    window.scrollTo(0, 0)
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
          <Suspense fallback={<div className="page-loading" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          </Suspense>
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App
