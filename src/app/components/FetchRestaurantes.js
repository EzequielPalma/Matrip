"use client"

import React, { useEffect, useState } from 'react';
import CardComer from './CardComer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FetchRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/restaurantes.json");
        const data = await response.json();
        console.log("Datos cargados:", data.restaurantes);

        setRestaurantes(data.restaurantes);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  // Configuración del carrusel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajusta según tus necesidades
    slidesToScroll: 3,
    lazyLoad: "ondemand",
    draggable: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          // slidesToShow: 2,
          // slidesToScroll: 2
        },
      },
    ],
  };

  return (
    <Slider {...carouselSettings} className="carrusel">
      {restaurantes.map((item, index) => (
        <div key={index} className="tarjeta ">
          <CardComer item={item} />
        </div>
      ))}
    </Slider>
  );
};

export default FetchRestaurantes;
