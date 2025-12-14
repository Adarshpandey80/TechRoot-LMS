import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/DummyData";

const CourseDetails = () => {
  const { id } = useParams();

 
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    return (
      <div className="text-center mt-10 text-gray-500">
        Course not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

  
      <div className="bg-amber-50 text-black rounded-xl p-6 mb-8">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="opacity-90 mt-1">{course.level}</p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

   
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3">Course Overview</h2>

          <p className="text-gray-700 leading-relaxed">
            This course helps you master <strong>{course.title}</strong> with
            practical examples, real-world projects, and step-by-step lessons.
            Perfect for students who want strong fundamentals and hands-on
            experience.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-sm">
            <li>✔ Beginner friendly explanations</li>
            <li>✔ Real-world projects</li>
            <li>✔ Industry-relevant skills</li>
            <li>✔ Certificate after completion</li>
          </ul>

          <button className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Start Learning
          </button>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow">
          <img
            src={course.img}
            alt={course.title}
            className="w-full h-40 object-cover rounded mb-4"
          />

          <h3 className="text-lg font-semibold mb-3">Course Details</h3>

          <div className="text-sm text-gray-700 space-y-2">
            <p><span className="font-medium">Level:</span> {course.level}</p>
            <p><span className="font-medium">Duration:</span> 3–6 Months</p>
            <p><span className="font-medium">Lessons:</span> 40+</p>
            <p><span className="font-medium">Mode:</span> Online</p>
            <p><span className="font-medium">Language:</span> English / Hindi</p>
          </div>

          <button className="w-full mt-5 bg-black text-white py-2 rounded hover:bg-gray-800 transition">
            Enroll Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default CourseDetails;
