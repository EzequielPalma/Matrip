"use client"

import React, { useEffect, useState } from 'react';

const FetchRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/restaurantes.json");
        const data = await response.json();
        setRestaurantes(data.restaurantes);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="contenedorReseñas">
      {restaurantes.map((item, index) => (
        <div key={index} className="tarjeta">
          <h4>{item.name}</h4>
          <hr></hr>
          <h5>{item.description}</h5>
          <hr></hr>
          <p>La puntuación es <strong>{item.price}/10</strong></p>
        </div>
      ))}
    </div>
  );
};

export default FetchRestaurantes;
