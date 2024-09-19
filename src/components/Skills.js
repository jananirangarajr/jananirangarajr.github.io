import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Line from "./Line";
import Card from 'react-bootstrap/Card';
import { CardBody } from "react-bootstrap";

function Skills() {
    return(
      <Container className="p-5">
          <Row>
              <h1 className="heading p-0 border-bottom border-5 w-auto">Skills</h1>
          </Row>
         
          <Row xs={1} md={2} lg={4} className="justify-content-center">
    {mainBody.skillCategory.map((skill) => (
        <Col className="mx-4 my-4 d-flex flex-column align-items-stretch h-100">
            <Card className="border shadow rounded p-3 h-100 d-flex flex-column">
                <Card.Title className="fs-4 text-info-emphasis d-inline p-2 text-center text-decoration-underline">{skill.title}</Card.Title>
                <Card.Text className="fs-6 fw-medium flex-grow-1">
                    <Row className="justify-content-center">
                        {skill.links.map((link) => (
                            <Col className="p-2 text-center">
                                <Image src={link} className="img-fluid" style={{ maxWidth: "150px", height: "auto" }} />
                            </Col>
                        ))}
                    </Row>
                </Card.Text>
            </Card>
        </Col>
    ))}
</Row>


      </Container>
    );
}

export default Skills;