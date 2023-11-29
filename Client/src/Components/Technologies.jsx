import React from "react";
import node from "/src/assets/Icons/node.png";
import javaScript from "/src/assets/Icons/js.png";
import typeScript from "/src/assets/Icons/typescript.png";
import react from "/src/assets/Icons/react.png";
import angular from "/src/assets/Icons/angular.png";
import express from "/src/assets/Icons/express.png";
import redux from "/src/assets/Icons/redux.png";
import tailwindCSS from "/src/assets/Icons/tailwind.png";
import css from "/src/assets/Icons/css.png";
import html from "/src/assets/Icons/html.png";
import mySQL from "/src/assets/Icons/mysql.png";
import postgre from "/src/assets/Icons/postgre.png";

export default function Technologies () {
    return (
        <div className="mx-5 max-lg:mb-5 flex max-w-screen-sm items-center justify-center">
            <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ... p-2">
                <div className="flex flex-col h-full w-full rounded-2xl items-center justify-center bg-gray-800 back px-4 py-6">
                    <h2 className="text-zinc-300 font-jetbrains text-2xl border-b-2 border-zinc-300 mb-4">Tecnologías</h2>
                    <div className="flex flex-wrap justify-center">

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={node}
                                 alt="Node.js"/>
                            <h3 className="text-zinc-300 font-jetbrains">Node.js</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={javaScript}
                                 alt="JavaScript"/>
                            <h3 className="text-zinc-300 font-jetbrains">JavaScript</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={typeScript}
                                 alt="TypeScript"/>
                            <h3 className="text-zinc-300 font-jetbrains">TypeScript</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={react}
                                 alt="React"/>
                            <h3 className="text-zinc-300 font-jetbrains">React</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={angular}
                                 alt="Angular"/>
                            <h3 className="text-zinc-300 font-jetbrains">Angular</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={express}
                                 alt="Express"/>
                            <h3 className="text-zinc-300 font-jetbrains">Express</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={redux}
                                 alt="Redux"/>
                            <h3 className="text-zinc-300 font-jetbrains">Redux</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={tailwindCSS}
                                 alt="TailwindCSS"/>
                            <h3 className="text-zinc-300 font-jetbrains">TailwindCSS</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={css}
                                 alt="CSS"/>
                            <h3 className="text-zinc-300 font-jetbrains">CSS</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={html}
                                 alt="HTML"/>
                            <h3 className="text-zinc-300 font-jetbrains">HTML</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={mySQL}
                                 alt="MySQL"/>
                            <h3 className="text-zinc-300 font-jetbrains">MySQL</h3>
                        </div>

                        <div className="flex flex-col items-center text-center border-2 border-zinc-300 rounded-xl m-2 py-1 px-4">
                            <img className="w-12"
                                 src={postgre}
                                 alt="Postgre"/>
                            <h3 className="text-zinc-300 font-jetbrains">Postgre</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}