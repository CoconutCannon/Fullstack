const Header = (header) => {
  return(
  <>
    <h1>
      {header.course.name}
    </h1>
  </>
  )
}

const Part = (part) => {
  return(
  <>
    <p>
      {part.name} {part.exercises}
    </p>
  </>
  )
}

const Content = ({content}) => {
  return (
  <>
    <Part name={content.parts[0].name} exercises={content.parts[0].exercises} />
    <Part name={content.parts[1].name} exercises={content.parts[1].exercises} />
    <Part name={content.parts[2].name} exercises={content.parts[2].exercises} />
  </>
  )
}

const Total = ({total}) => {
  return(
  <>
    <p>
      Number of exercises {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises}
    </p>
  </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }



  return (
    <div>
      <Header course={course} />
      <Content content={course} />
      <Total total={course} />
    </div>
  )
}

export default App