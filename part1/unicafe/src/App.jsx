import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const StatisticLine = (display) => {
  return (
    <>
      <tr>
        <td>{display.text} </td> 
        <td>{display.value} </td>
      </tr>
    </>
  )
}

const Statistics = ({stat}) => {
    const {good, neutral, bad, all, score} = stat
    if (all === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={all} />
            <StatisticLine text="average" value={score/all} />
            <StatisticLine text="positive" value={`${(good/all) * 100} %`} />
          </tbody>
        </table>
      </>
    )
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [score, setScore] = useState(0)
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
    setScore(score + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setScore(score - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Statistics stat={{good, neutral, bad, all, score}} />
    </div>
  )
}

export default App