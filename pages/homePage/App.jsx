import ButtonGradient from "../../HomePageApp/src/assets/svg/ButtonGradient";
import Benefits from "../../HomePageApp/src/components/Benefits";
import Collaboration from "../../HomePageApp/src/components/Collaboration";
import Footer from "../../HomePageApp/src/components/Footer";
import Header from "../../HomePageApp/src/components/Header";
import Hero from "../../HomePageApp/src/components/Hero";
import Pricing from "../../HomePageApp/src/components/Pricing";
import Roadmap from "../../HomePageApp/src/components/Roadmap";
import Services from "../../HomePageApp/src/components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;