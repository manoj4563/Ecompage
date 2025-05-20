import { useState } from 'react';
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import'../../Styles/UsershowStyle.css'


const Usershow = (props) => {
  const [Indiviual, setIndiviual] = useState(true);
  const handlecart = () => {
    navigate('/cart_data', { state: { name: props.name } });
  }
  const navigate = useNavigate();

  const setIndiviualDetail = () => {
    setIndiviual(prev => !prev);
  }

  const handlemydetail=()=>{
    navigate('/mydetail',{state:{name:props.name}})
  }
   const handlemyorder=()=>{
    navigate('/myorder',{state:{name:props.name}})
  }

  return (
    <div className='usershow-container'>
      <div className='usershow-inner'>
        <button onClick={setIndiviualDetail}>{props.name[0]}</button>

      </div>
      <div  className='usershow-cart' onClick={handlecart}>
          <FaShoppingCart />
      </div>
      <div className={Indiviual ? "notAvailable" : "Available"}>
        <button onClick={handlemydetail}>My Detail</button>
        <button onClick={handlemyorder}>MY Orders</button>
      </div>

    </div>
  )
}

export default Usershow