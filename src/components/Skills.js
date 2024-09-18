import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Line from "./Line";

function Skills() {
    return(
      <Container className="p-5 h-50">
          <Row>
              <h1 className="heading p-0">Skills</h1>
              <Line />
          </Row>
          <Row className="p-3">
              {mainBody.skills.map((skill) => (
                  <Col className="my-2 align-content-center">
                      <Image src={skill}></Image>
                  </Col>
              ))}
          </Row>
      </Container>
    );
}

export default Skills;