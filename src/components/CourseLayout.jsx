
import React from 'react'
import { Outlet } from 'react-router-dom'
import courses from '../data/DummyData'
import { Link } from 'react-router-dom'

const CourseLayout = () => {
  return (
    <>
     <div className=" bg-amber-950  text-white py-12 mb-8">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-2">Explore Our Courses</h1>
    <p className="text-lg opacity-90">
      Learn new skills and upgrade your career
    </p>
  </div>
</div>

<div className="max-w-6xl mx-auto px-6 my-8 flex gap-4 justify-center">
        <Link
          to="/course"
          className="px-4 py-2 border rounded hover:bg-gray-100">
          All Courses
        </Link>
        <Link
          to="/course/videolessons"
          className="px-4 py-2 border rounded hover:bg-gray-100">
          Video Lessons
        </Link>
        <Link
          to="/course/notes"
          className="px-4 py-2 border rounded hover:bg-gray-100">
          Notes
        </Link>
      </div>




      <Outlet />

    </>
  )
}

export default CourseLayout
