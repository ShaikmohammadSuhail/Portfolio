import { motion } from 'framer-motion'

const Mission = () => {
  return (
    <section className="section-container">
      <div className="scroll-trigger">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Empowering Change, Envisioning Tomorrow</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">Mission</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              My mission is to leverage technology to solve real-world problems and create innovative solutions 
              that make a positive impact. Through continuous learning and collaboration, I strive to contribute 
              to the advancement of computer science while fostering an inclusive and supportive tech community.
            </p>
          </motion.div>

          <motion.div
            className="scroll-trigger"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">Vision</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              I envision a future where technology serves as a bridge to connect people, ideas, and opportunities. 
              My goal is to be at the forefront of technological innovation, developing solutions that enhance 
              lives and create meaningful change in the world.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl text-gray-600 leading-relaxed">
              "Dedicated to pushing the boundaries of what's possible through code and creativity."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Mission 