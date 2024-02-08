import React from 'react'

export default function Abhinav() {
  return (
    <div>
        <div className="flex justify-center items-center h-screen">
            <img src="5853.jpg" alt="" className="-z-20">
            <div className="bg-white p-8 rounded shadow-md w-96 absolute ">
            <h1 className="text-2xl font-bold mb-6 ">Log in</h1>
            <form action="connect.php" method="post">
                <div className="mb-4">
                <label for="firstname" className="block text-sm font-medium text-gray-800 ">First Name</label>
                <input type="text" id="firstname" name="firstname" className=" hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div className="mb-4">
                <label for="lastname" className="block text-sm font-medium text-gray-800">Last Name</label>
                <input type="text" id="lastname" name="lastname" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-800">Gender</label>
                <select id="gender" name="gender" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option value="m" >Male</option>
                    <option value="f">Female</option>
                    <option value="o">Others</option>
                </select>
                </div>
                <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div className="mb-6">
                <label for="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input type="tel" id="mobile" name="mobile" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div className="flex justify-center items-center">
                <button type="submit" className="hover:scale-110 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Submit</button>
                </div>
                <div className="flex justify-center mt-5"><h3 className="font-medium text-sm">Don't have an account  </h3><span className="text-blue-800 underline mx-3   ">Sign up</span></div>
            </form>
            </div>   
        </div>
    </div>
  )
}
