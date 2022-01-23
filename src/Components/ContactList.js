import React from 'react';
import ContactItem from './ContactItem';
function ContactList({ todos }) {
  return (
    <div className="contact__lists col-md-6">
      <ul className="contact__list">
        {
          todos.map((items) => {
            return <ContactItem name={items.firstName} relat={items.relation} phone={items.phone}/>
          })
        }
      </ul>
    </div>
  )
}

export default ContactList;