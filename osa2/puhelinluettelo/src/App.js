import { useState, useEffect } from 'react'
import axios from 'axios'

const PrintPerson = ({onePerson}) => {
  return (
    <>
      <p>
        {onePerson.name} {onePerson.number} </p>   
    </>
  )
}

const PersonsList = ({persons}) => {
  return (
    <>
      {persons.map(person =>
        <PrintPerson key={person.name} onePerson={person}/>      
      )}  
    </>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456' },
    // { name: 'Ada Lovelace', number: '39-44-5323523' },
    // { name: 'Dan Abramov', number: '12-43-234345' },
    // { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', persons.length, 'persons')


  const addName = (event) => {
    event.preventDefault()

    if (persons.some(e => e.name === newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
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

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      {/* <Filter newFilter={newFilter} handleFilterChangef={handleFilterChange}/> */}
      <div>
        filter shown with <input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>

      <h2>Add a new</h2>
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

      {console.log('filteröity', filteredPersons) }

      <PersonsList persons={filteredPersons} />
      {/* {filteredPersons.map(person =>
        <p key={person.name} >
          {person.name} {person.number} </p> 
      )} */}

    </div>
  )

}

export default App
