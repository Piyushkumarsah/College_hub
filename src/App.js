import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import theme from './components/our_theme'
import SocialLinks from './components/SocailLinks';
import Section2 from './components/Section2';
import ActiveUser from './components/ActiveUsers';
import Footer from './components/Footer';
import Login from './components/login'
import Register from './components/register'
// import Chapter from './components/chapter'
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import { Parallax } from 'react-parallax';
import Image from "./assets/5853.jpg"
import Chapter from './components/chapter';
function App() {
  return (
    <>
      <div className='h-screen'>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login></Login>}/>
          </Routes>
              <SocialLinks></SocialLinks>
              <Navbar></Navbar>
              <Section1></Section1>
              <ActiveUser></ActiveUser>
              <Section2></Section2>
              <Footer></Footer>
              <Login></Login>
              <Register></Register>
              <Chapter></Chapter>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
