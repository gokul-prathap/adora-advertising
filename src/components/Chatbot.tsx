import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Adora's assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')

  const responses = {
    services: "We offer Fashion Photography, Ad Shoots, Luxury Wedding Photography, Product Shoots, and Professional Reels. Which service interests you?",
    pricing: "Our packages start from ₹15,000 for basic shoots. Premium packages range from ₹50,000-₹2,00,000. Contact us for detailed pricing!",
    portfolio: "You can view our portfolio in the gallery section above. We specialize in high-end fashion and luxury wedding photography.",
    contact: "📞 +91 XXXXX XXXXX\n📧 hello@adoraadvertising.com\n📍 Bangalore, Karnataka",
    booking: "To book a session, please fill out our contact form or call us directly. We'll discuss your requirements and create a custom package.",
    wedding: "Our luxury wedding packages include pre-wedding shoots, ceremony coverage, reception photography, and cinematic reels. Prices start from ₹1,00,000.",
    fashion: "We create stunning fashion editorials, model portfolios, and brand campaigns. Our fashion shoots start from ₹25,000.",
    reels: "We produce high-quality cinematic reels for social media and marketing. Reel packages start from ₹20,000.",
    default: "I'd be happy to help! You can ask me about our services, pricing, portfolio, bookings, or contact information."
  }

  const getResponse = (input: string): string => {
    const text = input.toLowerCase()
    
    if (text.includes('service') || text.includes('what do you do')) return responses.services
    if (text.includes('price') || text.includes('cost') || text.includes('package')) return responses.pricing
    if (text.includes('portfolio') || text.includes('work') || text.includes('gallery')) return responses.portfolio
    if (text.includes('contact') || text.includes('phone') || text.includes('email')) return responses.contact
    if (text.includes('book') || text.includes('appointment') || text.includes('schedule')) return responses.booking
    if (text.includes('wedding') || text.includes('marriage')) return responses.wedding
    if (text.includes('fashion') || text.includes('model')) return responses.fashion
    if (text.includes('reel') || text.includes('video')) return responses.reels
    if (text.includes('hello') || text.includes('hi')) return "Hello! Welcome to Adora Advertising. How can I assist you today?"
    
    return responses.default
  }

  const sendMessage = () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(inputText),
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setInputText('')
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-2xl"
      >
        <span className="text-2xl text-charcoal">💬</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-charcoal border border-gold/30 rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-gold text-charcoal p-4 rounded-t-lg flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Adora Assistant</h3>
                <p className="text-xs opacity-80">Online now</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-lg">×</button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.isBot
                        ? 'bg-gray-800 text-white'
                        : 'bg-gold text-charcoal'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gold/20">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about our services..."
                  className="flex-1 bg-gray-800 text-white p-2 rounded border border-gold/30 focus:border-gold focus:outline-none text-sm"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gold text-charcoal px-4 py-2 rounded font-semibold text-sm hover:bg-gold/90 transition-colors"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot