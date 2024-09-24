import { Route, Routes } from "react-router-dom";
import "./App.css";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="skills" element={<Skill />} />
                <Route path="projects" element={<Project />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
