import React from 'react'
import './App.css'
import ProblemElement from './components/ProblemElement'
import ProblemGenerator from './domain/models/ProblemGenerator'

function App() {
  const problemGenerator = new ProblemGenerator()

  const problems = [
    problemGenerator.generateAdditionType1(),
    problemGenerator.generateAdditionType2(),
    problemGenerator.generateAdditionType3(),
  ]

  return (
    <div className="App">
      {problems.map((problem, index) => (
        <ProblemElement key={index} problem={problem} />
      ))}
    </div>
  )
}

export default App
