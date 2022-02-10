import React, { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <>
      <td>{props.text}</td><td>  {props.value}  </td>
    </>
  )
}

const Statistics = (props) => {
  let allCount = props.good + props.neutral + props.bad
  let avg = (props.good - props.bad)/allCount
  let positiveP = props.good/allCount * 100

  // const CountAll = () => {
  //   return (
  //     allCount
  //   )
  // }

  // const CountAverage = () => {
  //   return (
  //     avg
  //   )
  // }

  // const CountPositive = () => {

  //   return (
  //     positiveP
  //   )
  // }

  console.log(allCount)
  console.log(avg)
  console.log(positiveP)

  if (allCount === 0) {
    return (
      <>
        <tr><td>No feedback given</td><td></td></tr> 
      </>
    )
  }
 
  return (
    <>
      <tr><StatisticLine text="all" value ={allCount} /></tr>
      <tr><StatisticLine text="average" value ={avg} /></tr>
      <tr><StatisticLine text="positive" value ={positiveP} /></tr>
      {/* <p>all      <CountAll />        </p>
      <p>average  <CountAverage />    </p>
      <p>positive <CountPositive /> % </p> */}
    </>
  )
}

const Button = (props) => {
  console.log(props)

  return (

  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
  }

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // const handleGood = () => {
  //   setGood(good + 1)
  // }

  // const handleNeutral = () => {
  //   setNeutral(neutral + 1)
  // }

  // const handleBad = () => {
  //   setBad(bad + 1)
  // }

  return (
    <div>
      <h1>give feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
{/* 
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
 */}
      <h1>statistics</h1>
      <table><tbody>
      <tr><td>good</td><td> {good}</td></tr>
      <tr><td>neutral</td><td>  {neutral}</td></tr>
      <tr><td>bad</td><td>  {bad}</td></tr>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
      </tbody></table>
{/* 
      <p>all      <CountAll />        </p>
      <p>average  <CountAverage />    </p>
      <p>positive <CountPositive /> % </p>
       */}

    </div>
  )
}

export default App
