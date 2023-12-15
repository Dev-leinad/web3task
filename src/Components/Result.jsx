import React from 'react';

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <p className="text-lg font-semibold">Quiz Completed!</p>
      <p className="mt-4">Your score is {score} out of {totalQuestions}.</p>
    </div>
  );
};

export default Result;
