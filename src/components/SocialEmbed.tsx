import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface SocialEmbedProps {
  platform: 'instagram' | 'youtube' | 'tiktok'
  postUrl?: string
}

const SocialEmbed = ({ platform, postUrl }: SocialEmbedProps) => {
  const embedRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (platform === 'instagram' && postUrl && embedRef.current) {
      // Clear previous content
      embedRef.current.innerHTML = ''
      
      // Create Instagram blockquote
      const blockquote = document.createElement('blockquote')
      blockquote.className = 'instagram-media'
      blockquote.setAttribute('data-instgrm-permalink', postUrl)
      blockquote.setAttribute('data-instgrm-version', '14')
      blockquote.setAttribute('data-instgrm-captioned', '')
      
      // Add fallback link
      const link = document.createElement('a')
      link.href = postUrl
      link.textContent = 'View this post on Instagram'
      blockquote.appendChild(link)
      
      embedRef.current.appendChild(blockquote)
      
      // Process Instagram embeds with delay
      setTimeout(() => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
        }
      }, 100)
    }
  }, [platform, postUrl])

  if (platform === 'instagram' && postUrl) {
    return (
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="aspect-square rounded-lg overflow-hidden"
        ref={embedRef}
      />
    )
  }

  // Fallback for missing URLs or other platforms
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="aspect-square bg-gradient-to-br from-gold/20 to-charcoal rounded-lg border border-gold/30 flex flex-col items-center justify-center p-6"
    >
      <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </div>
      <div className="text-center">
        <p className="text-gold font-semibold mb-2">Instagram Post</p>
        <p className="text-gray-400 text-sm">Add Post URL</p>
      </div>
    </motion.div>
  )
}

// Extend Window interface for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default SocialEmbed