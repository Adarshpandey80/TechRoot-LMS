import React from 'react';

const Notification = () => {

  const notifications = [
    { id: 1, message: 'New course available: AI Generalist', date: '2025-12-12' },
    { id: 2, message: 'Your quiz results are ready', date: '2025-12-11' },
    { id: 3, message: 'New video added to Full Stack (MERN)', date: '2025-12-10' },
  ];

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((note) => (
            <li
              key={note.id}
              className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition">
              <p className="text-gray-800">{note.message}</p>
              <p className="text-gray-500 text-sm mt-1">{note.date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
