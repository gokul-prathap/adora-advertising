import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glass-nav"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-luxury font-bold text-gold"
          whileHover={{ scale: 1.05 }}
        >
          Adora
        </motion.div>
        
        <div className="hidden md:flex space-x-8">
          {['Portfolio', 'Reels', 'Services', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gold transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation