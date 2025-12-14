import React from "react";
import notesData from "../data/notes";

const Notes = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Study Notes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notesData.map((note) => (
          <div key={note.id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{note.description}</p>

            <p className="text-xs text-gray-500 mb-3">
              Level: {note.level}
            </p>

            <a
              href={note.pdfUrl}
              download
              className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
