import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import {TiWeatherSnow} from 'react-icons/ti'
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
 function App(){
  const[search,setSearch]=useState("")
  const[cities,setCity]=useState({})
  function HandleSearch(e){
    setSearch(e.target.value)
  }
  useEffect(()=>{
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    'Lucknow' +
    "&appid=" +  
    "f56f24967aaf51182d1d4df628297c6d")
    .then(res=>res.json())
    .then(data=>setCity(data))

 }
 ,[])
  function HandleCity(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q =" +
    search +
    "&appid=" +
    "f56f24967aaf51182d1d4df628297c6d")
    .then(res=>res.json()) 
    .then(data=>setCity(data))
    
  }
//  async function HandleCity(){
// let b =await fetch("https://api.openweathermap.org/data/2.5/weather?q =" +
//      search +
//     "&appid=" +
//     "f56f24967aaf51182d1d4df628297c6d") 
//     let a= await b.json() 
//     setCity(a)
//   }
 
  return (
    <div>
      {console.log(cities)}
      
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={HandleSearch}
            />
           < TiWeatherSnow style={{color:'white',fontSize:'3.5rem'}}/>
          <h1 style={{color:'white',marginRight:'7rem'}}>AccuWeather</h1>
            {/* <Button variant="outline-success" onClick={HandleCity}>Search</Button> */}
          </Form>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <button className='Btn' onClick={HandleCity}>Search</button> 
    <div className='lists'>
      <div className='temp'>
      {(cities?.main?.temp - 273.15).toFixed(2)}</div>
      
    <div className='city'> {(cities?.name)}</div> 
  
    <img className='image' src='https://i.pinimg.com/originals/0e/f3/bb/0ef3bb66d9216fffcea9022628f7bb26.gif'/>
    <div className='country'> {(cities?.sys?.country)}</div> 
<div className='country'> {(cities?.main?.feels_like)}</div> 
   
    </div>
    
   
    
    </div>
  );
};
export default App;



