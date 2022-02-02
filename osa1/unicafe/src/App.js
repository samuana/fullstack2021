import React, { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let allCount = 0
  let avg = 0
  let positiveP = 0

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const CountAll = () => {
    allCount = good + neutral + bad
    return (
      allCount
    )
  }

  const CountAverage = () => {
    avg = (good - bad)/allCount
    // console.log(avg)
    // if (avg == NaN)
    //   avg = "" 

    return (
      avg
    )
  }

  const CountPositive = () => {
    positiveP = good/allCount * 100
    // console.log(positiveP)
    // if (positiveP == NaN)
    //   positiveP = "" 

    return (
      positiveP
    )
  }

  // const CountPositive = () => {
  //   positiveP = good/allCount * 100
  // }


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
      
      <p>all      <CountAll />        </p>
      <p>average  <CountAverage />    </p>
      <p>positive <CountPositive /> % </p>
      

    </div>
  )
}

export default App
