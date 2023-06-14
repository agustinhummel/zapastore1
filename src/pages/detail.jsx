import React from 'react'

const detail = () => {


  const shoes = [
    {
      id:1,
      name:"Jordan 1 Roja",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit.",
      size: [41, 42],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252916/zapastore/Jordan_1_diagonal_eqnvmg.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:2,
      name:"Jordan 1 Verde",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit.",
      size: [41, 42, 44],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252924/zapastore/Jordan_1_verde_diagonal_qxiheu.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:3,
      name:"Jordan Dunl Low",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit.",
      size: [41, 42, 43],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252544/zapastore/Dunk_low_diagonal_uhbk8u.jpg",
      price:"20.000",
      marca:"Nike"
    },
    {
      id:4,
      name:"Jordan Air Shadow",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit.",
      size: [42, 43, 45],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252537/zapastore/Air_shadow_diagonal_vhudm8.jpg",
      price:"20.000",
      marca:"Nike"
    }
  ]



  return (
    <section class="text-white bg-gradient-to-r from-neutral-500 to-stone-950 font-roboto overflow-hidden">
      {shoes?.map(s=>(
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={s.image}/>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-white tracking-widest">{s.marca}</h2>
        <h1 class="text-white text-3xl title-font font-medium mb-1">{s.name}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class="text-white ml-3">4 Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-white">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed">{s.description}</p>
        <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class="rounded border appearance-none border-red-100 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-black pl-3 pr-10">
                <option>{s.size[0]}</option>
                <option>{s.size[1]}</option>
                <option>{s.size[2]}</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-white pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-white">${s.price}</span>
          <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Reserva YA!!!</button>
          <a target='_blank' href={`https://api.whatsapp.com/send?phone=+549376465-1373&text=Hola quisiera reservar un par de ${s.name} ${s.image}`} className="flex" >
          <button class="rounded-full w-10 h-10 bg-green-600 p-0 border-0 inline-flex items-center justify-center text-white ml-4">
          <ion-icon name="logo-whatsapp"></ion-icon>
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  ))}
</section>
  )
}

export default detail
