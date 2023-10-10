import React, { useRef, useState} from "react";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";

export default function AboutMe () {
    const slider = useRef();
    const [activeTab, setActiveTab] = useState("projects");
    const images = [...Array(4).keys()];

    return (
        <div className="bg-[#011522] m-10 pb-2 rounded-3xl shadow-none transition-shadow shadow-black hover:shadow-2xl text-center">
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

            <div className="bg-zinc-800 mx-4 mb-2 p-2 rounded-2xl">
                <div className="flex justify-start text-zinc-200">
                    {activeTab === "projects" ? (
                        <div>
                            <button className="bg-zinc-500 py-2 px-4 rounded-t-2xl"
                                    onClick={() => setActiveTab("projects")}
                            >Proyectos personales</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-zinc-700 ml-2 py-2 px-4 rounded-t-2xl"
                                    onClick={() => setActiveTab("projects")}
                            >Proyectos personales</button>
                        </div>
                    )}

                    {activeTab === "developing" ? (
                        <div>
                            <button className="bg-zinc-500 mx-2 py-2 px-4 rounded-t-2xl"
                                    onClick={() => setActiveTab("developing")}
                            >Proyectos personales</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-zinc-700 mx-2 py-2 px-4 rounded-t-2xl"
                                    onClick={() => setActiveTab("developing")}
                            >Proyectos personales</button>
                        </div>
                    )}

                    {activeTab === "contributions" ? (
                        <div>
                            <button className="bg-zinc-500 mr-2 py-2 px-4 rounded-t-2xl"
                                    onClick={() => setActiveTab("contributions")}
                            >Proyectos personales</button>
                        </div>
                    ) : (
                        <div>
                            <button className="bg-zinc-700 mr-2 py-2 px-4 rounded-t-2xl"
                                    onClick={() => setActiveTab("contributions")}
                            >Proyectos personales</button>
                        </div>
                    )}
                </div>

                <div className="p-4">
                    {activeTab === "projects" ? (
                        <div>
                            <h2 className="text-white">Tab 1</h2>

                            <div className='mx-24'>
                                <div className='flex items-center justify-center w-full h-full '>

                                    <button className='mx-2 text-4xl text-zinc-200' onClick={() => slider.current.scrollLeft -= 1017}>
                                        <MdArrowCircleLeft/>
                                    </button>

                                    <div ref={slider} class='snap-x overflow-scroll scroll-smooth flex items-center justify-start h-[600px] w-[1017px]'>
                                        <video className="rounded-lg" src="/src/assets/Projects/VideogamesPI/Video.mp4" width="1017" height="575" controls muted loop/>
                                        {images.map((e, i) => (
                                            <div key={i} className='snap-start flex flex-shrink-0 w-auto'>
                                                <img src={`/src/assets/Projects/VideogamesPI/Cap-${i}.png`} alt="" className='rounded-lg object-cover object-center w-[1017px] h-[575px]' />
                                            </div>
                                        ))}
                                    </div>
                            
                                    <button className='mx-2 text-4xl text-zinc-200' onClick={() => slider.current.scrollLeft += 1017}>
                                        <MdArrowCircleRight/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : activeTab === "developing" ? (
                        <div>
                            <h2 className="text-white">Tab 2</h2>
                        </div>
                    ) : activeTab === "contributions" ? (
                        <div>
                            <h2 className="text-white">Tab 3</h2>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
        
    )
}