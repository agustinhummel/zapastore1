import React from 'react';
import { Link } from "react-router-dom";

const navBar = () => {
  return (
        <header class="text-gray-600 body-font bg-black font-roboto">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-white cursor-pointer lg:justify-start md:ml-auto">
            <Link to={`https://www.instagram.com/zapa_store3/`} ><a class="mr-5 hover:text-red-600 text-xl">ZAPASTORE</a></Link> 
            <Link to={`/`}><a class="mr-5 hover:text-red-600 text-xl">Home</a></Link> 
            </nav>
            <a class="flex order-first lg:order-none  items-center  lg:items-center lg:justify-center">
                <img class="h-36 hover:rotate-[17deg]" src="https://res.cloudinary.com/dc0rv28n2/image/upload/v1686248989/zapastore/Logo_calco_png_uunagz.png" alt="" />
            </a>

            <nav class="flex lg:w-2/5 flex-wrap items-center text-white cursor-pointer lg:justify-end md:ml-auto">
            <Link to={`product`}><a class="mr-5 hover:text-red-600 text-xl">Productos</a></Link> 
            <a href='#contact' class="hover:text-red-600 text-xl">Contactos</a>
            </nav>
        </div>
        </header>
  )
}

export default navBar
