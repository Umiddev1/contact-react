import React, { useState } from 'react'
import Form from './Components/Form';
import ContactList from './Components/ContactList';
import './Components/ContactCss.css'
import ContactBtn from './Components/ContactBtn';
function App() {
  const [inputName, setInputName] = useState('')
  const [inputRelation, setInputRelation] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <div className="container">
        <ContactBtn />
        <div className="contact__biggr row">
        <Form 
        valueOne={inputName}
        valueTwo={inputRelation}
        valueThree={inputPhone}
        setInputName={setInputName} 
        setInputRelation={setInputRelation} 
        setInputPhone={setInputPhone} 
        todos={todos}
        setTodos={setTodos} 
        inputName={inputName}
        inputRelation={inputRelation}
        inputPhone={inputPhone}
        />
        <ContactList todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
