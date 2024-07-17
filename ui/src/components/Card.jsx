import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <Card className='card-shadow card-item' style={{ width: "70%",margin:"40px", backgroundColor: '#171717', color: 'white' }}>
      <Card.Body>
        <Card.Title style={{ color: "#70e631" }}>{props.data.code}</Card.Title>
        <Card.Subtitle style={{ color: "#70e631", fontStyle: 'italic',padding:"5px" }}>{props.data.description}</Card.Subtitle>
        <Card.Text style={{ fontWeight: 'bold' }}>
          <span style={{ fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: props.data.symbol }} /> {props.data.rate}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
