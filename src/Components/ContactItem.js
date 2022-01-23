import React from 'react';
import './ContactCss.css';
function ContactItem({ name, relat, phone}) {
  return <li className="list-group-item">
    <h4 className="contact__title">{name}</h4>
    <p className="contact__relat">{relat}</p>
    <a className="contact__phone bg-success text-white" href="tel:123456789">{phone}</a>
  </li>
}

export default ContactItem;