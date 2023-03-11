import { Button, Container,Card, Modal } from "react-bootstrap";
import icon from '../assets/Noffein.png'
import { useState } from "react";
import Login from "./Login";
function Pagelogin(){
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      window.location.reload(false);
    }
    const handleShow = () => setShow(true);

    return(
        <div className="pagelogin" id="Login">
            <Container className="logincont">
                <Card>
                <table className="logintab">
                    <tr>
                        <td><img src={icon} className='iconlogin'></img></td>
                        <td>
                            <div>Silakan Sign in untuk mendapatkan berbagai macam promo menarik Noffein</div>
                            <Button onClick={handleShow}>Sign In</Button>
                            <Modal show={show}onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                COFFEESHOP
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {<Login/>}
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={handleClose} variant='success'>Sign In</Button>
                                <Button onClick={handleClose} variant='danger'>Close</Button>
                            </Modal.Footer>
                            </Modal>
                        </td>
                    </tr>
                </table>
                </Card>
            </Container>
        </div>
    )
}

export default Pagelogin;
