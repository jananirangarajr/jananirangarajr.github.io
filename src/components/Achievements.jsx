import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import Col from "react-bootstrap/Col";
import Line from "./Line";

function Achievements() {
    return(
        <Container className="p-5 bg-body-tertiary">
            <Row>
                <h1 className="heading p-0">Key Achivements</h1>
                <Line />
            </Row>
            <Row className="p-4">
                <ul>
                    {mainBody.achivements.map((achivement) => (
                        <Col>
                        <li className="achivement fw-medium lh-base">{achivement}</li>
                        <br/>
                        </Col>
                    ))
                    }
                </ul>
            </Row>

        </Container>
    )
}
export default Achievements;