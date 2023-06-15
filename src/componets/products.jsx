import React from 'react'
import { Link } from 'react-router-dom';


const products = () => {


  const shoes = [
    {
      id:1,
      name:"Jordan 1 Roja",
      size: [41,42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252916/zapastore/Jordan_1_diagonal_eqnvmg.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:2,
      name:"Jordan 1 Verde",
      size: [41,42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252924/zapastore/Jordan_1_verde_diagonal_qxiheu.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:3,
      name:"Jordan Dunl Low",
      size: [41,42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252544/zapastore/Dunk_low_diagonal_uhbk8u.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:4,
      name:"Jordan Air Shadow",
      size: [41,42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252537/zapastore/Air_shadow_diagonal_vhudm8.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:5,
      name:"Jordan Air Shadow",
      size: [41,42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1686840920/zapastore/IMG_0703_t0qmj6.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:6,
      name:"Jordan Air Shadow",
      size: [41,42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/ar_1:1,c_fill,e_art:hokusai,g_auto,w_1000/v1686841249/zapastore/IMG_0558_dssxgo.jpg",
      price:"20.000",
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
