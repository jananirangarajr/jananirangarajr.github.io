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
                <h1 className="heading p-0">Education</h1>
                <Line/>
            </Row>
            {mainBody.education.map(education => (
                <Row className="align-Center px-5 py-3">
                    <Row className="py-1">
                        <h3 className="h3">{education.degree} </h3>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className="h5 d-inline w-auto mx-3">{education.university}</h5>
                            <h5 className="h5 d-inline">  - {education.year}</h5>
                        </Col>
                    </Row>
                </Row>
            ))}
        </Container>
    );
}
export default Education;