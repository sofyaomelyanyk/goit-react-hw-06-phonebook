import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { ReactComponent as AddIcon } from '../icons/add.svg';

export const ContactForm = ({addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmitFofm = e => {
    e.preventDefault();

    addContact({name, number});
    
    

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={onSubmitFofm} className={s['form-wrap']}>
      <label className={s['input-group']}>
        <span>Name</span>
        <input
          className={s['input']}
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Sam Colin"
          required
        />
      </label>
      <label className={s['input-group']}>
        <span>Number</span>
        <input
          className={s['input']}
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="123-45-67"
          required
        />
      </label>
      <button type="submit" className={s['button']}>
        <AddIcon width="60" height="60" />
      </button>
    </form>
  );
};

ContactForm.propTypes = {
   addContact: PropTypes.func,
}
