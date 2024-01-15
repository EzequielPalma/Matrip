"use client"
import React from 'react'


export default function CardComer({item}) {
  return (
    <div className="mt-10">
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow   hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 altura max-w-80">
    <img className="object-cover  rounded-t-lg max-h-40	 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg  mt-8" src={item.image} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">El precio medio es <strong>{item.price}</strong></p>

    </div>
</a>
</div>
  )
}
