import React from 'react'
// import './App.css'
import './Navbar.css'
import './all.min.css'
import './Home.css'
import Navbar from './component/includes/Navbar'
import Index from './pages/Index'
// import Productpage from './pages/Productpage'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {Route,Routes} from 'react-router-dom'
import Smartphon from './component/Smartphon'
import Lapto from './component/Lapto'
import Fragrance from './pages/Fragrance'
import SkinCare from './pages/SkinCare'
import Grocerie from './pages/Grocerie'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
// import SkinCar from './component/SkinCar'
import { useState,createContext } from 'react'
// import Homedecoration from './pages/Homedecoration'
import Homedeco from './component/Homedeco'
import Furnite from './component/Furnite'
import Watch from './component/Watch'
import Dressess from './pages/Dressess'
import Ashoes from './pages/Ashoes'
import Jewelleries from './pages/Jewelleries'
import Sunglasses from './pages/Sunglasses'
import Automo from './component/Automo'
import Motorcycle from './pages/Motorcycle'
import Lightning from './pages/Lightning'
import Myprofile from './pages/Myprofile'
import Singleproducts from './pages/Singleproducts'
import Carts from './pages/Carts'
// import OurBlog from './pages/OurBlog'
import Bloghead from './component/Bloghead'
export const loggedIn= createContext()
import Comment from './component/Comment'
// import SkinCares from './component/SkinCares'
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)

return(
  <loggedIn.Provider value={[isLoggedIn,setIsLoggedIn]}>
  <>
<Navbar/>
<Routes>
  <Route path='/' element={<Index/>}></Route>
  <Route path='/Smartphones' element={<Smartphon/>}></Route>
  <Route path='/Laptops' element={<Lapto/>}></Route>
  <Route path='/Fragrance' element={<Fragrance/>}></Route>
  <Route path='/SkinCare' element={<SkinCare/>}></Route>
  <Route path='/Groceries' element={<Grocerie/>}></Route>
  <Route path='/Login' element={<LoginPage/>}></Route>
  <Route path='/Register' element={<RegisterPage/>}></Route>
  <Route path='/Homedecoration' element={<Homedeco/>}></Route>
  <Route path='/Furnitures' element={<Furnite/>}></Route>
  <Route path='/Watches' element={<Watch/>}></Route>
  <Route path='/Dresses' element={<Dressess/>}></Route>
  <Route path='/Shoes' element={<Ashoes/>}></Route>
  <Route path='/Jewellery' element={<Jewelleries/>}></Route>
  <Route path='/Sunglasses' element={<Sunglasses/>}></Route>
  <Route path='/Automotive' element={<Automo/>}></Route>
  <Route path='/Motorcycle' element={<Motorcycle/>}></Route>
  <Route path='/Lighting' element={<Lightning/>}></Route>
  <Route path='/Profile' element={<Myprofile/>}></Route>
  <Route path='/Cart' element={<Carts/>}></Route>
  <Route path='/Blog' element={<Bloghead/>}></Route>
  <Route path='/Comment' element={<Comment/>}></Route>
  <Route path="/details/:productId" element={<Singleproducts />} />

</Routes>
 </>
 </loggedIn.Provider>

)
}
export default App
