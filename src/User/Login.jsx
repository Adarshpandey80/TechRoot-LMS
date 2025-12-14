import React from 'react'
import { PiHandCoinsLight } from 'react-icons/pi'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    
    const handlSubmit = (e)=>{
        e.preventDefault();
         console.log(email , password);
           

        const storedData = JSON.parse(localStorage.getItem("userData"));
        if(storedData){
            if(storedData.email === email && storedData.password === password){
                toast.success("Login Successful", {position: "top-center"  } );
                navigate("/");
            }else{
                toast.error("Invalid email or password" , {position: "top-center"  } );
            }
        }else{
            toast.error("No user found, please signup first" , {position: "top-center"  } );
            navigate("/signup");
        }
    }
  return (
    <>

  <form
  onSubmit={handlSubmit}
  className="w-full max-w-sm mx-auto mt-20 p-6 bg-white rounded-xl shadow-md flex flex-col gap-4"
>
  <h1 className="text-2xl font-bold text-center text-black flex items-center justify-center gap-2 mb-4">
    Welcome to Learning-Zone
    <PiHandCoinsLight className="text-2xl text-purple-600" />
  </h1>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">Email</label>
    <input
      type="text"
      name="email"
      placeholder="Enter your email"
      required
      onChange={(e) => setEmail(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">Password</label>
    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      required
      onChange={(e) => setPassword(e.target.value)}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  <button
    type="submit"
    className=" bg-white text-black border-b-4 py-2 rounded-md font-semibold hover:bg-gray-800 hover:text-white transition duration-200">
    Login
  </button>

  <p className="text-sm text-center text-gray-600">
    You have no account?
    <Link
      to="/signup"
      className="text-purple-600 font-medium ml-1 hover:underline" >
      Signup
    </Link>
  </p>
</form>

    
    </>
  )
}

export default Login