import React from "react";

export default function AboutMe () {
    return (
        <div className="mx-5 max-lg:mb-5 flex max-w-screen-sm items-center justify-center">
            <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ... p-2">
                <div className="flex flex-col h-full w-full rounded-2xl items-center justify-center bg-gray-800 back px-4 py-6">
                    <h2 className="text-zinc-300 font-jetbrains text-2xl border-b-2 border-zinc-300 mb-4">Sobre mi</h2>
                    <p className="text-zinc-300 font-jetbrains text-left"
                    >Full Stack Developer con un año de experiencia en desarrollo web y cinco años en sistemas informáticos,
                    preparacion y reparacion de hardware.</p>
                </div>
            </div>
        </div>
    )
}