import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import Col from "react-bootstrap/Col";
import Line from "./Line";

function Achievements() {
    return(
        <Container className="p-5 text-center mx-auto">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto">Achivements</h1>
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