import "./App.css";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact Us/Contact";
import News from "./Pages/News/News";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
