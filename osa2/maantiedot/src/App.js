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

const CountriesList = ({countries}) => {

  if (countries.length > 10) {
    return ('Too many matches, specify another filter')
  }

  if (countries.length == 1) {
    return (<PrintCountryDetails country={countries[0]} />)
  }


  return (
    <>
      {countries.map(country =>
        <p>{country.name} </p>     
      )}  
    </>
  )
}

const PrintCountryDetails = ({country}) => {
  console.log('details', country)
  return (
    <p>
      <h2>{country.name}</h2> 
      <p>capital {country.capital} </p>
      <p>area {country.area} </p>
      <strong> languages: </strong>
      <ul> 
        <LanguagesList languages={country.languages} />
      </ul>
      <img src={country.flag} height="150"/>
    </p>   
  )
}

const LanguagesList = ({languages}) => {
  return (
    <>
      {languages.map(language =>
        <li key={language.name}> {language.name} </li>
      )}  
    </>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [flag, setNewFlag] = useState('')
  // const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }
  
  useEffect(hook, [])

  console.log('render', countries.length, 'maata')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>

      <div>
        find countries <input
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      {console.log('filteröity', filteredCountries) }

      <CountriesList countries={filteredCountries} />
    </div>
  )

}

export default App
