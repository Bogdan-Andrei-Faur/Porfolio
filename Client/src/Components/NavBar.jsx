import React from "react";

export default function NavBar (){
    return (
        <div className="flex bg-[#011522] justify-center absolute mt-5 rounded-full p-2">
            <button className="text-zinc-300 m-2"
            >Sobre mi</button>

            <button className="text-zinc-300 m-2"
            >Proyectos</button>

            <button className="text-zinc-300 m-2"
            >Expreciencia Laboral</button>

            <button className="text-zinc-300 m-2"
            >Tecnologías</button>

            <button className="text-zinc-300 m-2"
            >Certificados</button>

            <button className="text-zinc-300 m-2"
            >Contactar</button>
        </div>
    )
}