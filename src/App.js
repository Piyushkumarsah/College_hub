import './App.css';
import Home from './components/Home'
import Login from './components/login'
import Register from './components/register'
// import Chapter from './components/chapter'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Parallax } from 'react-parallax';
// import Image from "./assets/5853.jpg"
import Chapter from './components/chapter';
function App() {
  return (
    <>
      <div className='h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<Register></Register>} />
            <Route path='/' element={<Home></Home>} />

          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
