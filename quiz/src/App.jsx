import React, { useState } from 'react'
import Question from './components/Question'
import questions from "./questions"
import "./App.css"
import Result from './components/Result'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])


  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1)
    setUserAnswers([...userAnswers, isCorrect])
  }

  const resetQuiz = () => {
    setCurrentQuestion[0]
    setUserAnswers([])
  }
  return (
    <div className='App'>
      <h1>Quiz</h1>
      {currentQuestion < questions.length && (
      <Question question={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>
      )}

      {currentQuestion === questions.length && (
        <Result
        userAnswers={userAnswers}
        questions={questions}
        resetQuiz={resetQuiz}
      /> 
      )}
    </div>
  )
}

export default App
