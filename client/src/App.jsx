import './App.css'
import {Route, Routes} from 'react-router-dom'
import LandingPage from "./pages/landingPage/LandingPage"
import HomePage from './pages/homePage/HomePage'
import ProfilePage from './pages/profilePage/ProfilePage'
import SignIn from './pages/registerPage/SignIn'
import SignUp from './pages/registerPage/SignUp'
import Private from './layout/Private'
import Logout from './components/Logout'
const App = () => {
  return (
  <div className='app'>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route element={<Private/>} >
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
       
      </Route>
     
    </Routes>
  </div>
    
  )
}

export default App
