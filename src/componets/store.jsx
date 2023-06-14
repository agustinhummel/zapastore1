import React from 'react'
import { Link } from "react-router-dom";
import products from './products';

const store = () => {

  const pics = [

    "https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252916/zapastore/Jordan_1_diagonal_eqnvmg.jpg",
    "https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252924/zapastore/Jordan_1_verde_diagonal_qxiheu.jpg",
    "https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252544/zapastore/Dunk_low_diagonal_uhbk8u.jpg",
    "https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252537/zapastore/Air_shadow_diagonal_vhudm8.jpg",

  ]
  return (
    <section class="text-gray-600 body-font bg-gradient-to-r from-neutral-500 to-stone-950 font-roboto">
      
    <Link to={`/product`}>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex w-full mb-20 flex-wrap">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-white lg:w-max lg:mb-0 mb-4">Productos destacados de la semana %</h1>
      
    </div>

    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={pics[0]}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={pics[1]}/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={pics[2]}/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src={pics[3]}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={pics[1]}/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src={pics[2]}/>
        </div>
      </div>
  </div>

  </div>
  </Link>
  <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center"></div>
</section>
  )
}

export default store
