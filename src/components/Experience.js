import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {mainBody} from "../details/config";
import Line from "./Line";

const Experience = () => {
    return(
        <Container className="p-5">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto">Professional Experience</h1>
            </Row>
            {mainBody.experience.map((exp) => (
                // // works
            // <Row className="border border-success-subtle p-5 my-5 shadow mb-5 bg-body-tertiary rounded">
            //     <Row>
            //         <h3 className="h3">{exp.designation}</h3>
            //     </Row>
            //     <Row>
            //         <Col>
            //             <p className="experience-title w-auto d-inline">{exp.company}</p>
            //             <p className="d-inline fs-4"> | </p>
            //             <p className="experience-title d-inline">{exp.year}</p>
            //         </Col>
            //     </Row>
            //     <Row>
            //         <ul className="px-5 py-3 fs-5">
            //             {exp.works.map((work) => (
            //                 <li className="experience">{work}</li>
            //             ))}
            //         </ul>
            //     </Row>
            // </Row>
                <Row className="border p-5 my-5 mb-2 shadow">
                    <Col className="align-content-center col-6">
                        <Row>
                            <h3 className="h3">{exp.designation}</h3>
                        </Row>
                        <Row>
                            <Row>
                            <p className="experience-title w-auto h-auto">{exp.company}</p>
                            </Row>
                            <Row>
                            <p className="experience-year text-info-emphasis py-0 my-0">{exp.year}</p>
                            </Row>
                        </Row>
                    </Col>
                    <Col className="p-3 mb-5 border-start border-3 exp-border">
                        <ul className="px-5 py-3 fs-5">
                                {exp.works.map((work) => (
                                    <li className="experience">{work}</li>
                                ))}
                            </ul>
                    </Col>
                </Row>
                ))}
        </Container>
    )
}

export default Experience;