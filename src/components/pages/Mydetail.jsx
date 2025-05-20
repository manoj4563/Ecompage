import React from 'react'
import { useLocation } from 'react-router-dom'
import Usershow from '../innercomponent/wrappedcomponent/usershow';
import'../Styles/MydetailStyle.css';
const Mydetail = () => {
    const location=useLocation();
    const data =JSON.parse(window.localStorage.getItem("UserDetail"));
    const index=data.findIndex((user)=>user.name===location.state.name)
    console.log(data[index]);
  return (
    <div className='mydetail-container'>
        <Usershow name={location.state.name}/>
        {
            
            <div className='mydetail-inner'>
                <p>Name:{data[index].name}</p>
                <p>Age:{data[index].age}</p>
                <p>Password:{data[index].password}</p>
                <p>Cart Product:{data[index].Add_cart_product .length}</p>
                <p>Buyed Product:{data[index].buyed_product.length}</p>
            </div>
        }
    </div>
  )
}

export default Mydetail