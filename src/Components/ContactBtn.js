import React from 'react';

function ContactBtn({todos, setTodos}) {
  function family() {
   const filter = todos.filter((items) =>  items.relation === "Family")
   setTodos(filter);
  }
  function freind() {
    const filter = todos.filter((items) => items.relation === "Freinds")
    setTodos(filter)
  }
  function relation() {
    const filter = todos.filter((items) => items.relation === "Relatives")
    setTodos(filter)
  }
  return (
    <div className="btn-group">
     <button type="button" onClick={family} className="btn btn-primary bt">Family</button>
     <button type="button" onClick={freind} className="btn btn-secondary bt">Freinds</button>
     <button type="button" onClick={relation} className="btn btn-success bt">Relationship</button>
   </div>
  )
}
export default ContactBtn;