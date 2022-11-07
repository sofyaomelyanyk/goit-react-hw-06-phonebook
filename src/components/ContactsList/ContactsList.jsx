import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s['contact-list']}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s['contact-item']}>
          <span>
            {name}: {number}
          </span>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={s['button']}
          >
            <DeleteIcon width="40" height="40" />
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
