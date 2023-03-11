import './App.css';
import Introduction from './components/Introduction';
import Navbar from './components/NavigationBar';
import Footer from './components/Footer';
import foto from "./assets/bina.jpg"
import { useEffect, useState } from 'react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Recom from './components/Recom';
import Menukopi from './components/Menukopi';
import About from './components/About';

function App() {
  const navText = "Contact";
  const [text,settext] = useState();
  const [getfoto,setfoto]= useState(false)
  const [getnama,setnama]= useState(false)
  const [getnavValue,setnavValue] = useState("");

  useEffect (() => {
    text == "love" ? setfoto(true):setfoto(false)
  },[text])
  useEffect (() => {
    text == "zaki" ? setnama(true):setnama(false)
  },[text])
  useEffect(()=>{

  })
  const paragraft = () =>{
  return(
    <div>
      <marquee>Healthy Still Tasty</marquee>
    </div>
    )
  }
  return (
    <div className="App" id="container">
      <div className='border'>
          <Navbar test={navText} navValue={getnavValue}/>
      </div>
      <div className='particlesheader'>
      <Routes>
          <Route path='/' element= {getnama ? (
          <Introduction name ="Zaki Fauzan"/>
          ):(<Introduction name ="??"/>)}/>
          <Route path='Login' element={<Login/>}/>
          <Route path='Menu' element={<Menukopi/>}/>
      </Routes>
        <Footer paragraft={paragraft}/>
      </div>
    </div>
      );
}

export default App;
