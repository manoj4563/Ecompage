import React from 'react'
import Usershow from '../innercomponent/wrappedcomponent/usershow'
import { useLocation } from 'react-router-dom'
import '../Styles/MyorderStyle.css';
const Myorder = () => {
    const location = useLocation();
    const data = JSON.parse(window.localStorage.getItem("UserDetail"));
    const index = data.findIndex((user) => user.name === location.state.name)
    return (
        <div className='myorder-container'>
            <Usershow name={location.state.name} />
            <div className='myorder-inner1'>
                {
                data[index].buyed_product.map((product) => {
               return(        <div className='myoder-inner'>
                        <p>name:{product.name}</p>
                        <img src={product.img} alt='image' />
                        <p>price:{product.price}</p>
                        <p>count:{product.count}</p>
                        <p>paid_price:{product.paid_amount}</p>
                    </div>)
                })
            }
            </div>
        </div>
    )
}

export default Myorder