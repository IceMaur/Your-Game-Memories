import './formCard.css'
import { NavLink } from 'react-router-dom';

function FormCard(props) {
  return (
    <div className='form-card'>
      <h1>{props.title}</h1>
      <form onSubmit={props.onSubmit}>
        {props.children}
        <div className='form-card-buttons'>
          <NavLink to={props.link}>{props.linkName}</NavLink>
          <button type="submit" disabled={props.submitDisabled}>{props.submitButtonText}</button>
        </div>
      </form>
    </div>
  )
}
  
export default FormCard