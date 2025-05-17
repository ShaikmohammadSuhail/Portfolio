import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const Introduction = () => {
  const greetingText = "Hello, I'm👋"
  const name = "SHAIK MOHAMMAD SUHAIL"
  const description = "A passionate Computer Science student at MITS, Madanapalle, with a strong academic record (CGPA: 8.02). Experienced in full-stack development, machine learning, and cloud technologies. Currently focused on developing innovative solutions and exploring cutting-edge technologies."
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="section-container min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-accent opacity-50 animate-gradient" />

        {/* Left side - Text content */}
        <motion.div
          className="text-left space-y-8 relative z-10"
          variants={itemVariants}
        >
          <div className="space-y-4">
            <motion.h2
              className="text-2xl text-text-secondary inline-block"
              animate={controls}
            >
              {greetingText}
            </motion.h2>
            <motion.h1
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text"
              variants={itemVariants}
            >
              {name}
            </motion.h1>
          </div>

          <motion.p
            className="text-lg text-text-secondary leading-relaxed"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div
            className="w-96 md:w-[600px] relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="/images/signature-new.png"
              alt="Signature"
              className="w-full h-full object-contain opacity-90 duration-300"
            />
          </motion.div>
        </motion.div>

        {/* Right side - Profile Image */}
        <motion.div
          className="flex justify-center md:justify-end relative z-10"
          variants={itemVariants}
        >
          <motion.div
            className="relative w-80 h-80 md:w-[500px] md:h-[500px] xl:w-[600px] xl:h-[600px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/images/profile-new.png"
              alt="Profile"
              className="w-full h-full object-contain rounded-2xl duration-300"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Introduction 