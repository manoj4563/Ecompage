import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Usershow from '../innercomponent/wrappedcomponent/usershow';
import '../Styles/Buy_productStyle.css';


const Buy_product = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [count, setcount] = useState(1);
    const buy = location.state.product;

    const handleplus = () => {
        setcount(prev => prev + 1)
    }
    const handleminus = () => {
        setcount(prev => prev === 1 ? 1 : prev - 1)
    }
    const Addtobuy = (props) => {
        const data = JSON.parse(window.localStorage.getItem("UserDetail"));
        console.log(data);
        let index = data.findIndex(user => user.name === location.state.name);
        if (index > 0) {
            window.localStorage.removeItem("UserDetail");
        }
        let amount = count * props.price;
        data[index].buyed_product = [...data[index].buyed_product, { nama: props.name, img: buy.img, count: count, price: props.price, paid_amount: amount }]
        let cart_index = data[index].Add_cart_product.findIndex(card => card.name === props.name);
        data[index].Add_cart_product.splice(cart_index, 1);
        window.localStorage.setItem("UserDetail", JSON.stringify(data));
        alert("product has been buyed")
        navigate('/cart_data', { state: { name: location.state.name } })
    }

    return (
        <div className='buy-product-container'>
            <Usershow name={location.state.name} />

            <div className='buy-product-inner'>
                <h1>{buy.name}</h1>
                <img src={buy.img} alt='image'></img>
                <span>Price:{buy.price}</span>
                <button onClick={handleplus}>Add</button>
                <span>{count}</span>
                <button onClick={handleminus}>minus</button>
                <button onClick={() => Addtobuy(buy)}>BUY</button>
            </div>


        </div>
    )
}

export default Buy_product