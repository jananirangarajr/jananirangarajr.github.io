import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {mainBody} from "../details/config";
import React from "react";
import Row from "react-bootstrap/Row";
import Line from "./Line";


const Education = () => {
    return(
        <Container className="p-3">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto">Education</h1>
            </Row>
            {mainBody.education.map(education => (
                <Row className="justify-content-center text-center px-5 py-3">
                    <Row className="py-1">
                        <Col>
                            <h3 className="h3 d-inline w-auto">{education.degree} </h3>
                            <h5 className="h5 d-inline text-info-emphasis"> - {education.year}</h5>
                        </Col>
                    </Row>
                    <Row className="py-1">
                        <Col>
                            <h4 className="h4 d-inline w-auto">{education.university}</h4>
                            <h5 className="h5 d-inline text-info-emphasis"> - {education.location}</h5>
                        </Col>
                    </Row>
                </Row>
            ))}
        </Container>
    );
}
export default Education;