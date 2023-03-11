import { Card,Button,Image, Container,Col,Row, CardGroup, Modal } from "react-bootstrap";
import images from '../images/images';
import { useEffect,useState } from "react";
import Axios  from "axios";
import icon from '../assets/icon2.png'
const About =()=>{
    const [getList,setList]= useState([]);
    const [getdesc,setdesc]= useState("");
    const [getnama,setnama]=useState("");
    useEffect(() => {
    getProducts();
    }, [])
    
    const [show, setShow] = useState(false);
    const [showA, setShowA] = useState(false);

    const handleClose = () => {
    setShow(false);
    window.location.reload(false);
    }
    const handleShow = () => setShow(true);
    const getProducts = async () => {
        const response = await Axios.get("http://localhost:8000/api/get");
        setList(response.data);
        };
    return(
        <div id="About" className="aboutbg">
        <Container className="aboutcont">    
            <Card bg="dark">
            <table className="logintab">
                <tr>
                <td><img src={icon}></img></td>
                <td>
                    <div className="tittle">Check Our Menu</div>
                    <Button onClick={handleShow} className="buttonabout">Lihat Menu</Button>
                    <Modal show={show}onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Row className="scroll">
                    <CardGroup>
                    {images&&images.map((item)=>{
                    return(
                    <div>
                    {getList.map((val)=>{
                    {if(item.id === val.id){
                        const handleShowA = () => {
                            setShowA(true);
                            setdesc(val.deskrpsi)
                            setnama(val.kopi)
                        }
                        const handleCloseA = () => {
                            setShowA(false);
                        }
                        return(
                        <Card className="movieImage">
                            <Image src={item.image} className='images'></Image>
                            <Card.Text className="text-center">{val.kopi}</Card.Text>
                            <Button onClick={handleShowA}>Lihat Deskripsi</Button>
                            {getList.map((obj)=>{
                                if(val.kopi===obj.kopi){
                                return(
                                <Modal show={showA} onHide={handleCloseA} aria-labelledby="contained-modal-title-vcenter" centered>
                                            <Modal.Header>
                                                <Card.Title>{getnama}</Card.Title>
                                            </Modal.Header>
                                            <Card.Text className="Modalabout">{getdesc}</Card.Text>
                                            <Modal.Footer>
                                                <Button onClick={handleCloseA} variant='danger'>Close</Button>
                                            </Modal.Footer>
                                </Modal>
                                )
                                }
                            })}
                        </Card>
                    )}}
                    })}
                    </div>
                    )
                })}
                    </CardGroup>
                    </Row>
                    <Modal.Footer>
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

export default About;