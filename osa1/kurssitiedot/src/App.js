import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

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
    return (
      <>
        <p>
        {props.par} {props.exer}
        </p>
      </>
    )
  }

  const Content = (props) => {
    return (
      <>
        <Part par={props.part1} exer={props.exercises1}/>
        <Part par={props.part2} exer={props.exercises2}/>
        <Part par={props.part3} exer={props.exercises3}/>
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
      <Content part1={part1} exercises1={exercises1}
               part2={part2} exercises2={exercises2}
               part3={part3} exercises3={exercises3} />
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )


  // return (
  //   <div>
  //     <h1>{course}</h1>
  //     <p>
  //       {part1} {exercises1}
  //     </p>
  //     <p>
  //       {part2} {exercises2}
  //     </p>
  //     <p>
  //       {part3} {exercises3}
  //     </p>
  //     <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  //   </div>
  // )
}

export default App
