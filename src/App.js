import './App.css';
import Intro from "./components/Intro";
import About from "./components/About";
import React from "react";
import Main from "./components/Main";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

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
            <section id="experience" style={{minHeight: "auto"}}>
                <Experience />
            </section>
        </Container>
        <Container fluid className="bg-body-tertiary">
            <section id="projects" style={{ minHeight: "auto" }}>
                <Project />
            </section>
        </Container>
        <Container fluid className="bg-light-subtle">
            <section id="skills" style={{ minHeight: "auto"}}>
                <Skills />
            </section>
        </Container>
        <Container fluid className="bg-body-tertiary">
            <section id="achievements" style={{ minHeight: "auto" }}>
                <Achievements />
            </section>
        </Container>
    </>
  );
}

export default App;
