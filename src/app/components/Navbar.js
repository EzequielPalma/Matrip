import React from 'react';
import Link from 'next/link';
import ModalTemp from './ModalTemp';

export default function Navbar() {
  return (
    <nav id="nav" className="fixed inset-x-0 top-0 flex flex-row justify-between z-10 m-2 rounded-md text-white bg-gray-800 bg-opacity-75">
      <div className="p-4">
        <div className="font-extrabold tracking-widest text-xl">
          <Link href="/" className="transition duration-500 hover:text-indigo-200">
            MATRIP
          </Link>
        </div>
      </div>

      <div className="p-4 hidden md:flex flex-row justify-between font-bold">
        <ModalTemp />

        <Link
          href="/sobrenosotros"
          id="hide-after-click"
          className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
        >
          Sobre nosotros
        </Link>

        <Link
          href="/dondecomer"
          id=""
          className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
        >
          ¿Dónde comer?
        </Link>

        <Link
          href="/quever"
          id=""
          className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
        >
          ¿Qué ver?
        </Link>
      </div>
    </nav>
  );
}
