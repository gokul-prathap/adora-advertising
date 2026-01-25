import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const categories = ['All', 'Fashion', 'Ad Shoots', 'Posh Weddings', 'Product', 'Modelling']
  
  const portfolioItems = [
    { id: 1, category: 'Fashion', title: 'Luxury Fashion Editorial', image: '/images/portfolio/fashion-1.jpg' },
    { id: 2, category: 'Ad Shoots', title: 'Premium Brand Campaign', image: '/images/portfolio/ad-1.jpg' },
    { id: 3, category: 'Posh Weddings', title: 'Royal Wedding Collection', image: '/images/portfolio/wedding-1.jpg' },
    { id: 4, category: 'Product', title: 'Luxury Product Showcase', image: '/images/portfolio/product-1.jpg' },
    { id: 5, category: 'Modelling', title: 'Professional Portfolio', image: '/images/portfolio/model-1.jpg' },
    { id: 6, category: 'Fashion', title: 'Haute Couture Series', image: '/images/portfolio/fashion-2.jpg' },
  ]
  
  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-luxury font-bold text-gold mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300">Crafting Visual Excellence</p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'gold-gradient text-charcoal font-semibold'
                  : 'border border-gold text-gold hover:bg-gold hover:text-charcoal'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/5]"
            >
              <div 
                className="w-full h-full bg-cover bg-center bg-gray-800"
                style={{ 
                  backgroundImage: `url(${item.image}), linear-gradient(135deg, #D4AF37 0%, #121212 100%)` 
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <span className="text-white text-lg font-semibold drop-shadow-lg">{item.title}</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gold">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery