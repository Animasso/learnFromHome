import "./App.css"
import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimonials from "./components/Testimonials"

const App = () => {
  return (
    <div >
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
    </div>
  )
}

export default App