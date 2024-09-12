import React from 'react'
import "./Home.css"
import Card from '../../components/Fashioncard/Card'

const Home = () => {
  return (
    <div>
        <h1>Fashionstor</h1>
        <Card 
         title="Bags"
         discription="sky bag of with waterproof bag"
         star={true}/>

        <Card 
         title="Bags"
         discription="sky bag of with waterproof bag"
         star={false}/>

           <Card
         title="Bags"
         discription="sky bag of with waterproof bag"
         star={false}/>
        
    </div>
  )
}

export default Home