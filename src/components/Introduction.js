import { Col, Container, Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pagelogin from "./Pagelogin";
import Recom from "./Recom";
import About from "./About";

const Introduction= ()=> {
  return (
    <div>
    <div className="introText mainmenu myBG">
      <Container className="justify-content-center align-items-center text-center textintro">
        <Row>
          <Col className="titleutama">
            <div className="border tittle">WELCOME TO COFFESHOP</div>
            <div className="introbutton mt-4">
              <Link to='Menu'><Button variant='light'>Buy Now</Button></Link>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div>{<Recom/>}</div>
    <div>{<Pagelogin/>}</div>
    <div>{<About/>}</div>
    </div>
  );
}

export default Introduction;
