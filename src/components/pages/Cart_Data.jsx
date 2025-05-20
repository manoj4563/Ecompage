import React from 'react'
import Usershow from '../innercomponent/wrappedcomponent/usershow'
import '../Styles/Cart_DataStyle.css'
import { useLocation ,useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
const Cart_Data = () => {
    const location = useLocation();
    const [user_cart_data, setUser_cart_data] = useState([]);
    
    const navigate=useNavigate()
    useEffect(() => {
        let data = JSON.parse(window.localStorage.getItem("UserDetail"));
        let userindex = data.findIndex(user => user.name === location.state.name);
        setUser_cart_data(data[userindex].Add_cart_product)
    }, [])

    const handlebuy=(usercart)=>{
        navigate('/buy_product',{state:{name:location.state.name,product:usercart}})
    }
    
    return (
        <div className='cart-container'>
            <Usershow name={location.state.name} />
                <div className='cart-inner'>
                {
                    user_cart_data.map((usercart) => {
                        return (<div className='cart-inner1'>
                            <h1>{usercart.name}</h1>
                            <img src={usercart.img} />
                            <span>price${usercart.price}</span>
                           
                            <button onClick={()=>handlebuy(usercart)}>BUY NOW</button>
                        </div>)
                    })
                }
                </div>
            
        </div>
    )
}

export default Cart_Data