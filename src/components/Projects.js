import {mainBody} from "../details/config";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import {Button} from "react-bootstrap";
import Line from "./Line";

const Project = () => {
    return(
        <Container className="p-5">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto">Projects</h1>
            </Row>
            <Row xs={1} md={2} lg={2} className="p-5 g-4">
                {mainBody.projects.map((project) => (
                    <Col key={project.id} className="d-flex">
                        {/*<a href={project.link} style={{ textDecoration: "none", color: "inherit" }}>*/}
                        <Card className="card shadow-lg p-3 mb-5 bg-white rounded flex-fill">
                            <Card.Body>
                                <Card.Title className="fs-4 text-info-emphasis d-inline">{project.title}</Card.Title>
                                {project.link && project.link !== "#" && (
                                    <div className="git-link w-auto h-auto flex-column d-inline justify-content-end">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <i className="bi bi-github"></i>
                                        </a>
                                    </div>
                                )}
                                <Card.Text className="fs-6 fw-medium card-body"> {project.description}</Card.Text>
                                <Card.Footer>Technology : {project.tech_stack}</Card.Footer>
                            </Card.Body>
                        </Card>
                        {/*</a>*/}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Project;