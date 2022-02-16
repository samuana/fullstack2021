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
        {props.part.name} {props.part.exercises}
        </p>
      </>
    )
  }

  const Total = (props) => {
    const total = props.parts.reduce( (sum, exe) => {
      return sum += exe.exercises 
    }, 0)

    return ( 
      <>
        <p><strong>
          total of {total} exercises
          </strong></p>
      </>
    )
  }

  console.log("main-i", kurssi.course)
  console.log("main-name", kurssi.course.name)

return (
    <div>
         <Header  course={kurssi.course.name} /> 
         {kurssi.course.parts.map(part => 
          <Part key={part.id} part={part} />
      )}
         <Total   parts={kurssi.course.parts}  />
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
