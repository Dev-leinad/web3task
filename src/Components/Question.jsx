import React from 'react'

const Question = ({ question, options, onSelect }) => {
   return (
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <p className="text-lg font-semibold">{question}</p>
        <div className="mt-4">
          {options && options.map((option, index) => (
            <button
              key={index}
              className="block w-full p-2 mt-2 text-white bg-green-500 rounded hover:bg-green-600"
              onClick={() => onSelect(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Question;