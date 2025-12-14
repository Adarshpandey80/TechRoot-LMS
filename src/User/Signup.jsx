import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handlChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handlSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        localStorage.setItem("userData", JSON.stringify(formData));
        window.dispatchEvent(new Event("authChange"));
         navigate("/");
         toast.success("Signup Successful , Welcome to Learning-Zone" , { position: "top-center" } );
    

    }
    return (
        <>
            <form
                onSubmit={handlSubmit}
                className="w-full max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md flex flex-col gap-4" >
                <h1 className="text-2xl font-bold text-center text-black mb-4">
                    Welcome to Learning-Zone
                </h1>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handlChange}
                        required
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handlChange}
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                        title="Please enter a valid email address"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-600">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handlChange}
                        required
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        title="Must 8 char [A-Z a-z 0-9 @$!%*?&]"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <button
                    type="submit"
                      className=" bg-white text-black border-b-4 py-2 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition duration-200" >
                    Signup
                   

                </button>

                <p className="text-sm text-center text-gray-600">
                    You have an account?
                    <Link to="/login" className="text-purple-600 font-medium ml-1 hover:underline">
                        Login
                    </Link>
                </p>
            </form>



        </>
    )
}

export default Signup