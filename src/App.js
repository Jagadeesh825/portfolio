import Home from "./components/Home";
import SOCIALLINKS from "./components/social_links";
import NavBar from "./components/navBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiences from "./components/Experience";
import Contact from "./components/contact";


function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <SOCIALLINKS />
      <Portfolio />
      <Experiences />
      <Contact/>
    </div>
    
  )
}
export default App;