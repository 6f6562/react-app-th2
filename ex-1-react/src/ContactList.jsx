import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Contact from './Contact';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Row className="justify-content-center">
      {contacts.map(contact => (
        <Col key={contact.id} className="mb-3">
          <Contact contact={contact} onDelete={onDelete} />
        </Col>
      ))}
    </Row>
  );
};

export default ContactList;
