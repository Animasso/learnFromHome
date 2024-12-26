import "./App.css"
import AboutUs from "./components/AboutUs"
import Faq from "./components/Faq"
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
    </div>
  )
}

export default App