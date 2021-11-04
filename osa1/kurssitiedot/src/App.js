import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    return (
      <>
        <h1>
          {props.course}
        </h1>
      </>
    )
  }

  const Part = (props) => {
    console.log("parti", props)
    return (
      <>
        <p>
        {props.par.name} {props.par.exercises}
        </p>
      </>
    )
  }

  const Content = (props) => {
    console.log("conti", props)
    return (
      <>
        <Part par={props.part1}/>
        <Part par={props.part2}/>
        <Part par={props.part3}/>
      </>
    )
  }

  const Total = (props) => {
    return (
      <>
        <p>
          Number of exercises {props.exercises}
        </p>
      </>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} 
               part2={part2} 
               part3={part3}  />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}


export default App
