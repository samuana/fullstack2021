const Course = (kurssi) => {

  const Header = (props) => {
    console.log("header-i", props)
    console.log("header-txt", props.course)
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
    console.log("content-i", props)
    return (
      <>
        <Part par={props.parts[0]}/>
        <Part par={props.parts[1]}/>
        <Part par={props.parts[2]}/>
      </>
    )
  }

  const Total = (props) => {
    return ( 
      <>
        <p>
          Number of exercises {
          props.parts[0].exercises + 
          props.parts[1].exercises + 
          props.parts[2].exercises}
        </p>
      </>
    )
  }

  console.log("main-i", kurssi.course)
  console.log("main-name", kurssi.course.name)
  console.log("main-id", kurssi.course.id)
  console.log("main-parts", kurssi.course.parts)

return (
    <div>
         <Header  course={kurssi.course.name} /> 
         {/* {kurssi.course.parts.map(part => 
          <Part part={part} />
      )} */}
         <Content parts={kurssi.course.parts}  />
         {/* <Total   parts={kurssi.course.parts}  /> */}
    </div>
    )
}
    
/*
App
  Course
    Header
    Content
      Part
      Part
      ...
*/


 export default Course
