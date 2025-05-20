import React from 'react'
import'../Styles/LandingpageStyle.css'

import Usershow from '../innercomponent/wrappedcomponent/usershow'
import Footer from '../innercomponent/wrappedcomponent/Footer'
import { useLocation,useNavigate } from 'react-router-dom'
import Hero from '../innercomponent/singularcomponent/Hero'



const Landingpage = () => {
  const location=useLocation();
  const navigate = useNavigate();
  const handleGrocery=()=>{
    let user_name=location.state.name;
    
    navigate('/grocery',{state:{name:user_name}})
  }
  return (
    <div  className='landing-container'>
       <Usershow name={location.state?.name || "Guest"}/>
       <Hero  className="landing-hero-container"/>
       <div className='landing-hero-grocery'>
        <h1>grocery</h1>
        <button onClick={handleGrocery}>Buy Now</button>
          
       </div>
       <Footer/>

    </div>
  )
}

export default Landingpage