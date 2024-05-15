import React from  'react';
import { Routes,Route,Navigate} from 'react-router-dom'

import Home from "../pages/Home";
import AllFoods from "../pages/Allfoods";
import FoodDetails from "../pages/foodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contect";
import Login from "../pages/login";
import Register from "../pages/Register";

const Routees=()=>{
    return<Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/foods'element={<AllFoods/>}/>
        <Route path='/foods/:id'element={<FoodDetails/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
    </Routes >
        
   
}
export default Routees;