import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Container, Row, Col } from 'react-bootstrap';
function Cards() {
    const[price,setPrice]=useState([]);
    useEffect(()=>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response=>{
            const priceArray = Object.values(response.data.bpi);
            setPrice(priceArray);
            
        })
        .catch(err=>{
            console.log(err)
        })
       
    })
  return (
    <Container style={{height:"auto",backgroundColor:"black"}}>
      <Row>
        {price.map((x) => (
          <Col xs={12} lg={4}>
            <Card data={x} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Cards
