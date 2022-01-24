import React from 'react';

function ContactBtn({todos, setTodos}) {
  function family(text) {
    console.log(text);
    if(text == "All")setTodos(todos)
   const filter = todos.filter((items) => items.relation == text);
   if(filter.length > 0 && text != "All")setTodos(filter);
   if(filter.length == 0 && text != "All")setTodos([]);
  }
  return (
    <div className="btn-group">
     <button type="button" onClick={() => family('All')} className="btn btn-dark bt">All</button>
     <button type="button" onClick={() => family('Family')} className="btn btn-primary bt">Family</button>
     <button type="button" onClick={() => family('Freinds')} className="btn btn-secondary bt">Freinds</button>
     <button type="button" onClick={() => family('Relatives')} className="btn btn-success bt">Relationship</button>
   </div>
  )
}
export default ContactBtn;