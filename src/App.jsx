import React, { useState } from 'react';
import './App.css';
import Question from './Components/Question';
import quizData from '../src/quizData.js'
import Result from './Components/Result';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));

  const handleAnswerSelect = (index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = index;
    setUserAnswers(updatedAnswers);
  };
  const goToPreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === quizData[index].correctIndex) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers(Array(quizData.length).fill(null));
  };

  return (
    <div className="App min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
      {currentQuestion < quizData.length ? (
  <Question
    question={quizData[currentQuestion].question}
    options={quizData[currentQuestion].options}
    onSelect={handleAnswerSelect}
  />
) : (
  <Result score={calculateScore()} totalQuestions={quizData.length} />
)}

        <div className="mt-4">
        {currentQuestion > 0 && (
            <button
              className="bg-blue-500 text-white py-2 px-4 mr-5 rounded hover:bg-blue-600"
              onClick={goToPreviousQuestion}
            >
              Previous
            </button>
          )}

          
          {currentQuestion < quizData.length && (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Next
            </button>
          )}
          {currentQuestion === quizData.length && (
            <button
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-4"
              onClick={resetQuiz}
            >
              Retake Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
