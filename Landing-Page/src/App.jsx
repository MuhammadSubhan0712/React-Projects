import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'

const App = () => {
  return (
    
    <>
    <Navbar/>

    <div className="max-w-7x1 mx-auto pt-20 px-6">
      <HeroSection />
    </div>

    <FeatureSection />

    </>
  )
}

export default App