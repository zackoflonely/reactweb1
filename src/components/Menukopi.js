import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Image, Button, Modal, Alert} from 'react-bootstrap';
import images from '../images/images';
const Menukopi=()=>{
    const [getList,setList]= useState([]);
    const [getText,setText]= useState(0);
    const [getnama,setnama]= useState("");
    const [getKopi,setKopi]= useState([]);
    const [getText1,setText1]= useState(0);
    const [getHarga,setHarga]=useState(0)
    const [getHarga1,setHarga1]=useState(0)
    const [getTotal,setTotal]=useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      window.location.reload(false);
    }
    const handleShow = () => setShow(true);

    useEffect(() => {
      getProducts();
      getMenu();
      Total();
    }, []);
    
    const getProducts = async () => {
      const response = await Axios.get("http://localhost:8000/api/get");
      setList(response.data);
    };
    const Total = async () => {
      const response = await Axios.get("http://localhost:8000/api/totalharga");
      setTotal(response.data);
    };
    const getMenu = async () => {
      const response = await Axios.get("http://localhost:8000/api/getmenu");
      setKopi(response.data);
    };
    const delmenu = ()=>{
      Axios.delete("http://localhost:8000/api/del").then(()=>{
      })
    }
    const insertProducts = () => {
      Axios.post("http://localhost:8000/api/insert",{
      Menu:getnama,
      Jumlah:getText,
      Harga:getHarga,
    }).then(()=>{
      alert("Sukses menambahkan menu")
      window.location.reload(false);
      });
    }; 
    return(
      <div>
      <table className='containermenu'>
        <tr className='tablemenu'>
        <td className='table1 border'>
          <div className='judulmenu border'>OUR MENU</div>
            <Row className='scroll'>
            {images&&images.map((item)=>
              <Col>
                <Card className="bg-dark text-white movieImage">
                  <div key={item.id}>
                  <Image src={item.image} className='images'/>
                  {getList.map((val)=>
                  {if(item.id === val.id){
                    const nama = ()=>{
                      setnama(val.kopi)
                    };
                    const plus = ()=>{
                      setText(getText+1)
                      setText1(getText)
                      setHarga(val.harga)
                    };
                    const minus = ()=>{
                      setText(getText-1)
                    };
                      return(
                        <Card.Text onClickCapture={nama} onClick={insertProducts} className='text-center' key={val.id}>
                          <h2 className='kopi'>{val.kopi}</h2>
                          <Card.Title>Rp.{val.harga}</Card.Title>
                          <Button className='buttonmenu' onClickCapture={plus}>+</Button>
                          <Button className='buttonmenu' onClickCapture={minus}>-</Button>
                        </Card.Text>
                      )
                  }})}
                  </div>
                </Card>
              </Col>
            )}
            </Row>
        </td>
        <Card bg='dark cardmenu'>
        <Card.Header className='text-center'><h2>KERANJANG</h2></Card.Header>
        <Card.Body>
          <table className='text-center tablekrj'>
              <tr>
                <td className='menukopi' >Nama Menu</td>
                <td className='text-center'>Jumlah</td>
                <td className='tablehrg'>Harga</td>
              </tr>
          {getKopi.map((val)=>{
            const Update = () => {
              Axios.put("http://localhost:8000/api/update",{
                Menu:val.Menu,
                Jumlah:getText1,
                Harga:getHarga,
              }).then(()=>{
                window.location.reload(false);
              });
            };
            const plus = ()=>{
              setText1(val.Jumlah+1)
              setHarga(val.Harga*getText1)
            };
            const minus = ()=>{
              setText1(val.Jumlah-1)
              setHarga(val.Harga*(val.Jumlah+1))
            };
            return(
              <tr>
                <td className='menukopi'>- {val.Menu}</td>
                <td className='text-center'>
                <Button className='buttonmenu' onClickCapture={plus} onClick={Update}>+</Button>
                <input type="value" className='textplace text-center align-item-center' value={val.Jumlah}/>
                <Button className='buttonmenu' onClickCapture={minus} onClick={Update}>-</Button>
                </td>
                <td className='tablehrg'>Rp. {val.Harga}</td>
                <td className='krj'></td>
              </tr>
          )
        })}
        {getTotal.map((val)=>{
          return(
            <tr>
              <td className='menukopi'>Total</td>
              <td>{val.Totaljumlah}</td>
              <td className='tablehrg'>Rp. {val.Totalharga}</td>
              <td className='krj'></td>
            </tr>
          )
        })}
        </table>
        </Card.Body>
        <Button className='buttonkeranjang' onClick={handleShow}>Konfirmasi</Button>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Apakah Anda Yakin Dengan Pesanan Anda?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Pesanan anda:</Modal.Body>
        {getKopi.map((val)=>{
          return(
            <Modal.Body>{val.Menu}  {val.Jumlah}</Modal.Body>
          )
        })}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} onClickCapture={delmenu}>
            Konfirmasi
          </Button>
        </Modal.Footer>
      </Modal>
        </Card>
        </tr>
    </table>
      </div>
)}

export default Menukopi;