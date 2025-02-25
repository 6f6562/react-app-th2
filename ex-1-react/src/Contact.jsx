import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Contact = ({ contact, onDelete }) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <strong>{contact.firstName}</strong> <br /> {contact.lastName}
      </ListGroup.Item>
      <ListGroup.Item>
        Phone Number: <strong>{contact.phone}</strong>
      </ListGroup.Item>
      <ListGroup.Item>
        Address: <strong>{contact.address}</strong>
      </ListGroup.Item>
      <ListGroup.Item>
        <Button variant="danger" onClick={() => onDelete(contact.id)}>
          Delete
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Contact;
