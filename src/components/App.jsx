import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import contactsData from '../components/data/contactsData.json';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactsData
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    if (contacts.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevState => [newContact, ...prevState]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const filterContactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactsList
          contacts={filterContactsList}
          deleteContact={deleteContact}
        />
      </Section>
    </>
  );
};
