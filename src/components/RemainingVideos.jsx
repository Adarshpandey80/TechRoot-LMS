import React from "react";
import videoLessons from "../data/DummyVideolesson";

function RemainingVideos() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <h1 className="text-2xl font-bold mb-6 text-center">
        Continue Learning
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoLessons.slice(0, 5).map((video) => (
          <div
            key={video.id}
            className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <video
              src={video.videoUrl}
              controls
              className="w-full h-40 object-cover"
            />

            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1">
                {video.title}
              </h3>
              <p className="text-xs text-gray-500">
                {video.course}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Duration: {video.duration} • {video.level}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RemainingVideos;
