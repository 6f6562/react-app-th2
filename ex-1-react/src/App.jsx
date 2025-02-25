import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ContactList from './ContactList';
import { INITIAL_CONTACTS } from './data';

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const deleteAllContacts = () => {
    setContacts([]);
  };

  return (
    <Container className="flex justify-content-center">
      <h1 className="mb-4 text-center">Contact List</h1>
      <div className="mb-4 text-center">
        <Button variant="danger" onClick={deleteAllContacts}>
          Delete All
        </Button>
      </div>
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </Container>
  );
};

export default App;
