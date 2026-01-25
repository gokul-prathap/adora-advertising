import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Gallery from './components/Gallery'
import ReelsShowcase from './components/ReelsShowcase'
import Services from './components/Services'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      <Hero />
      <Gallery />
      <ReelsShowcase />
      <Services />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App