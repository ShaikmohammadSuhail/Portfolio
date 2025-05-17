import { motion } from 'framer-motion'

interface GalleryItem {
  title: string
  description: string
  image: string
  category: string
}

const galleryItems: GalleryItem[] = [
  {
    title: "Cardiomegaly Detection",
    description: "Advanced deep learning system for detecting cardiomegaly from chest X-rays using state-of-the-art computer vision techniques.",
    image: "/images/cardiomegaly.png",
    category: "Research & Development"
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and dark theme.",
    image: "/images/portfolio-project.png",
    category: "Web Development"
  },
  {
    title: "Machine Learning Projects",
    description: "Collection of ML projects showcasing expertise in computer vision, deep learning, and data analysis using Python and TensorFlow.",
    image: "/images/ml-projects.png",
    category: "AI & ML"
  }
]

const Gallery = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            A Gallery of My Activities
          </h2>
          <p className="text-xl text-gray-400">Showcasing my journey through projects and research</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-gray-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      {item.title}
                    </h3>
                    <p className="text-lg text-center text-gray-300">{item.description}</p>
                    <span className="mt-4 px-4 py-2 bg-purple-900/50 border border-purple-500/30 rounded-full text-sm text-gray-300">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each project represents a step forward in my journey, combining technical expertise 
            with creative problem-solving to deliver impactful solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery 