import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import React from "react";

const Contact = () => {
    return(
        <Container fluid className="text-light py-4 text-center mx-auto">
            <Row className="d-flex justify-content-between align-items-center">
                {/* Left column with padding */}
                <Col className="col-auto start-0 footer-name" style={{ paddingLeft: '60px' }}>
                    <h1>{mainBody.footer.name}</h1>
                </Col>

                {/* Center column with justified text */}
                <Col className="col text-center">
                    <Row>
                        <h2 className="footer-mainmsg text-justify mb-0 mt-2">{mainBody.footer.mainMsg}</h2>
                    </Row>
                    <Row className="mt-0">
                        <p className="footer.msg mb-0">{mainBody.footer.msg}</p>
                    </Row>
                </Col>

                <Col className="col-auto text-end d-flex flex-column align-items-center" style={{ paddingRight: '140px' }}>
                    <div className="text-center">
                        <h6 style={{ padding: '0' }}>Contact Me</h6>
                        <div className="icons-contact">
                            {mainBody.icons.map((icon) => (
                                <a
                                    key={icon.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`${icon.url}`}
                                    key={icon.id}
                                >
                                    <i className={`${icon.image}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Contact;
