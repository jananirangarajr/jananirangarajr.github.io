import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { mainBody } from "../details/config";
import Col from "react-bootstrap/Col";

function Leadership() {
    return (
        <Container className="p-5 mx-auto">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto justify-content-center">
                    Technical Leadership
                </h1>
            </Row>

            <Row className="p-4">
                <ul className="list-unstyled">
                    {mainBody.achivements.map((achivement, index) => {
                        // Split the text into first two words and the rest
                        const words = achivement.split(":");
                        const boldPart = words[0];
                        const remaining = words[1];

                        return (
                            <Col key={index} xs={12} className="mb-3">
                                <li className="achievement fw-medium lh-base text-info-emphasis">
                                    <strong style={{ color: "darkcyan" }}>{boldPart}</strong>:{remaining}
                                </li>
                            </Col>
                        );
                    })}
                </ul>
            </Row>
        </Container>
    );
}

export default Leadership;