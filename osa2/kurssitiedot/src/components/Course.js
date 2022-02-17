const Course = (kurssi) => {

  const Header = (props) => {
    console.log("header-i", props)
    return (
      <>
        <h2>
          {props.name}
        </h2>
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

  const Courses = (props) => {
    console.log("course", props)

    return ( 
      <>
      <Header  name ={props.part.name} /> 
      {props.part.parts.map(part => 
        <Part key={part.id} part={part} />
      )}
      <Total   parts={props.part.parts}  /> 
      </>
    )
  }

  console.log("main-i", kurssi.course)
  
return (
    <div>
      <h1>Web development curriculum</h1>
      {kurssi.course.map(part => 
        <Courses key={part.id} part={part} />
      )}
    </div>
    )
}
    
 export default Course
