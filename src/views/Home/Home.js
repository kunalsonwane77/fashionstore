import React from 'react'
import "./Home.css"
import Card from '../../components/Fashioncard/Card'



const bags = [
  {
    imgurl: "https://skybags.co.in/cdn/shop/files/BPKWD01BLK.png?v=1698142611",
    title: "Blackwick",
    discription: "sky bag wihSkybags Kwid 01 School Backpack Black",
    star: true,
    price: 560
  },
  {
    imgurl: "https://skybags.co.in/cdn/shop/files/BPSDSC02YLW.png?v=1698143551",
    title: "SkyBags",
    discription: "Skybags Squad Plus 02 School Backpack,waterproof",
    star: false,
    price: 650
  },
  {
    imgurl: "https://skybags.co.in/cdn/shop/files/BPSQPR04SBL.png?v=1698144146",
    title: "Drip",
    discription: "Skybags Squad Pro 04 School Backpack Sky Blue,waterproof",
    star: false,
    price: 700
  },
  {
    imgurl: "https://skybags.co.in/cdn/shop/products/BPDRP4LBL_1_1800x1800.webp?v=1693895124",
    title: "DripPro",
    discription: "Skybags Drip Pro 04 Backpack Light Blue zig design",
    star: true,
    price: 540
  },

]




const Home = () => {
  return (
    <div>
      <h1 className='head'>Fashionstore</h1>

      <div className='bagcardcontainer'>
        {bags.map((bagdetails) => {

          return <Card
            imgurl={bagdetails.imgurl}
            title={bagdetails.title}
            discription={bagdetails.discription}
            star={bagdetails.star}
            price={bagdetails.price} />

        })}

      </div>
    </div>
  )
}

export default Home