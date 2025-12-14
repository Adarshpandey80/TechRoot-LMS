import React from 'react'
import courses from '../data/DummyData'
import videoLessons from '../data/DummyVideolesson';
import notes from '../data/notes';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const student = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
     
      <div className="max-w-7xl mx-auto px-4 py-8">

        {student && (
          <div className="bg-black text-white rounded-2xl p-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome back 👋
            </h1>
            <p className="text-gray-300 mt-2">
              Continue your learning journey with TechRoot
            </p>
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 ">
            {courses.slice(0, 4).map((course) => (
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
        </div>


        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Platform Statistics</h2>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="text-gray-500 text-sm">Total Courses</h3>
            <p className="text-3xl font-bold mt-2">
              {courses.length}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="text-gray-500 text-sm">Video Lessons</h3>
            <p className="text-3xl font-bold mt-2">
              {videoLessons.length}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-5">
            <h3 className="text-gray-500 text-sm">Notes</h3>
            <p className="text-lg font-semibold mt-2 text-green-600">
              {notes.length}
            </p>
          </div>
        </div>
      </div>



      <div>
        <h2 className="text-xl font-bold mb-4 text-center">All Courses</h2>

      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-7">
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

export default Dashboard