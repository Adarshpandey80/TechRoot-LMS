import React, { useState } from "react";
import videoLessons from "../data/DummyVideolesson";

const VideoLesson = () => {
  const [activeVideo, setActiveVideo] = useState(""); 
 const storeVideo =   localStorage.setItem("activeVideo", activeVideo);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-2">
        Video Lessons
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Click on a lesson to start learning
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-lg shadow p-3">
            {activeVideo === lesson.id ? (
              <video
                src={lesson.videoUrl}
                controls
                autoPlay
                className="w-full h-48 rounded" />
            ) : (
              <img
                src={lesson.thumbnail}
                alt={lesson.title}
                className="w-full h-48 object-cover rounded cursor-pointer"
                onClick={() => setActiveVideo(lesson.id)} />
            )}

            <div className="mt-3">
              <h3 className="font-semibold text-lg">
                {lesson.title}
              </h3>

              <p className="text-sm text-gray-500">
                {lesson.course}
              </p>

              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>{lesson.duration}</span>
                <span>{lesson.level}</span>
              </div>

              {activeVideo !== lesson.id && (
                <button
                  onClick={() => setActiveVideo(lesson.id)}
                  className="mt-3 w-full bg-black text-white py-2 rounded  hover:bg-gray-800 transition">
                  ▶ Play Video
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLesson;
