import "./styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";



function App() {
  return (
    <div className="App">

      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/project/:id" element={<ProjectPage />}/>
        </Routes>    
        
        <Footer />


      </Router>

    </div>
  );
}

export default App;
