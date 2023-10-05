import React from "react";

export default function AboutMe () {
    return (
        <div className="bg-[#011522] m-10 rounded-3xl shadow-none transition-shadow shadow-black hover:shadow-2xl text-center">
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

            <div className="flex flex-col items-center">
                <div className="relative flex flex-wrap bg-[#EEE] box-border shadow-[0_0_0px_1px_rgba(0,0,0,0.06)] w-[300px] text-sm p-1 rounded-lg">
                    <label className="flex-auto text-center">
                        <input type="radio" name="radio" className="hidden"/>
                        <span className="flex cursor-pointer items-center justify-center text-slate-700 transition-all duration-[0.15s] ease-[ease-in-out] px-0 py-2 rounded-lg border-[none]"
                        >HTML</span>
                    </label>
                
                    <label className="flex-auto text-center">
                        <input type="radio" name="radio" className="hidden"/>
                        <span className="flex cursor-pointer items-center justify-center text-slate-700 transition-all duration-[0.15s] ease-[ease-in-out] px-0 py-2 rounded-lg border-[none]"
                        >React</span>
                    </label>
                
                    <label class="radio" className="flex-auto text-center">
                        <input type="radio" name="radio" className="hidden"/>
                        <span className="flex cursor-pointer items-center justify-center text-slate-700 transition-all duration-[0.15s] ease-[ease-in-out] px-0 py-2 rounded-lg border-[none]"
                        >Vue</span>
                    </label>
                </div>
            </div>

            <div class="flex items-center space-x-4">
                <input type="radio" id="option1" name="option" value="option1" class="hidden"/>
                <label for="option1" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 mr-2 inline-block rounded-full border border-gray-300"></span>
                    Option 1
                </label>

                <input type="radio" id="option2" name="option" value="option2" class="hidden"/>
                <label for="option2" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 mr-2 inline-block rounded-full border border-gray-300"></span>
                    Option 2
                </label>

                <input type="radio" id="option3" name="option" value="option3" class="hidden"/>
                <label for="option3" class="flex items-center cursor-pointer">
                    <span class="w-4 h-4 mr-2 inline-block rounded-full border border-gray-300"></span>
                    Option 3
                </label>
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