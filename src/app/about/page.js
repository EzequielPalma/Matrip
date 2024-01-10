"use client"

import React, { useEffect, useState } from 'react';

const MiComponente = () => {
  const [resolvedAddress, setResolvedAddress] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/madrid?unitGroup=metric&key=24EC4RLX8SJHKU874KSYCLYRH&contentType=json'
        );
        const data = await response.json();

        // Accede al primer día del array 'days'
        const firstDay = data.days && data.days.length > 0 ? data.days[0] : null;

        setResolvedAddress(data.resolvedAddress);
        setWeatherData(firstDay);
        setLoading(false); // Indicar que la carga ha finalizado
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Indicar que la carga ha finalizado con error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {resolvedAddress ? (
        <h1>{resolvedAddress}</h1>
      ) : (
        loading ? <p>Cargando...</p> : <p>No se pudo obtener la información</p>
      )}
      {weatherData && !loading ? (
        <div>
          <h2>Condiciones: {weatherData.conditions}</h2>
          <p>Descripción: {weatherData.description}</p>
          <img
            src={`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/madrid?unitGroup=metric&key=24EC4RLX8SJHKU874KSYCLYRH&contentType=json&icon=${weatherData.icon}`}
            alt="Ícono del clima"
          />
          <p>Humedad: {weatherData.humidity}%</p>
          <p>Temperatura: {weatherData.temp}°C</p>
        </div>
      ) : null}
    </div>
  );
};

export default MiComponente;
