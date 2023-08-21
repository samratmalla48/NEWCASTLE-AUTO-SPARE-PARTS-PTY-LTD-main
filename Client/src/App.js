import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Pagenotfound from "./pages/Pagenotfound";
import Catalogue from "./pages/Catalogue";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
