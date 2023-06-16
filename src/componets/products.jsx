import React from 'react'
import { Link } from 'react-router-dom';


const products = () => {


  const shoes = [
    {
      id:1,
      name:"Jordan 1 Roja",
      size: [41,43],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252916/zapastore/Jordan_1_diagonal_eqnvmg.jpg",
      price:"16.500",
      marca:"Nike"
    },
    {
      id:2,
      name:"Jordan 1 Verde (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252924/zapastore/Jordan_1_verde_diagonal_qxiheu.jpg",
      price:"16.500",
      marca:"Nike"
    },
    {
      id:3,
      name:"Jordan Low",
      size: [40,41],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252544/zapastore/Dunk_low_diagonal_uhbk8u.jpg",
      price:"14.500",
      marca:"Nike"
    },
    {
      id:4,
      name:"Jordan Air Shadow",
      size: [37],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252537/zapastore/Air_shadow_diagonal_vhudm8.jpg",
      price:"14.500",
      marca:"Nike"
    },
    {
      id:5,
      name:"SB Dunk Pro (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686840920/zapastore/IMG_0703_t0qmj6.jpg",
      price:"18.500",
      marca:"Nike"
    },
    {
      id:6,
      name:"Air Shadow Candy Color",
      size: [39],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921602/zapastore/IMG_0474_essvjv.jpg",
      price:"14.500",
      marca:"Nike"
    },
    {
      id:7,
      name:"Jordan 1 Dior (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686841249/zapastore/IMG_0558_dssxgo.jpg",
      price:"21.000",
      marca:"Nike"
    },
    {
      id:8,
      name:"SB Dunk Pro",
      size: [39],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921620/zapastore/IMG_0780.jpg_aicymj.jpg",
      price:"18.500",
      marca:"Nike"
    },
    {
      id:9,
      name:"SB Jean (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921935/zapastore/IMG_0548_plmnuu.jpg",
      price:"18.500",
      marca:"Nike"
    },
    {
      id:10,
      name:"Jordan 1 Gamuza (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921937/zapastore/jordan_celestt_oq7kt8.jpg",
      price:"19.000",
      marca:"Nike"
    },
    {
      id:10,
      name:"Bad Bunny (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686922702/zapastore/IMG_0832_wt9djv.jpg",
      price:"20.000",
      marca:"Adidas"
    },
    {
      id:11,
      name:"Air Force 1 (SIN STOCK)",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686923683/zapastore/IMG_0452_xluhyk.jpg",
      price:"18.500",
      marca:"Nike"
    },
 
    
  ]


  return (
<section class="text-white body-font bg-gradient-to-r from-neutral-500 to-stone-950 font-roboto">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
        {shoes?.map(s=>(
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to={`/detail/${s.id}`}>
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={s.image}/>
        </a>
        <div class="mt-4">
          <h3 class="text-white text-xs tracking-widest title-font mb-1">{s.marca}</h3>
          <h2 class="text-white title-font text-lg font-medium">{s.name}</h2>
          <p class="mt-1">${s.price}</p>
        </div>
      </Link>
      </div>
        ))}
    </div>
    
  </div>
</section>
  )
}

export default products
