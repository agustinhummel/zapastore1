import React from 'react'

const detail = () => {


  const shoes = [
    {
      id:1,
      name:"Jordan 1 Roja",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit",
      size: [41,43],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252916/zapastore/Jordan_1_diagonal_eqnvmg.jpg",
      price:"16.500",
      marca:"Nike"
    },
    {
      id:2,
      name:"Jordan 1 Verde",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252924/zapastore/Jordan_1_verde_diagonal_qxiheu.jpg",
      price:"16.500",
      marca:"Nike"
    },
    {
      id:3,
      name:"Jordan Low",
      description:"El equilibrio perfecto entre elegancia y versatilidad. Las Jordan Low en su clásico diseño en blanco y negro. Con un estilo minimalista y un diseño simple, estas zapatillas se convierten en la opción ideal para complementar cualquier outfit.",
      size: [40,41],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252544/zapastore/Dunk_low_diagonal_uhbk8u.jpg",
      price:"14.500",
      marca:"Nike"
    },
    {
      id:4,
      name:"Jordan Air Shadow",
      description:"Las Air Shadow con un clásico atemporal que eleva tu estilo a otro nivel. Su diseño en blanco puro es sinónimo de elegancia y versatilidad, convirtiéndolas en el complemento perfecto para cualquier outfit. Ya sea que vistas un look casual, deportivo o más formal, estas zapatillas te brindan la combinación ideal de estilo y comodidad.",
      size: [37],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686252537/zapastore/Air_shadow_diagonal_vhudm8.jpg",
      price:"14.500",
      marca:"Nike"
    },
    {
      id:5,
      name:"SB Dunk Pro",
      description:"Descubre la esencia del estilo versátil con las zapatillas SB Pro. Su diseño básico combina a la perfección con cualquier outfit. Estas zapatillas te ofrecen un equilibrio perfecto entre simplicidad y estilo, permitiéndote expresar tu personalidad sin esfuerzo.",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686840920/zapastore/IMG_0703_t0qmj6.jpg",
      price:"18.500",
      marca:"Nike"
    },
    {
      id:6,
      name:"Air Shadow Candy Color",
      description:"Las Air Shadow con un clásico atemporal que eleva tu estilo a otro nivel. Su diseño en blanco puro es sinónimo de elegancia y versatilidad, convirtiéndolas en el complemento perfecto para cualquier outfit. Ya sea que vistas un look casual, deportivo o más formal, estas zapatillas te brindan la combinación ideal de estilo y comodidad.",
      size: [39],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921602/zapastore/IMG_0474_essvjv.jpg",
      price:"14.500",
      marca:"Nike"
    },
    {
      id:7,
      name:"Jordan 1 Dior",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686841249/zapastore/IMG_0558_dssxgo.jpg",
      price:"21.000",
      marca:"Nike"
    },
    {
      id:8,
      name:"SB Dunk Pro",
      description:"Descubre la esencia del estilo versátil con las zapatillas SB Pro. Su diseño básico combina a la perfección con cualquier outfit. Estas zapatillas te ofrecen un equilibrio perfecto entre simplicidad y estilo, permitiéndote expresar tu personalidad sin esfuerzo.",
      size: [39],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921620/zapastore/IMG_0780.jpg_aicymj.jpg",
      price:"18.500",
      marca:"Nike"
    },
    {
      id:9,
      name:"SB Jean",
      size: ["SOLD OUT"],
      description:"Un equilibrio perfecto entre estilo y elegancia. Con su diseño sofisticado y detalles cuidadosamente elaborados, estas zapatillas te brindan una opción única para destacar en cualquier ocasión. Su estilo versátil se adapta a diferentes outfits, desde looks casuales hasta más formales, agregando un toque de sofisticación a tu estilo personal.",
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921935/zapastore/IMG_0548_plmnuu.jpg",
      price:"18.500",
      marca:"Nike"
    },
    {
      id:10,
      name:"Jordan 1 Gamuza",
      description:"Descubre el estilo con las icónicas Jordan 1. Estas zapatillas clásicas se destacan por su versatilidad, permitiéndote crear looks únicos y a la moda en cualquier ocasión. Con su combinación de colores clásicos y atemporales, las Jordan 1 se convierten en el complemento perfecto para cualquier outfit",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686921937/zapastore/jordan_celestt_oq7kt8.jpg",
      price:"19.000",
      marca:"Nike"
    },
    {
      id:10,
      name:"Bad Bunny",
      description:"Descubre el poder de la exclusividad con las zapatillas Bad Bunny. Estas zapatillas únicas te transportan a un mundo de estilo y personalidad distintiva. Con su diseño en tonos marrones y una variedad de detalles impresionantes, como el abrojo, el logo Bad Bunny y la icónica marca Adidas en la suela, estas zapatillas son una verdadera obra de arte en tus pies.",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686922702/zapastore/IMG_0832_wt9djv.jpg",
      price:"20.000",
      marca:"Adidas"
    },
    {
      id:11,
      name:"Air Force 1",
      description:"Sumérgete en el mundo del estilo y la personalidad con las zapatillas Air Force 1. Estas icónicas zapatillas en color blanco con detalles en tela cuadrille te ofrecen un toque de elegancia y moda sin igual. Su diseño clásico se combina a la perfección con cualquier outfit, agregando un toque de sofisticación y autenticidad a tu estilo.",
      size: ["SOLD OUT"],
      image:"https://res.cloudinary.com/dc0rv28n2/image/upload/v1686923683/zapastore/IMG_0452_xluhyk.jpg",
      price:"18.500",
      marca:"Nike"
    },
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
        <div class="p-2 pt-8 mt-8 border-t border-gray-200 text-center"></div>
        {/* <div class="flex mb-4">
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
        </div> */}
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
          <a target='_blank' href={`https://api.whatsapp.com/send?phone=+549376465-1373&text=Hola quisiera reservar un par de ${s.name} `} className="flex" >
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
