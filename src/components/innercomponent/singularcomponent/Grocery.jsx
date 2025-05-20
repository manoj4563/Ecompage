import React from 'react'
import {  useLocation } from 'react-router-dom';
import Usershow from '../wrappedcomponent/usershow';
import '../../Styles/GroceryStyle.css'

const Grocery = () => {
    
    const location = useLocation();

    const data = JSON.parse(window.localStorage.getItem("productDetail"));

    const handlebuy = (props) => {
        const user =JSON.parse(window.localStorage.getItem("UserDetail"));
        const index = user.findIndex((data)=>(data.name===location.state.name))
        const cart_data=user[index].Add_cart_product;
        const index_cart = cart_data.findIndex(data=>(
             data.name===props.name
        ));
        if(index_cart===-1){
           user[index].Add_cart_product=[...cart_data,props];
           window.localStorage.removeItem("UserDetail")
           window.localStorage.setItem("UserDetail",JSON.stringify(user))
        }
        else{
            alert("already added")
        }

    }

    return (
        <div className='grocery-container'>
            
                 <Usershow name={location.state.name}/>
            
            <div className='grocery-inner'>
                
                    {
                        data.map((data1) => {
                            return (
                                <div className='grocery-inner1'>
                                    <img src={data1.img} alt='img'></img>
                                    <h2>name:{data1.name}</h2>
                                    <h3>count {data1.count}</h3>
                                    <p>detail {data1.product_detail}</p>
                                    <span>price{data1.price}</span>
                                    <button onClick={()=>handlebuy(data1)}>ADD CART</button>
                                </div>
                            )
                        })
                    }
                </div>
            
        </div> 
  )
}

export default Grocery