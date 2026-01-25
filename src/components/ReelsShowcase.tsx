import { motion } from 'framer-motion'
import SocialEmbed from './SocialEmbed'

const ReelsShowcase = () => {
  const reels = [
    { id: 1, title: 'Fashion Week Highlights', thumbnail: '/api/placeholder/300/500' },
    { id: 2, title: 'Luxury Brand Campaign', thumbnail: '/api/placeholder/300/500' },
    { id: 3, title: 'Wedding Cinematography', thumbnail: '/api/placeholder/300/500' },
    { id: 4, title: 'Product Showcase Reel', thumbnail: '/api/placeholder/300/500' },
  ]

  return (
    <section id="reels" className="py-20 px-6 bg-gradient-to-b from-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-luxury font-bold text-gold mb-4">Reels Showcase</h2>
          <p className="text-xl text-gray-300">Cinematic Stories in Motion</p>
        </motion.div>
        
        {/* Mobile-Optimized Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-[9/16] rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="w-full h-full bg-gradient-to-b from-gold/30 to-charcoal flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-white text-sm font-medium px-2">{reel.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Instagram Integration Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-luxury text-gold mb-8">Follow Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <SocialEmbed key={item} platform="instagram" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ReelsShowcase