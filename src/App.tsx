import "./App.css"
import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"

import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div >
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
      <Pricing />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App