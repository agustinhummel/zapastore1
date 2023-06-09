import React from 'react';


const navBar = () => {
  return (
        <header class="text-gray-600 body-font bg-black font-roboto">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav class="flex lg:w-2/5 flex-wrap items-center text-white cursor-pointer lg:justify-start md:ml-auto">
            <a class="mr-5 hover:text-red-600 text-xl">ZAPA STORE</a>
            <a class="mr-5 hover:text-red-600 text-xl">Home</a>
            </nav>
            <a class="flex order-first lg:order-none  items-center  lg:items-center lg:justify-center">
                <img class="h-36 hover:rotate-[17deg]" src="https://res.cloudinary.com/dc0rv28n2/image/upload/v1686248989/zapastore/Logo_calco_png_uunagz.png" alt="" />
            </a>

            <nav class="flex lg:w-2/5 flex-wrap items-center text-white cursor-pointer lg:justify-end md:ml-auto">
            <a class="mr-5 hover:text-red-600 text-xl">Products</a>
            <a class="hover:text-red-600 text-xl">Contacts</a>
            </nav>
        </div>
        </header>
  )
}

export default navBar
