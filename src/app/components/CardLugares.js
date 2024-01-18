"use client"
import React from 'react'

export default function CardLugares({item}) {
  return (
    <a href="#" className="rounded-t-lg">
      <img className="rounded-t-lg mt-2 scale-75 hwCard" src={item.image} alt="" />
        <div className="flex flex-col justify-between pr-4 pl-4 pb-4  leading-normal">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-slate-100	">{item.name}</h5>
          <p className="mb-3  text-sm text-slate-100	">{item.description}</p>
          <p className="mb-3 text-sm text-slate-100	"> <strong>{item.address}</strong></p>
          
        </div>
  </a>
  )
}
