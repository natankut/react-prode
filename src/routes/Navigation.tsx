import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/Layout/Header'
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SignUp/SignUp'

const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Navigation;