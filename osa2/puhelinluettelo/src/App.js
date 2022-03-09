import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '01-1234 123'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    
    if (persons.some(e => e.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
      // window.alert(newName + " is already added to phonebook")
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const namesList = () => (
    <>
      {persons.map(person => <li key={person.name}> {person.name} </li>)}
    </>
  );
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
      <div>
          name: <input 
            value={newName} 
            onChange={handleNameChange}  
            />
        </div>
        <div>
          number: <input 
            value={newNumber} 
            onChange={handleNumberChange}  
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <p
           key={person.name} >
            {person.name} {person.number} </p>
        )}      
    </div>
  )

}

export default App
