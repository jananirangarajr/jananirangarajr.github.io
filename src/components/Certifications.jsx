import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import Col from "react-bootstrap/Col";
import { ExternalLink } from "lucide-react";
import Card from "react-bootstrap/Card";

function Certifications() {
    return (
        <Container className="p-5 mx-auto">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto justify-content-center">
                    Certifications
                </h1>
            </Row>

            <Row className="p-4 gy-4">
                {mainBody.certifications.map((cert) => (
                    <Col key={cert.id} xs={12} md={6} lg={6}>
                        <Card className="h-100 shadow-sm border-0 rounded-4 hover-shadow transition-all">
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Title className="fw-bold d-flex align-items-center justify-content-between text-info-emphasis">
                                        {cert.title}
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-decoration-none text-primary"
                                            title="View Certificate"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    </Card.Title>
                                    <Card.Text className="text-secondary mt-2">
                                        {cert.description}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Certifications;