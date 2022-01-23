import React from 'react'
import './ContactCss.css'
function Form({ 
  setInputName, 
  setInputRelation, 
  setInputPhone, 
  todos,  
  setTodos, 
  inputName, 
  inputRelation, 
  inputPhone, 
  valueOne, 
  valueTwo, 
  valueThree}) {
  function handleName(e) {
    setInputName(e.target.value)
  }
  function handleRel(e) {
    setInputRelation(e.target.value);
  }
  function handlePhone(e) {
    setInputPhone(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setTodos([...todos, {firstName:inputName, relation:inputRelation, phone:inputPhone}])
    setInputName('')
    setInputRelation('')
    setInputPhone('')
  }
  return (
    <div className="contact__forms col-md-6">
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__groupinp">
        <input onChange={handleName} value={valueOne} className="form-control" type="text" placeholder="Name" />
        <input onChange={handleRel} className="form-control" value={valueTwo} type="text" placeholder="Relationship" list="mylist" />
        <datalist id="mylist">
          <option>Family</option>
          <option>Freinds</option>
          <option>Relatives</option>
        </datalist>
        <input onChange={handlePhone} value={valueThree} className="form-control" type="text" placeholder="Phone Number" list="num"/>
        <datalist id="num">
          <option>+998</option>
        </datalist>
        <button  type="submit" className="btn btn-primary">Add Contact</button>
        </div>
      </form>
    </div>
  )
}
export default Form;