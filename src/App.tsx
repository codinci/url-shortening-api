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
        <HeroSection/>
        <LinkForm />
        <Info />
        <ActionSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
