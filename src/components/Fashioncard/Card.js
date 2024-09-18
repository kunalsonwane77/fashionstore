import React from 'react'
import "./Card.css"
import imgstar from "./two.png"
import fourimg from "./four.png"

const Card = ({imgurl,title,discription,star,price}) => {

 
 

  return (  
    <div className='card'>
      
        <img src={imgurl} alt="url" className='imgcard'/>
        <h1 className='cardtitle'>{title}</h1>
        <p>{discription}</p>
        <b className='pirce'>₹ {price}</b>
        <button>Add to cart</button>
        <img src={star ? imgstar :fourimg } alt="img" className='star'/>

       
       
    </div>
  )
}

export default Card