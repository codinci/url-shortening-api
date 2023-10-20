import { LinkForm } from './components/LinkForm'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Info } from './components/Info'
import { ActionSection } from './components/ActionSection'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <main>
        {/* HeroSection */}
        <HeroSection />
        {/* Form section */}
        <LinkForm />
        {/* Info Section */}
        <Info />
        {/* Call to Action Section */}
        <ActionSection/>
      </main>
      <Footer />
      
    </>
  )
}

export default App
