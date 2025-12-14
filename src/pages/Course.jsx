import React from 'react'
import courses from '../data/DummyData'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Course = () => {
  const navigate = useNavigate();
  const [searchCourese, setSearchCourese] = useState("");


  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition" >

            <img
              src={course.img}
              alt={course.title}
              className="w-full h-40 object-cover"
            />


            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {course.description}
              </p>

              <div className="text-sm text-gray-700 space-y-1">
                <p><span className="font-medium">Duration:</span> {course.duration}</p>
                <p><span className="font-medium">Level:</span> {course.level}</p>
              </div>

              <p className="mt-2 font-semibold text-gray-900">
                ₹{course.price}
              </p>

              <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition" 
                onClick={() => navigate(`/course/${course.id}`)}>
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>

    </>

  )
}

export default Course