import { motion } from 'framer-motion'

interface Award {
  title: string
  issuer: string
  description: string
}

const awards: Award[] = [
  {
    title: "Digital Image Processing",
    issuer: "Asia University, Taiwan",
    description: "Advanced certification in digital image processing and computer vision techniques."
  },
  {
    title: "Business Analytics Text Mining",
    issuer: "NPTEL",
    description: "Certification in advanced text mining and business analytics methodologies."
  },
  {
    title: "Research Publication",
    issuer: "International Journal",
    description: "Published paper on 'Advancing Clinical Diagnosis Through Intelligent Analysis of Chest X-rays for Cardiomegaly Detection'"
  }
]

const Awards = () => {
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
            Awards & Certifications
          </h2>
          <p className="text-xl text-text-secondary">Recognition of Excellence and Continuous Learning</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
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
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-bold text-text-secondary opacity-20">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🏆</div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  {award.title}
                </h3>
                <div className="text-lg text-text-secondary mb-4">{award.issuer}</div>
                <p className="text-text-secondary leading-relaxed">
                  {award.description}
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
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-text-secondary leading-relaxed">
              These achievements reflect my commitment to continuous learning and excellence 
              in the field of computer science and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards 