import ButtonGradient from "../../ContactPageApp/src/assets/svg/ButtonGradient";

import Footer from "../../ContactPageApp/src/components/Footer";
import Header from "../../ContactPageApp/src/components/Header";
import ContactForm from '../../ContactPageApp/src/components/ContactForm'
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <ContactForm />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;