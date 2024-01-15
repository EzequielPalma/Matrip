"use client"

import React, { useState } from 'react';
import MiComponente from './MiComponente';

export default function ModalTemp() {
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => {
        setModalAbierto(true);
    };

    const cerrarModal = () => {
        setModalAbierto(false);
    };

    return (
        <>
            <img
                onClick={abrirModal}
                id="temp"
                className="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
                src="images/temp.svg"
                alt="Mi SVG"
            />

            {modalAbierto && (
                <div
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 overflow-y-auto bg-gray-50 bg-opacity-75 flex justify-center items-center"
                    onClick={cerrarModal}
                >
                    <div className="relative rounded-lg shadow w-full max-w-2xl">
                        <div className="p-4 md:p-5 space-y-4">
                            <MiComponente />
                        </div>

                        <div className="flex items-center p-4 md:p-5  rounded-b dark:border-gray-600">
                            <button
                                onClick={cerrarModal}
                                type="button"
                                className="mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Siempre es un buen día para disfrutar Madrid
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
