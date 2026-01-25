import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Brand Shoots',
      description: 'Premium fashion photography and commercial campaigns that elevate your brand presence',
      features: ['High-end Fashion Photography', 'Commercial Campaigns', 'Editorial Shoots', 'Brand Identity Visuals'],
      icon: '📸'
    },
    {
      id: 2,
      title: 'High-end Reels',
      description: 'Cinematic video content and social media reels that captivate your audience',
      features: ['Cinematic Video Production', 'Social Media Reels', 'Brand Storytelling', 'Motion Graphics'],
      icon: '🎬'
    },
    {
      id: 3,
      title: 'Modelling Portfolio Development',
      description: 'Professional portfolio creation for aspiring and established models',
      features: ['Portfolio Photography', 'Headshots & Comp Cards', 'Fashion Editorials', 'Career Guidance'],
      icon: '👑'
    }
  ]

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-luxury font-bold text-gold mb-4">Services</h2>
          <p className="text-xl text-gray-300">Crafting Excellence in Every Frame</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              
              <h3 className="text-2xl font-luxury font-bold text-gold mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full border border-gold text-gold py-3 rounded-full hover:gold-gradient hover:text-charcoal transition-all duration-300 font-semibold"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services