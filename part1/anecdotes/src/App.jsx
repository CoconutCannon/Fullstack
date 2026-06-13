import { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const randomNumberInRange = (min, max) => {return Math.floor(Math.random()* (max - min + 1)) + min}

const ShowAnecdotes = ({anecdote, selected}) => {
    return(
      <>
        <p>
          {anecdote[selected]}
        </p>
      </>
      
    )
  }

const getMaxIndex = (array) => {
  let max = array[0]
  let index = 0
  for (let i = 0; i < array.length; i++)
  {
    if (max < array[i]){
      max = array[i]
      index = i
    }
  }
  return index
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const anecdotesVotes = new Array(anecdotes.length).fill(0);
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotesVotes)
  const [max, setMax] = useState(0)

  const handleRandomAnecdote = () => {
    setSelected(randomNumberInRange(0, anecdotes.length - 1));
  }

  const handleVotes = (index) => {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
    const max = getMaxIndex(newVotes)
    console.log(max)
    setMax(max)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <ShowAnecdotes anecdote = {anecdotes} selected = {selected}/>
      <p>has {votes[selected]} votes</p>
      <Button onClick={() => handleVotes(selected)} text='vote' />
      <Button onClick={() => handleRandomAnecdote(anecdotes, selected)} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]} <br/>
      has {votes[max]} votes</p>
    </div>
  )
}

export default App