import React from "react";
import '../scss/style.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typist from 'react-typist-component';
import {mainBody} from "../details/config";

const Intro = () => {
        return (
                <Container fluid id="Intro" className="centered-container bg-gradient bg-opacity-75 text-dark start-0">
                    <Row>
                        <h3 className="intro-msg">{mainBody.introMsg}</h3>
                    </Row>
                        <Row>
                            <h1 className="intro">{mainBody.firstName} {mainBody.lastName}</h1>
                        </Row>
                            <Row className="tagline">
                                <h3>{mainBody.devDesc}</h3>
                            </Row>
                    <Row>
                            <div className="icons-social">
                                {mainBody.icons.map(icon => (
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={ `${icon.url}` }
                                    >
                                        <i className={ `${icon.image}`} />
                                    </a>
                                ))}
                            </div>
                    </Row>
                            <Row>
                            <Typist>
                                <div className="fs-5 fst-italic">
                                    {mainBody.message}
                                </div>
                                <div className="fs-5 fst-italic fw-normal">
                                    {mainBody.passion}
                                </div>
                            </Typist>
                            </Row>
                            <Row className="button-container justify-content-center p-5">
                                <a
                                    className="custom-btn"
                                    href="#about"
                                    role="button"
                                    aria-label="Learn more about me"
                                >
                                    More About Me
                                    <Row>
                                    <i className="bi bi-arrow-down-circle"></i>
                                    </Row>
                                </a>
                            </Row>


                </Container>
        )
    }
export default Intro;
