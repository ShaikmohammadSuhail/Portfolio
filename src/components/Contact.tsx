import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

interface ContactInfo {
  icon: ReactNode
  label: string
  value: string
  link?: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MdEmail className="text-2xl" />,
    label: "Email",
    value: "shaikmohammadsuhail37@gmail.com",
    link: "mailto:shaikmohammadsuhail37@gmail.com"
  },
  {
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
    value: "ShaikmohammadSuhail",
    link: "https://github.com/ShaikmohammadSuhail"
  },
  {
    icon: <FaLinkedin className="text-2xl" />,
    label: "LinkedIn",
    value: "Shaik Mohammad Suhail",
    link: "https://www.linkedin.com/in/shaik-mohammad-suhail-a52705208/"
  },
  {
    icon: <MdLocationOn className="text-2xl" />,
    label: "Location",
    value: "Nandyal, Andhra Pradesh - 518502"
  }
]

const Contact = () => {
  return (
    <section className="section-container">
      <div className="scroll-trigger">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg mb-4">Contact Me</h2>
          <p className="text-xl text-gray-600">Let's Connect and Create Something Amazing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">Get in Touch</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting 
              conversations. Whether you have a project in mind or just want to connect, 
              feel free to reach out.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-white">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-white hover:text-gray-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-lg text-white">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-[#111111] p-8 rounded-2xl border border-[#2d2d2d]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-md mb-6">Quick Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-[#2d2d2d] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#1f1f1f]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-[#2d2d2d] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#1f1f1f]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-[#2d2d2d] bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#1f1f1f] h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1f1f1f] text-white py-3 rounded-lg hover:bg-[#2d2d2d] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 