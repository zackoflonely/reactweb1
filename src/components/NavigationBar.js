import React from "react";
import { Link as Linkobj } from "react-scroll";
import { Link } from "react-router-dom";
import {Navbar, Container, Nav, Button,Modal,Badge} from "react-bootstrap"
import { useState,useEffect } from "react";
import icon2 from "../assets/Icon/keranjang.png"
import Axios  from "axios";

const NavigationBar=({navValue})=>{
    const [getKopi,setKopi]= useState([]);
    const [getTotal,setTotal]=useState([])

    useEffect(() => {
    getMenu();
    Total();
    }, []);
    const Total = async () => {
        const response = await Axios.get("http://localhost:8000/api/totalharga");
        setTotal(response.data);
      };
    const getMenu = async () => {
        const response = await Axios.get("http://localhost:8000/api/getmenu");
        setKopi(response.data);
      };
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      window.location.reload(false);
    }
    const handleShow = () => setShow(true);
    return(
        <header>
        <div>
        <Navbar className="Navbar">
        <Container>
            <Navbar.Brand href="/">
                <div className="jumbotron">
                    <table>
                        <tr>
                            <td>             
                                <h1>COFFEESHOP</h1>
                                <p>Healthy Still Tasty</p>
                            </td>
                        </tr>
                    </table>
                </div>
            </Navbar.Brand>
            <Nav className="menuheader sidebar-sticky">
                <Nav.Link ><Linkobj activeClass="active" to="/" 
                spy={true} smooth={true} offset={50} duration={500}>HOME</Linkobj></Nav.Link>
                <Nav.Link ><Linkobj activeClass="active" to="Recom" 
                spy={true} smooth={true} offset={50} duration={500}>RECOMMENDED</Linkobj></Nav.Link>
                <Nav.Link><Linkobj activeClass="active" to="About" 
                spy={true} smooth={true} offset={50} duration={500}>ABOUT</Linkobj></Nav.Link>
            </Nav>
            <Nav>
                <Linkobj activeClass="active" to="Login" 
                spy={true} smooth={true} offset={50} duration={500}><Button variant="success" className="buttonnav">Sign In</Button></Linkobj>
                <Button onClick={handleShow} variant="warning" className="buttonnav"><img src={icon2} className='iconkrj'></img>
                {getTotal.map((val)=>{
                    return(
                        <Badge bg="danger" className="notif">{val.Totaljumlah}</Badge>
                    )
                })}
                </Button>
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    KERANJANG
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Pesanan anda : </Modal.Body>
                {getKopi.map((val)=>{
                return(
                    <Modal.Body>- {val.Menu}  {val.Jumlah}</Modal.Body>
                    )
                })}
                <Modal.Footer>
                    <Button onClick={handleClose} variant='danger'>Close</Button>
                </Modal.Footer>
                </Modal>
            </Nav>
        </Container>
        </Navbar>
        <Nav className="menu">
            <ul>
                <li><Link to="/">Home</Link>
                    <ul className="dropdown">
                        <li><Link to='Login'>Admin</Link></li>
                        <li><Link to='Pencapaian'>Achievement</Link></li>
                        <li><Link to='Social Media'>{!navValue ? "Phone":navValue}</Link></li>
                    </ul>
                </li>
                {/* <li><a href="#">User</a>
                    <ul className="dropdown ">
                        <li><Link to='Create'>ADMIN</Link></li>
                        <li><Link to='Edit'>Edit User</Link></li>
                        <li><Link to='List'>List User</Link></li>
                    </ul>
                </li> */}
            </ul>
        </Nav>
        </div>
        </header>
    )
}

export default NavigationBar;