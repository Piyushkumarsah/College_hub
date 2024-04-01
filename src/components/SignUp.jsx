import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);
  const [gender, setGender] = useState("male")
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [tcConditions, setTcConditions] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleTcConditionsChange = () => setTcConditions(!tcConditions);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  const isValidInputs = (name, contact, gender, email, password, confirmPassword) => {
    if (name === "" || contact === "" || gender === "" || email === "" || password === "" || confirmPassword === "") {
      return false;
    }
    return true;
  }
  const registerAttempt = () => {
    if (!isValidInputs(name, contact, gender, email, password)) {
      toast.error("Fields can't be empty !");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid Email !");
      return;
    }
    if (tcConditions === false) {
      toast.error("Please accept the Terms & Conditions");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password doesn't match !")
      return;
    }
    const details = {
      name: name,
      email: email,
      password: password,
      phone: contact,
      gender: gender
    }
    axios.post("http://localhost:5000/register", details)
      .then(response => {
        console.log(response)
        toast.success(response.data.message);
        localStorage.setItem("userDetails", JSON.stringify(details.name));
        sessionStorage.setItem('userSession', email);
        navigate('/');
        navigate("/");
      })
      .catch(err => {
        console.log("erro is", err);
        toast.error(err.response.data.message);
      })

  }
  return (
    <div className='bg-black'>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1 text-white font-bold text-2xl ">Sign up</label>
          </div>
          {/* <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div> */}
          <input className="text-sm w-full px-4  py-2  border border-solid border-gray-300 rounded mt-4 bg-transparent text-white" type="text" placeholder="Full Name" onChange={handleNameChange} />

          <select className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-transparent text-white" name="Gender" id="#" >
            <option className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-black text-white" value="male" onChange={handleGenderChange}>Male</option>
            <option className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-black text-white" value="Female" onChange={handleGenderChange}>Female</option>
          </select>

          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-transparent text-white" type="text" placeholder="Email Address" onChange={handleEmailChange} />

          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-transparent text-white" type="password" placeholder="Password" onChange={handlePasswordChange} />

          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-transparent text-white" type="password" placeholder="Confirm Password" onChange={handleConfirmPasswordChange} />

          <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 bg-transparent text-white" type="number" placeholder="Phone Number" onChange={handleContactChange} />

          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" onClick={handleTcConditionsChange} />
              <span>I Agree to <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Terms</a> and <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">Privacy Policy</a> </span>
            </label>

          </div>
          <div className="text-center md:text-left">
            <button className="mt-4 bg-gradient-to-r from-orange-400 to-orange-500  hover:bg-blue-700 px-4 py-2 text-white capitalize rounded text-xs tracking-wider" type="submit" onClick={registerAttempt}>SignUp</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Have an account? <Link className="text-orange-400 hover:underline hover:underline-offset-4" to='/login'>Sign In</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignUp;