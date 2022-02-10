import React, { useState } from 'react'

const Statistics = (props) => {
  let allCount = props.good + props.neutral + props.bad
  let avg = (props.good - props.bad)/allCount
  let positiveP = props.good/allCount * 100

  const CountAll = () => {
    return (
      allCount
    )
  }

  const CountAverage = () => {
    return (
      avg
    )
  }

  const CountPositive = () => {

    return (
      positiveP
    )
  }

  console.log(allCount)
  console.log(avg)
  console.log(positiveP)

  if (allCount === 0) {
    return (
      <div>
        No feedback given 
      </div>
    )
  }
 
  return (
    <>
      <p>all      <CountAll />        </p>
      <p>average  <CountAverage />    </p>
      <p>positive <CountPositive /> % </p>
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

    
  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>

      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
{/* 
      <p>all      <CountAll />        </p>
      <p>average  <CountAverage />    </p>
      <p>positive <CountPositive /> % </p>
       */}

    </div>
  )
}

export default App
