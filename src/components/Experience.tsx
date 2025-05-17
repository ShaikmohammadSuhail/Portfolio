import { motion } from 'framer-motion'

interface ExperienceItem {
  id: string
  role: string
  company: string
  duration: string
  location: string
  description: string
}

const experiences: ExperienceItem[] = [
  {
    id: "02",
    role: "ML & AI Intern",
    company: "Fox Trading",
    duration: "Sep 2022 - Nov 2022",
    location: "Remote",
    description: "Led the development of trading algorithms and data analysis tools, improving trading efficiency by 25%. Implemented real-time market data processing systems using Python and advanced analytics."
  },
  {
    id: "01",
    role: "Python Intern",
    company: "Octazen Software Pvt. Ltd.",
    duration: "Apr 2021 - Jun 2021",
    location: "Remote",
    description: "Developed and maintained GUI applications using python and tkinter."
  }
]

const Experience = () => {
  return (
    <section className="section-container">
      <div className="scroll-trigger">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Experience</h2>
          <p className="text-xl text-gray-600">JOURNEY THROUGH EXPERIENCE</p>
        </motion.div>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="scroll-trigger flex flex-col md:flex-row gap-8 items-start"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="md:w-1/4">
                <div className="text-6xl font-bold text-gray-200">{exp.id}</div>
              </div>

              <div className="md:w-3/4">
                <h3 className="heading-md mb-2">{exp.role}</h3>
                <div className="text-xl text-gray-600 mb-4">{exp.company}</div>
                <div className="text-lg text-gray-500 mb-6">
                  {exp.duration} · {exp.location}
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 