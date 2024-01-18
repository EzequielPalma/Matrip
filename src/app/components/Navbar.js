"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ModalTemp from './ModalTemp';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Manejar el clic fuera del menú para cerrarlo
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
        closeMenu();
      }
    };

    // Agregar el evento al documento cuando el menú está abierto
    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    // Remover el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav id="nav" className={`fixed inset-x-0 top-0 flex flex-row justify-between z-10 m-2 rounded-md text-white bg-gray-800 bg-opacity-75 ${isOpen ? 'menu-open' : ''}`}>
      <div className="p-4">
        <div className="font-extrabold tracking-widest text-xl">
          <Link href="/" className="transition duration-500 hover:text-indigo-200">
            MATRIP
          </Link>
        </div>
      </div>

      {/* Botón de hamburguesa para dispositivos móviles */}
      <div className="md:hidden p-4">
        {!isOpen && (
          <button onClick={toggleMenu} className="text-white">
            {/* Icono de menú hamburguesa de Heroicons */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )}
      </div>

      {/* Menú de navegación */}
      <div ref={menuRef} className={`p-4 ${isOpen ? 'block' : 'hidden'} flex-col flex md:flex md:flex-row justify-between font-bold`}>
        <ModalTemp closeMenu={closeMenu} />

        <Link
          href="/sobrenosotros"
          id="hide-after-click"
          className="mx-4 text-xs	 md:text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 mb-4 mt-4 md:m-2 "
        >
          Sobre nosotros
        </Link>

        <Link
          href="/dondecomer"
          id=""
          className="mx-4 text-xs	md:text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 mb-4 md:m-2"
        >
          ¿Dónde comer?
        </Link>

        <Link
          href="/quever"
          id=""
          className="mx-4 text-xs	md:text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500 mb-4 md:m-2"
        >
          ¿Qué ver?
        </Link>
      </div>
    </nav>
  );
}
