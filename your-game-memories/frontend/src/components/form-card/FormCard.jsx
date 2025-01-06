import './formCard.css'

function FormCard(props) {
  return (
    <div className='form-card'>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
  
export default FormCard