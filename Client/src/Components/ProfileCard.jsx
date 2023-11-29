import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";
import { Link } from "react-router-dom";
import foto from "/src/assets/andrei.jpg";

export default function ProfileCard () {
    const handleCopy = (text) => {
        alert("Copiado!!!")
        const el = document.createElement('textarea');
        el.value = text;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
    
        document.body.appendChild(el);
    
        const selected =
          document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    
        if (selected) {
          document.getSelection().removeAllRanges();
          document.getSelection().addRange(selected);
        }
      };

    return (
        <div className="mx-5 my-5 max-lg:mb-5 flex max-w-screen-sm items-center justify-center">
            <div className="w-full rounded-3xl bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ... p-2">
                <div className="flex flex-col h-full w-full rounded-2xl items-center justify-center bg-gray-800 back px-4 py-6">
                    <img className="w-52 rounded-full mx-auto p-2 bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-50% to-emerald-500 to-90% ..."
                         src={foto}
                         alt="Bogdan Andrei Faur" />
                    
                    <h1 className="text-zinc-300 mt-5 font-jetbrains"
                    >Bogdan Andrei Faur</h1>

                    <div className="flex items-center border-y-[1px] border-zinc-500 my-3">
                        <MdEmail className="text-zinc-200 w-8 h-8 mr-1"
                                 onClick={() => handleCopy('Bogdan.andrei.Faur@gmail.com')}
                                 cursor="pointer"/>
                        <h2 className="text-zinc-300 my-5 font-jetbrains"
                            onClick={() => handleCopy('Bogdan.andrei.Faur@gmail.com')}
                        >Bogdan.andrei.Faur@gmail.com</h2>
                    </div>

                    <div className="flex flex-row text-zinc-200 text-center justify-center">
                        <Link to="https://drive.google.com/file/d/1ToHoloaKWe9_q8novk6Z-1MGtlncKudA/view?usp=sharing" target="_blank">
                            <BiSolidFilePdf className="m-1 w-8 h-8"/>
                        </Link>

                        <Link to="https://github.com/Bogdan-Andrei-Faur" target="_blank">
                            <FaGithubSquare className="m-1 w-8 h-8"/>
                        </Link>

                        <Link to="https://www.linkedin.com/in/bogdan-andrei-faur/" target="_blank">
                            <FaLinkedin className="m-1 w-8 h-8"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}