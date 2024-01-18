"use client";

import React, { useEffect, useState } from 'react';
import Card from "./Card"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FetchLugares = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/lugares.json");
        const data = await response.json();

        setPlaces(data.places);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajusta según tus necesidades
    slidesToScroll: 3,
    lazyLoad: "ondemand",
    draggable: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },

      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },

      },
    ],
  };


  return (
    <Slider {...carouselSettings} className="carrusel">
      {places.map((item, index) => (
        <div key={index} className="bg-zinc-800 tarjeta	rounded-t-lg transition-transform duration-300  hover:scale-105  ">
          <Card item={item} />
        </div>
      ))}
    </Slider>
  );
};

export default FetchLugares;
