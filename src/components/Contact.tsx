import { motion } from 'framer-motion'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-charcoal to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-luxury font-bold text-gold mb-4">Let's Create Together</h2>
          <p className="text-xl text-gray-300">Ready to elevate your brand? Get in touch.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-luxury text-gold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4">
                    📍
                  </span>
                  <span className="text-gray-300">Bangalore, Karnataka</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4">
                    📞
                  </span>
                  <span className="text-gray-300">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-gold rounded-full flex items-center justify-center mr-4">
                    ✉️
                  </span>
                  <span className="text-gray-300">hello@adoraadvertising.com</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <motion.button
                    key={social}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    {social[0]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select Service</option>
                <option value="brand-shoots">Brand Shoots</option>
                <option value="reels">High-end Reels</option>
                <option value="portfolio">Portfolio Development</option>
                <option value="wedding">Wedding Photography</option>
              </select>
            </div>
            
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gold focus:outline-none transition-colors resize-none"
            ></textarea>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full gold-gradient text-charcoal py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact