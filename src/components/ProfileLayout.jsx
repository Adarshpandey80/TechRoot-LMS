import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileLayout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("userData"));

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("activeVideo");
    window.dispatchEvent(new Event("authChange"));

    toast.success(" Logged out. Please sign up again to log in, since localStorage data has been cleared.",{ position: "top-center" } , 5000
    );
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      
      <header className="bg-white shadow px-4  flex items-center gap-3">

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden">
          ☰
        </button>

      </header>


      <div className="flex">

        <aside
          className={`fixed md:static top-0 left-0 z-40 h-full w-64 bg-white shadow-md p-4
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 h-screen`} >
          <h3 className="text-lg font-semibold mb-6">
            Welcome, <span className="text-blue-950 text-2xl">{user?.name}</span>
          </h3>

          <nav className="flex flex-col gap-2 text-sm">
            <Link to="/profile" className="nav-item">Overview</Link>
            <Link to="/profile/mycourse" className="nav-item">My Courses</Link>
            <Link to="/profile/progress" className="nav-item">Progress</Link>
            <Link to="/profile/quizzes" className="nav-item">Quizzes</Link>
            <Link to="/profile/courseNotes" className="nav-item">Notes</Link>
            <Link to="/profile/notification" className="nav-item">Notifications</Link>

            <button
              onClick={logout}
              className="mt-85 bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </nav>
        </aside>

      
        {open && (
          <div
            className="fixed inset-0 bg-black/40 md:hidden"
            onClick={() => setOpen(false)}/>
        )}


       
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default ProfileLayout;
