import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Col, Container, Row,Button } from 'react-bootstrap'
//import btnModule from "./Button.module.css" 
//import Header from './Header.jsx'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
//import {faPhone} from '@fortawesome/free-solid-svg-icons'
//import Header from './Header.jsx'


function App() {


  return (
    <div className="main">
      {/* <Header/> */}
      <div className="container">hello</div>
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <h1>our courses</h1>
            </Col>
          </Row>
          <Row>
            <col lg="3" md="6">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </col>
            <col lg="3" md="6"></col>
            <col lg="3" md="6"></col>
            <col lg="3" md="6"></col>
          </Row>
        </Container>
      </Container>
      {/* <Footer/> */}
    </div>
  );
  
  

}

export default App



