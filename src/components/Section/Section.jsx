import PropTypes from 'prop-types';
import s from './Section.module.css'

export const Section = ({title, children}) => {
   return(
      <section className={s["wrap"]}>
         <h2 className={s["title"]}>{title}</h2>
         {children}
      </section>
   )
}

Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node,
} 