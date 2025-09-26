import React from 'react'
import Navbar from './Components/Navbar'
import AppLayout from './Components/layouts/AppLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/pages/About'
import contact from './Components/pages/contact'
import Search from './Components/pages/Search'
import Help from './Components/pages/Help'
import Cart from './Components/pages/Cart'
import Corporate from './Components/pages/Corporate'
import SignIn from './Components/pages/SignIn'
import Offers from './Components/pages/Offers'
import Home from './Components/pages/Home'
function App() {
    return (
       
            <div>
                 <BrowserRouter>
                 <Routes>
                    <Route path='/' element={<AppLayout/>}>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='about' element={<About/>}></Route>
                    <Route path='contact' element={<contact/>}></Route>
                    <Route path='search' element={<Search/>}></Route>
                    <Route path='help' element={<Help/>}></Route>
                    <Route path='cart' element={<Cart/>}></Route>
                    <Route path='corporate' element={<Corporate/>}></Route>
                    <Route path='offers' element={<Offers/>}></Route>
                    <Route path='signin' element={<SignIn/>}></Route>
                    </Route>
                 </Routes>
                 </BrowserRouter>
            </div>
       
    )
}

export default App