import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidFilePdf } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function ProfileCard () {
    const handleCopy = (text) => {
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
            
            <div className="flex flex-col p-5 text-center justify-center">
                <img className="w-52 rounded-full mx-auto"
                    src="./src/assets/andrei.jpg"
                    alt="Bogdan Andrei Faur" />
                    
                <h2 className="text-zinc-300 mt-5 font-jetbrains"
                >Bogdan Andrei Faur</h2>

                <div className="flex items-center border-y-[1px] border-zinc-500 my-3">
                    <MdEmail className="text-zinc-200 w-8 h-8 mr-1"
                        onClick={() => handleCopy('Bogdan.andrei.Faur@gmail.com')}/>
                    <h2 className="text-zinc-300 my-5 font-jetbrains"
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
        
    )
}