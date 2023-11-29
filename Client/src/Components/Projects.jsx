import React, { useRef, useState} from "react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AboutMe () {
    const slider = useRef();
    const [activeTab, setActiveTab] = useState("projects");
    const images = [...Array(4).keys()];

    return (
        <div className="mx-10 mb-5 mt-5">
            <div>
                <div className="flex flex-wrap max-lg:flex-col justify-center text-zinc-200">
                    {activeTab === "projects" ? (
                        <div>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... py-2 px-4 rounded-3xl my-4 max-lg:my-1 mr-2 border-2"
                                    onClick={() => setActiveTab("projects")}
                            >Proyectos personales</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... py-[10px] px-4 rounded-3xl my-4 max-lg:my-1 mr-2"
                                    onClick={() => setActiveTab("projects")}
                            >Proyectos personales</button>
                        </div>
                    )}

                    {activeTab === "developing" ? (
                        <div>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... py-2 px-4 rounded-3xl my-4 max-lg:my-1 border-2"
                                    onClick={() => setActiveTab("developing")}
                                    disabled
                            >Proyectos en Desarrollo</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... py-[10px] px-4 rounded-3xl my-4 max-lg:my-1 disabled:opacity-25"
                                    onClick={() => setActiveTab("developing")}
                                    disabled
                            >Proyectos en Desarrollo</button>
                        </div>
                    )}

                    {activeTab === "contributions" ? (
                        <div>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... py-2 px-4 rounded-3xl my-4 max-lg:my-1 ml-2 border-2"
                                    onClick={() => setActiveTab("contributions")}
                            >Contribuciones</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... py-[10px] px-4 rounded-3xl my-4 max-lg:my-1 ml-2"
                                    onClick={() => setActiveTab("contributions")}
                            >Contribuciones</button>
                        </div>
                    )}
                </div>

                <div>
                    {activeTab === "projects" ? (
                        <div className="mx-5 flex max-w-screen-xl items-center justify-center">
                            <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ... p-2">
                                <div className="flex flex-col h-full rounded-2xl items-center justify-center bg-gray-800 back py-5 px-28 max-lg:px-2">

                                    <div id="VideogamesPI">
                                        <h2 className="text-zinc-300 font-jetbrains text-2xl">Videogames PI</h2>
                                        <div>
                                            <div className='flex items-center justify-center w-full h-full '>
                                                <button className='mx-2 text-4xl text-indigo-500' onClick={() => slider.current.scrollLeft -= 1017}>
                                                    <MdArrowCircleLeft/>
                                                </button>

                                                <div ref={slider} className='snap-x snap-start overflow-x-scroll scroll-smooth flex items-center justify-start w-[854px] h-[480px] max-lg:w-[256px] max-lg:h-[144px]'>
                                                    <video className="rounded-xl bg-contain m-0 p-0" src="/src/assets/Projects/VideogamesPI/Video.mp4" controls muted loop/>
                                                    {images.map((e, i) => (
                                                        <div key={i} className='snap-start flex flex-shrink-0 w-auto m-0 p-0'>
                                                            <img src={`/src/assets/Projects/VideogamesPI/Cap-${i}.png`} alt="" className='m-0 p-0 rounded-xl object-center w-[854px] h-[480px] max-lg:w-[256px] max-lg:h-[144px] bg-contain' />
                                                        </div>
                                                    ))}
                                                </div>
                            
                                                <button className='mx-2 text-4xl text-emerald-500' onClick={() => slider.current.scrollLeft += 1017}>
                                                    <MdArrowCircleRight/>
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mt-5 mb-5"
                                        >Videogames PI (Proyecto Individual), se trata de un proyecto que tuve que realizar cuando estaba en el bootcamp "SoyHenry",
                                        es una biblioteca de videojuegos.</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >Se utiliza una api llamada <a className="text-blue-700 underline" href="https://rawg.io/" target="_blank">Rawg</a>,
                                        también se pueden guardar nuevos videojuegos a traves de un formulario, estos se almacenaran en la base de datos.</p>
                                    
                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >La pagina cuenta con búsqueda por nombre, orden alfabetico y rating, filtrado por genero y por base de datos o api.</p>

                                        <div className="flex">
                                            <h3 className="text-zinc-300 font-jetbrains text-lg">Link del repositorio: </h3>
                                            <Link to="https://github.com/Bogdan-Andrei-Faur/PI-Videogames-main" target="_blank">
                                                <FaGithubSquare className="text-zinc-300 text-3xl mx-2"/>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ) : activeTab === "developing" ? (
                        <div className="mx-5 flex max-w-screen-xl items-center justify-center">
                            <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ... p-2">
                                <div className="flex flex-col h-full rounded-2xl items-center justify-center bg-gray-800 back py-5 px-28 max-lg:px-2">

                                    <div id="EnDesarrollo">
                                        <h2 className="text-zinc-300 font-jetbrains text-2xl">En Desarrollo</h2>
                                        <div>
                                            <div className='flex items-center justify-center w-full h-full '>
                                                <button className='mx-2 text-4xl text-indigo-500' onClick={() => slider.current.scrollLeft -= 1017}>
                                                    <MdArrowCircleLeft/>
                                                </button>

                                                <div ref={slider} className='snap-x snap-start overflow-x-scroll scroll-smooth flex items-center justify-start w-[854px] h-[480px] max-lg:w-[256px] max-lg:h-[144px]'>
                                                    <video className="rounded-xl bg-contain m-0 p-0" src="/src/assets/Projects/VideogamesPI/Video.mp4" controls muted loop/>
                                                    {images.map((e, i) => (
                                                        <div key={i} className='snap-start flex flex-shrink-0 w-auto m-0 p-0'>
                                                            <img src={`/src/assets/Projects/VideogamesPI/Cap-${i}.png`} alt="" className='m-0 p-0 rounded-xl object-center w-[854px] h-[480px] max-lg:w-[256px] max-lg:h-[144px] bg-contain' />
                                                        </div>
                                                    ))}
                                                </div>
                            
                                                <button className='mx-2 text-4xl text-emerald-500' onClick={() => slider.current.scrollLeft += 1017}>
                                                    <MdArrowCircleRight/>
                                                </button>
                                            </div>
                                        </div>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mt-5 mb-5"
                                        >Videogames PI (Proyecto Individual), se trata de un proyecto que tuve que realizar cuando estaba en el bootcamp "SoyHenry",
                                        es una biblioteca de videojuegos.</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >Se utiliza una api llamada <a className="text-blue-700 underline" href="https://rawg.io/" target="_blank">Rawg</a>,
                                        también se pueden guardar nuevos videojuegos a traves de un formulario, estos se almacenaran en la base de datos.</p>
                                    
                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >La pagina cuenta con búsqueda por nombre, orden alfabetico y rating, filtrado por genero y por base de datos o api.</p>

                                        <div className="flex">
                                            <h3 className="text-zinc-300 font-jetbrains text-lg">Link del repositorio: </h3>
                                            <Link to="https://github.com/Bogdan-Andrei-Faur/PI-Videogames-main" target="_blank">
                                                <FaGithubSquare className="text-zinc-300 text-3xl mx-2"/>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ) : activeTab === "contributions" ? (
                        <div className="mx-5 flex max-w-screen-xl items-center justify-center">
                            <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ... p-2">
                                <div className="flex flex-col h-full rounded-2xl items-center justify-center bg-gray-800 back py-5 px-28 max-lg:px-2">

                                    <div id="CaravanaSocial">
                                        <h2 className="text-zinc-300 font-jetbrains text-2xl">Caravana Social</h2>
                                        <div>
                                            <div className='flex items-center justify-center w-full h-full '>
                                            <video className="rounded-xl bg-contain m-0 p-0" src="/src/assets/Projects/CaravanaSocial/CaravanaSocial.mp4" controls muted loop/>
                                            </div>
                                        </div>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mt-5 mb-5"
                                        >Bolsa de empleo y capacitación para una ONG llamada Caravana Social, enfocada a personas con
                                        alguna discapacidad o necesidad de inserción al mundo laboral. Diseñada y desarrollada con un
                                        gran enfoque en la accesibilidad de sus usuarios y público objetivo.</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >Fui parte del desarrollo del Front-end y mis tareas eran:</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >● Diseñar, desarrollar y mantener interfaces de usuario atractivas y responsivas utilizando React,
                                        CSS y JavaScript.</p>
                                    
                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >● Implementar y gestionar el estado de la aplicación utilizando Redux para garantizar una
                                        experiencia de usuario coherente.</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >● Crear y mantener servidores web utilizando Node.js y Express, con integración de bases de
                                        datos PostgreSQL a través de Sequelize.</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >● Diseñar y administrar bases de datos PostgreSQL, incluyendo esquemas y consultas.</p>

                                        <p className="text-zinc-300 font-jetbrains text-left max-lg:text-sm mb-5"
                                        >● Trabajar en estrecha colaboración con otros miembros del equipo del proyecto, incluyendo
                                        diseñadores y otros desarrolladores.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
        
    )
}