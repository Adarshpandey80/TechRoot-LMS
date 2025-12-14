import React from "react";
import courses from "../data/DummyData";
import videoLessons from "../data/DummyVideolesson";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const recentVideoId = localStorage.getItem("activeVideo");

  const currentVideo = videoLessons.find(
    (video) => video.id === Number(recentVideoId)
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">

      <div>
        <h2 className="text-xl font-bold mb-4">Recently Watched</h2>

        {currentVideo ? (
          <div className="max-w-md border rounded-lg p-4 shadow">

            <video
              src={currentVideo.videoUrl}
              controls
              className="w-full rounded mb-3" />

            <h3 className="font-semibold">{currentVideo.title}</h3>
            <p className="text-sm text-gray-500">
              {currentVideo.course} • {currentVideo.level}
            </p>
          </div>
        ) : (
          <p className="text-gray-500">
            No recent video watched yet. <span className="text-red-600 font-medium">Watch a video first!</span>
          </p>
        )}
      </div>


      <div>
        <h2 className="text-xl font-bold mb-4">Recommended Courses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {courses.slice(0, 4).map((course) => (
            <div
              key={course.id}
              className="border rounded-lg overflow-hidden hover:shadow transition">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-36 object-cover" />
              <div className="p-3">
                <h3 className="font-medium text-sm">{course.title}</h3>
                <p className="text-xs text-gray-500">{course.level}</p>

                <button className="mt-2 w-full bg-black text-white py-1 rounded text-sm hover:bg-gray-600" 
                 onClick={() => navigate(`/course/${course.id}`)}>
                
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Profile;
