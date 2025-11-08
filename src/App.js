import './App.css';
import Intro from "./components/Intro";
import About from "./components/About";
import React from "react";
import Main from "./components/Main";
import Container from "react-bootstrap/Container";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import LastUpdatedWatermark from "./components/LastUpdated";

function App() {
  return (
    <>
        <Container fluid className="fixed-top">
            <Main/>
        </Container>
        <Container fluid>
            <section id="home">
                <Intro />
            </section>
        </Container>
        <Container fluid className="bg-secondary bg-gradient bg-opacity-10">
            <section id="about" style={{ minHeight: "auto" }}>
                <About />
            </section>
        </Container>
        <Container fluid className="bg-light-subtle">
            <section id="leadership" style={{ minHeight: "auto" }}>
                <Leadership />
            </section>
        </Container>
        <Container fluid className="bg-body-tertiary">
            <section id="experience" style={{minHeight: "auto"}}>
                <Experience />
            </section>
        </Container>
        <Container fluid className="bg-light-subtle">
            <section id="skills" style={{ minHeight: "auto"}}>
                <Skills />
            </section>
        </Container>
        <Container fluid className="bg-body-tertiary">
            <section id="cert" style={{ minHeight: "auto"}}>
                <Certifications />
            </section>
        </Container>
        <Container fluid className="bg-light-subtle">
            <section id="projects" style={{ minHeight: "auto" }}>
                <Project />
            </section>
        </Container>
        <Container fluid className="footer">
            <Contact/>
        </Container>
        <LastUpdatedWatermark />
    </>
  );
}

export default App;
