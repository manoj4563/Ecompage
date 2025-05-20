import React, { useState, useRef, useEffect } from 'react';
import '../Styles/SignupStyle.css';

import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const firstinput = useRef();
  const passinput = useRef();
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [namespan, setnamespan] = useState(false);
  const [passwordspan, setpasswordspan] = useState(false);
  const [age, setage] = useState(0);
  const ageinput = useRef();
  const [agespan, setagespan] = useState(false);
  const [changepass, setchangepass] = useState("");
  const [changespan, setchangespan] = useState(false);
  const confirminput = useRef();
  const [sign, setsign] = useState(false);


  const navigate=useNavigate();
  useEffect(() => {

    firstinput.current.focus();

  }, [])


  useEffect(() => {
    if (password === changepass) {
      setchangespan(false);
    }
    else {
      setchangespan(true);
    }
  }, [changepass])

  useEffect(() => {
    console.log(name.length)

    if (name.length > 0 && name.length < 10) {
      setnamespan(true);
    }
    else if (name.length === 10) {
      setnamespan(false);
      ageinput.current.focus();
    }
  }, [name])

  useEffect(() => {

    if (password.length < 10 && password.length > 0) {
      console.log(password.length)


      setpasswordspan(true);



    }
    if (password.length === 10) {
      console.log(password);
      confirminput.current.focus();
      setpasswordspan(false);
    }
  }, [password])

  useEffect(() => {
    if (age !== 0 && age > 17) {
      setagespan(false);
      passinput.current.focus();

    }
    else if (age > 0 && age < 18) {
      setagespan(true);
    }
  }, [age])


  const handlename = (e) => {

    setname(e.target.value)
  }
  const handleage = (e) => {
    setage(e.target.value);
  }


  const handlesignup = (e) => {
  e.preventDefault();

  if ((!namespan && !passwordspan && !agespan && !changespan) &&
      (name !== "" && password !== "" && age !== "" && changepass !== "")) {

    const rawdata = window.localStorage.getItem("UserDetail");
    const userdata = rawdata ? JSON.parse(rawdata) : [];

    const final = {
      name: name,
      password: password,
      buyed_product: [],
      Add_cart_product: []
    };

    const updatedUserData = [...userdata, final];

    window.localStorage.setItem("UserDetail", JSON.stringify(updatedUserData));

    alert("Signup successful");
    navigate('/');
  } else {
    setsign(true);
  }
}

  return (

    <div className='signup-container'>
      <div className='signup-head'>
        <h1>Signup page</h1>
      </div>
      <div className='inner-container'>
        <input type='text' placeholder='enter the name' ref={firstinput} onChange={handlename} />
        {namespan && <p>enter the name less than 10character</p>}

        <input type='number' placeholder='enter the age' ref={ageinput} onChange={handleage} />
        {agespan && <p>Age less than 18  are not allowed</p>}
        <input type='text' placeholder='enter the password' ref={passinput} onChange={(e) => { setpassword(e.target.value) }} />
        {passwordspan && <p>enter the correct password</p>}
        <input type='text' placeholder='re-confirm password' ref={confirminput} onChange={(e) => { setchangepass(e.target.value) }} />
        {changespan && <p>enter the same password</p>}
        <button onClick={handlesignup}>Signup</button>
        {sign && <article>enter every field correctly</article>}
      </div>


    </div>

  );
};

export default Signup;
