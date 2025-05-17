import { motion } from 'framer-motion'

interface CharityProgram {
  title: string
  description: string
  icon: string
}

const programs: CharityProgram[] = [
  {
    title: "Education",
    description: "Mentoring students in computer science, conducting free coding workshops, and supporting STEM education initiatives.",
    icon: "📚"
  },
  {
    title: "Technology",
    description: "Developing open-source tools and providing technical support to non-profit organizations.",
    icon: "💻"
  },
  {
    title: "Community",
    description: "Organizing tech meetups, participating in hackathons for social good, and fostering inclusive tech communities.",
    icon: "🤝"
  }
]

const Charity = () => {
  return (
    <section className="section-container py-20">
      <div className="scroll-trigger">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent mb-4">
            My Journey of Giving Back
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Contributing to the community through technology and education has been a fundamental part 
            of my journey, bringing positive change and fostering growth in the tech ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="group relative overflow-hidden rounded-2xl bg-dark-secondary border border-dark-accent/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="relative p-8">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {program.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Through these initiatives, I aim to create a lasting impact and inspire others to use their 
            skills for the betterment of society. Together, we can build a more inclusive and 
            technologically empowered future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Charity 