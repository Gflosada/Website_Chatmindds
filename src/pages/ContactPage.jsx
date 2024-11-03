import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from '../components/ContactForm';
import ButtonGradient from '../assets/svg/ButtonGradient';

const ContactPage = () => {
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

export default ContactPage;