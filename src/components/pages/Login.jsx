import React from 'react';
import { useState, useEffect, useRef } from 'react';

import'../Styles/LoginStyle.css';

import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const firstinput = useRef();
  const passinput = useRef();
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [namespan, setnamespan] = useState(false);
  const [passwordspan, setpasswordspan] = useState(false);
  const [logi23, setlogi23] = useState(false);
  
  
  const navigate = useNavigate();
  

  
 


  useEffect(() => {
    
    
    firstinput.current.focus();

  }, [])

 

  useEffect(() => {
   
    if (name.length < 10 && name.length > 0) {
      setnamespan(true);

    }
    else if(name.length===10){
      passinput.current.focus();
      setnamespan(false);
    }
  }, [name])

  useEffect(() => {
    

    if (password.length < 10 && password.length > 0) {
      setpasswordspan(true);
    }
    if (password.length === 10) {
      
      setpasswordspan(false);
    }
  }, [password])


  const handlename = (e) => {

    setname(e.target.value)
  }
  const handleSubmit = () => {
  if ((!namespan && !passwordspan) && (name !== "" && password !== "")) {
     const userdataRaw = window.localStorage.getItem("UserDetail");
      const userdata = userdataRaw ? JSON.parse(userdataRaw) : [];
    const match =userdata.find((data)=>{
      if(data.name===name && data.password===password){
        return true; 
      }
      return false;
    })
    if(match){
        navigate('/landing',{state:{name:name},required:true})
    }
    else {
      setlogi23(true);
    }
  } else {
    setlogi23(true);
  }
};

  const handlesignup=()=>{
    navigate('/signup');
  }

  return (
    <div className='login-container'>
      <h1>Welcome!</h1>
      <h4>Login To See New Deals in our websites</h4>
      <input type='text' placeholder='enter the name' ref={firstinput} onChange={handlename} />
      {namespan && <article className='article1'>enter the name less than 10character</article>}
      <input type='text' placeholder='enter the password' ref={passinput} onChange={(e) => { setpassword(e.target.value) }} />
      {passwordspan && <article className='article1'>enter the correct password</article>}
      <button onClick={handleSubmit}>Login</button>
      {logi23 &&
        <div>
          <article className='between-button'>enter the correct data or</article>
          <button onClick={handlesignup}>signup</button>
        </div>
      }

    </div>


  );
};

export default Login;
