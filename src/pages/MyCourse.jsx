 import React from "react";
import courses from "../data/DummyData";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const navigate = useNavigate();

  const videolectures = () => {
        navigate("/remaningvideos")
  };
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">My Courses</h1>

      {courses.length === 0 ? (
        <p className="text-gray-500">You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="border rounded-lg overflow-hidden hover:shadow transition">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover" />

              <div className="p-4">
                <h3 className="font-semibold mb-1">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Level: {course.level}
                </p>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">30%</span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="100"
                    value="30"
                    readOnly
                    className="w-full h-2 rounded-lg appearance-none cursor-default
               bg-gray-200 accent-black"
                  />
                </div>

                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800" 
                onClick={videolectures}>
                  Continue Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourse;  