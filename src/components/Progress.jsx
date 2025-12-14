import React from "react";

const Progress = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">

 
      <h1 className="text-2xl font-bold text-gray-800">
        Learning Progress
      </h1>


      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="font-semibold mb-2">Overall Progress</h2>

        <input
          type="range"
          value="40"
          readOnly
          className="w-full accent-purple-600"
        />
        <p className="text-right text-sm mt-1 font-medium">40%</p>
      </div>

      
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="font-semibold mb-4">My Courses</h2>

        <div className="space-y-4">

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Full Stack (MERN)</span>
              <span>30%</span>
            </div>
            <input type="range" value="30" readOnly className="w-full accent-black" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>JavaScript</span>
              <span>60%</span>
            </div>
            <input type="range" value="60" readOnly className="w-full accent-black" />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>AI Generalist</span>
              <span>15%</span>
            </div>
            <input type="range" value="15" readOnly className="w-full accent-black" />
          </div>

        </div>
      </div>

   
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="font-semibold mb-3">Recently Watched</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>▶ React Fundamentals</li>
          <li>▶ JavaScript Basics</li>
          <li>▶ Introduction to AI</li>
        </ul>
      </div>

    </div>
  );
};

export default Progress;
