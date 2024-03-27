import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="bg-transparent text-slate-400 p-8 rounded w-[300px] h-[500px]" style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
                <h1 className="text-2xl font-bold mb-6 ">Log n</h1>
                <form action="connect.php" method="post">
                    <div className="mb-4">
                        <label for="firstname" className="block text-sm font-medium text-slate-400 ">First Name</label>
                        <input type="text" id="firstname" name="firstname" className=" hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label for="lastname" className="block text-sm font-medium text-slate-400">Last Name</label>
                        <input type="text" id="lastname" name="lastname" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-400">Gender</label>
                        <select id="gender" name="gender" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                            <option value="m" >Male</option>
                            <option value="f">Female</option>
                            <option value="o">Others</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label for="email" className="block text-sm font-medium text-slate-400">Email</label>
                        <input type="email" id="email" name="email" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-6">
                        <label for="mobile" className="block text-sm font-medium text-slate-400">Mobile Number</label>
                        <input type="tel" id="mobile" name="mobile" className="hover:scale-110 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="hover:scale-110 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400">Submit</button>
                    </div>
                    <div className="flex justify-center mt-5"><h3 className="font-medium text-sm">Don't have an account  </h3><span className="text-blue-800 underline mx-3   ">Sign up</span></div>
                </form>
            </div>
        </div>
    )
}
