import React from 'react'
import quizzes from '../data/DummyQuizs'
import { useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"

const Quiz = () => {
  const navigate = useNavigate();
  const submitTest = () => {
    toast.success("Your Quiz is Succesfully Submit" , {position : "top-center"})
    navigate("/profile/progress");

  }

  return (
   <>

      <div className="max-w-3xl mx-auto mt-4 p-6 bg-white rounded shadow h-[calc(100vh-120px)] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Quiz</h2>

        {quizzes.map((q) => (
          <div key={q.id} className="mb-6 p-4 border rounded">
            <h3 className="font-medium mb-2">{q.question}</h3>
            <div className="flex flex-col gap-2">
              {q.options.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    className="accent-purple-600"
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-6">
          <button className=" bg-amber-950 text-white py-2 px-6 rounded hover:bg-gray-800 " 
          onClick={submitTest} >
            Submit
          </button>
        </div>
      </div>
    
    
   </>
  
  )
}

export default Quiz
