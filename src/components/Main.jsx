import React, {useEffect, useState} from "react";
import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {mainBody} from "../details/config";

function Main() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } // 20% of the section needs to be visible
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
            <Container fluid className="navbar-container start-0">
                <Nav className="justify-content-end px-3" variant="pills" activeKey={activeSection}>
                <Nav.Item>
                    <Nav.Link href="#home" eventKey="home">{mainBody.home}</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#about" eventKey="about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#experience" eventKey="experience">Experience</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#projects" eventKey="projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#skills" eventKey="skills">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#achievements" eventKey="achievements">Achievements</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    );
}

export default Main;