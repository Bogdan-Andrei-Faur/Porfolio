import React from "react";

export default function AboutMe () {
    return (
        <div className="bg-[#011522] m-10 rounded-3xl shadow-none transition-shadow shadow-black hover:shadow-2xl text-center max-w-xl">
            <div className="flex items-center p-2">
                <div className="px-1">
                    <span className="inline-block items-center w-3 h-3 p-1 rounded-full bg-[#ff605c]"></span>
                </div>
                
                <div className="px-1">
                    <span className="inline-block items-center w-3 h-3 p-1 rounded-full bg-[#ffbd44]"></span>
                </div>
                
                <div className="px-1">
                    <span className="inline-block items-center w-3 h-3 p-1 rounded-full bg-[#00ca4e]"></span>
                </div>
            </div>

            <div className="m-2 px-3 pb-3">
                <h2 className="text-zinc-300 font-jetbrains text-2xl border-b-2 border-zinc-300">Sobre mi</h2>
                <br />
                <p className="text-zinc-300 font-jetbrains text-left"
                >Desarrollador full-stack, especializado en front-end.
                Gran parte de mi vida se ha enfocado en distintas ramas de la tecnología,
                aparte me gusta el mundo automobilistico, el deporte, viajar y los videojuegos.</p>
            </div>
        </div>
        
    )
}