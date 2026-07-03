import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home";
import About from "./pages/About";
import Properties from "./pages/Properties"
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"; 
function App(){
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Properties" element={<Properties />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;