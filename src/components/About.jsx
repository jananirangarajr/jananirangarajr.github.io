import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {mainBody} from "../details/config";
import Image from 'react-bootstrap/Image';
import myImage from '../assets/IMG_4623-sm.JPG';
import Education from "./Education";
import Line from "./Line";
import {Button} from "react-bootstrap";
const About = () => {
    return(
        <>
        <Container className="p-5">
            <Row>
                <h1 className="heading p-0 border-bottom border-5 w-auto">About Me</h1>
                
            </Row>
            <Row>
                <Col>
                    <Image src={myImage} style={{width:"300px", height: "auto", marginRight:"30px"}} roundedCircle alt="Photo" className="float-start"/>
                    <p className="intro-body p-5 align-content-center">
                        {mainBody.about}
                        <br/>
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5 mt-0">
                <Button type="button" href={mainBody.resumeLink} className="btn button-bg w-auto">Resume</Button>
            </Row>
            <Row>
                <Education/>
            </Row>
        </Container>
        </>
    );
}
export default About;