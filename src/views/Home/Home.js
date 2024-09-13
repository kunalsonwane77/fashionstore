import React from 'react'
import "./Home.css"
import Card from '../../components/Fashioncard/Card'

const Home = () => {
  return (
    <div>
       <h1 className='head'>Fashionstore</h1>
      <div className='bagcardcontainer'>
       
        <Card 
         imgurl="https://skybags.co.in/cdn/shop/files/BPKWD01BLK.png?v=1698142611"
         title="Bags"
         discription="sky bag wihSkybags Kwid 01 School Backpack Black"
         star={true}/>

        <Card 
        imgurl="https://skybags.co.in/cdn/shop/files/BPSDSC02YLW.png?v=1698143551"
         title="Bags"
         discription="Skybags Squad Plus 02 School Backpack,waterproof"
         star={false}/>

           <Card
         imgurl="https://skybags.co.in/cdn/shop/files/BPSQPR04SBL.png?v=1698144146"
         title="Bags"
         discription="Skybags Squad Pro 04 School Backpack Sky Blue,waterproof"
         star={false}/>

         <Card
         imgurl="https://skybags.co.in/cdn/shop/products/BPDRP4LBL_1_1800x1800.webp?v=1693895124"
         title="Bags"
         discription="Skybags Drip Pro 04 Backpack Light Blue"
         star={true}/>
        </div>
    </div>
  )
}

export default Home