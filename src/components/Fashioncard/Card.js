import React from 'react'
import "./Card.css"
import imgstar from "./two.png"
import fourimg from "./four.png"

const Card = ({title,discription,star}) => {

 
 

  return (  
    <div className='card'>
        <h1 className='cardtitle'>{title}</h1>
        <p>{discription}</p>

        <img src={star ? imgstar :fourimg } alt="img" className='star'/>
       
    </div>
  )
}

export default Card