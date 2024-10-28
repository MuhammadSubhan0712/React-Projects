import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-7x1 mx-auto pt-20 px-6">
        <HeroSection />
      </div>

      <FeatureSection />

      <Workflow />

      <Pricing />
    </>
  );
};

export default App;
