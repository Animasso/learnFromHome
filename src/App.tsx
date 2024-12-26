import "./App.css"
import AboutUs from "./components/AboutUs"
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
    </div>
  )
}

export default App