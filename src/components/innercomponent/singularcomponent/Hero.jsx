import React, { useEffect,useState } from 'react'
import'../../Styles/HeroStyle.css'
const Hero = () => {
    const images=[
        "https://tse4.mm.bing.net/th?id=OIP.iljgxEs87wkdgoqd503mRwHaEI&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.OTRQLiXmC_qjKmMuU80BfgHaDl&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP._a41IRPQ8Kr10gP_-CFajAHaEo&pid=Api&P=0&h=180"
    ]
    const para=["asdfghjkh wertyui ere are you",
        "ertyuu nhyt are you the ",
        "who dfghj tyu are you"
    ]
    const head=["THE COMMERCE","THE DELIGHTFUL DESIGN","NEW FRESH"]
    const [count,setcount]=useState(0);
    useEffect(()=>{
        const inter=setInterval(()=>{
             setcount(prev=>prev===2 ? 0:prev+1);
        },3000)
        return () => clearInterval(inter);
    },[])
  return (
    <div className='hero-container'>
        <div className='hero-img'>
           <img src={images[count]} alt='img1'/>
        </div>
        <div className='hero-sentence'>
            <h1>{head[count]}</h1>
            <p>{para[count]}</p>
        </div>
    </div>
  )
}

export default Hero