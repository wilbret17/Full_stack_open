import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
        <p>positive {(good / (good + neutral + bad)) * 100}%</p>
      </div>
    )
  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  return (
    <div>
      <header>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </header>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
