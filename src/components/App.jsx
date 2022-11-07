import { nanoid } from 'nanoid';
import { addContact, deleteContact } from 'store/contacts/contactsSlice';
import { setFilter } from 'store/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filterContacts = useSelector(state => state.filter.filter);

  console.log(contacts);

  const contactAdd = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (contacts.some(({ name }) => name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    dispatch(addContact(data));
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  const normalizeFilter = filterContacts.toLowerCase();
  const filterContactsList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <>
      <Section title="Phonebook">
        <ContactForm addContact={contactAdd} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filterContacts} changeFilter={changeFilter} />
        <ContactsList
          contacts={filterContactsList}
          deleteContact={contactDelete}
        />
      </Section>
    </>
  );
};
