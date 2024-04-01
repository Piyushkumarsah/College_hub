import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <>
      <div className='h-screen'>
        <Toaster></Toaster>
        <BrowserRouter>

          <Routes>
            <Route path='/login' element={<Login></Login>} />
            <Route path='/register' element={<SignUp></SignUp>} />
            <Route path='/' element={<Home></Home>} />

          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
