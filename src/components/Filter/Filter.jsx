import PropTypes from 'prop-types';
import s from './Filter.module.css'

export const Filter = ({filter, changeFilter}) => {

   return(
      <label className={s["input-group"]}>
      <span >Find contacts by name:</span>
      <input type="text" value={filter} onChange={changeFilter} className={s["input"]} />
      </label>
   )
}

Filter.propTypes =  {
   filter: PropTypes.string.isRequired,
   changeFilter: PropTypes.func.isRequired,
}

