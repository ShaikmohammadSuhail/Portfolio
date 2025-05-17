import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components
import Introduction from './components/Introduction'
import Experience from './components/Experience'
import Education from './components/Education'
import Mission from './components/Mission'
import Charity from './components/Charity'
import Gallery from './components/Gallery'
import Awards from './components/Awards'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTriggers = document.querySelectorAll('.scroll-trigger')
      scrollTriggers.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const triggerPoint = window.innerHeight * 0.8

        if (elementTop < triggerPoint) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      <div className="bg-[#000000] min-h-screen">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <Introduction />
          <Experience />
          <Education />
          <Mission />
          <Charity />
          <Gallery />
          <Awards />
          <Contact />
        </motion.main>
      </div>
    </AnimatePresence>
  )
}

export default App 