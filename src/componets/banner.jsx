import React from 'react'
import { Link } from 'react-router-dom'

const banner = () => {
  return (

  
  <section
    class="relative bg-[url(https://res.cloudinary.com/dc0rv28n2/image/upload/v1686576023/zapastore/Untitled_design_20_bcrabg.png)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >
      <div class="max-w-xl text-center font-roboto ltr:sm:text-left rtl:sm:text-right">
        <h1 class="text-3xl font-roboto sm:text-5xl">
            Vestite a la moda 
  
          <strong class="block font-roboto text-rose-700">
          sin romper tu presupuesto
          </strong>
        </h1>
  

  
        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
          >
            Desacarga el catalogo.
          </a>
  
          <Link
            to={`product`}
            class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
          >
            Ver modelos.
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default banner
