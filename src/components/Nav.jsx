import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { useEffect } from 'react';



const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);
   const [student, setStudent] = useState(null);


    const syncStudent = () => {
    const StudentInfo = JSON.parse(localStorage.getItem("userData"));
    setStudent(StudentInfo); 
  };
    
    useEffect(()=>{
        syncStudent();
          window.addEventListener("authChange", syncStudent);
            return () => {
                window.removeEventListener("authChange", syncStudent);
            };
    } , [])


    return (
        <nav className="w-full h-16  bg-yellow-50 flex items-center justify-between px-6 relative font-sans shadow-sm">

            <Link
                to="/"
                className="text-xl font-bold text-black hover:text-purple-600 transition-colors"> Learning-Zone</Link>
            <button
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu" >
                ☰
            </button>

            <ul className="hidden md:flex gap-6">
                <li>
                    <Link to="/" className="text-black hover:text-purple-600 transition-colors">Dashboard </Link>
                </li>

                <li>
                    <Link to="/course" className="text-black hover:text-purple-600 transition-colors" >  Course </Link>
                </li>
                 
                 
       
                 { !student && (
                    <li>
                    <Link to="/login" className="text-black hover:text-purple-600 transition-colors" > Login</Link>
                </li>
              )}
             

             
               
                <li>
                    <Link to="/profile" className="text-black hover:text-purple-600 transition-colors" > <CgProfile size="1.5em" /></Link>
                </li>
            </ul>

            <ul className={`
                md:hidden absolute top-16 right-0 bg-white shadow-lg
                w-48 flex flex-col overflow-hidden transition-all duration-300 z-50
                ${isOpen ? 'h-100% border-t' : 'h-0'}
            `}>
                <li className="border-b">
                    <Link
                        to="/"
                        className="block px-6 py-3 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)} > Dashboard
                    </Link>
                </li>
                <li className="border-b">
                    <Link
                        to="/course"
                        className="block px-6 py-3 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)} >Course
                    </Link>
                </li>
                {!student && (
                    <li className="border-b">
                        <Link
                            to="/login"
                            className="block px-6 py-3 hover:bg-gray-50"
                            onClick={() => setIsOpen(false)} >
                            Login
                        </Link>
                    </li>
                )}



                <li className="py-3">
                    <Link
                        to="/profile"
                        className=" px-6 py-2 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}  > Profile
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;