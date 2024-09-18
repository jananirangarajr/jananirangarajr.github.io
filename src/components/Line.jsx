import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Line() {
    return(
        <Container className="w-auto h-auto">
            <svg className="svg-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 4">
                {/*<line x1="0" y1="3" x2="35" y2="3" stroke="#000000" stroke-width="1"/>*/}
                <circle cx="30" cy="20" r="20" fill="#000000"/>
                <circle cx="60" cy="20" r="20" fill="#000000"/>
                <circle cx="90" cy="20" r="20" fill="#000000"/>
                {/*<line x1="75" y1="3" x2="110" y2="3" stroke="#000000" stroke-width="1"/>*/}
            </svg>
        </Container>
    )
}
export default Line;