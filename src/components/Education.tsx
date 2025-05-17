import { motion } from 'framer-motion'

interface Education {
  degree: string
  institution: string
  duration: string
  description: string
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Madanapalle Institute of Technology & Science",
    duration: "2021 - 2025",
    description: "CGPA: 8.02 - Specializing in AI/ML and Full Stack Development"
  },
  {
    degree: "Intermediate (11th & 12th)",
    institution: "Sri Chaitanya Jr College",
    duration: "2018 - 2020",
    description: "CGPA: 8.94 - Focus on Mathematics, Physics, and Computer Science"
  },
  {
    degree: "Secondary School (10th)",
    institution: "Sri Chaitanya English Medium School, Kurnool",
    duration: "2018",
    description: "CGPA: 10.00 - Outstanding academic performance with perfect score"
  }
]

const Education = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic path in technology and computer science
          </p>
        </motion.div>

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg shadow-2xl border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-purple-400">{edu.degree}</h3>
              <p className="text-xl text-pink-400 mb-2">{edu.institution}</p>
              <p className="text-gray-400 mb-4">{edu.duration}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education 