"use client"

import Image from "next/image"
import Link from "next/link"

import { useState } from "react"

import logo from "../assets/quiz-logo.png"

export default function StarScreen(){

    const [name , setName] = useState("");

    const handleFillName = (e) =>{
        if(name.trim() === ""){
            alert("please enter the name");
            e.preventDefault();    
            return;
        }
    }
    return(
        <main>

            <div className="bg-[#9b9b9b]">

                <div className="relative w-full min-h-screen overflow-hidden bg-[#5B8F8B]">
                    
                    <div className="absolute -top-20 -left-20 h-54 w-54 sm:h-64 sm:w-64 rounded-full bg-white/5" />

                    <div className="absolute top-[-70px] right-[-80px] h-62 w-62 sm:h-72 sm:w-72 rounded-full bg-white/5" />

                    <div className="absolute top-[130px] right-[-50px] h-26 w-26 sm:h-36 sm:w-36 rounded-full bg-white/5" />


                    <section className=" p-5 sm:p-0">

                        <div className="pt-20">
                            
                            <Image
                                src={logo}
                                alt={logo}
                                className="w-[200px] h-[200px] mx-auto"
                            />

                        </div>

                        <div className="w-full max-w-[500px] mx-auto pt-30">

                            <label className="mb-4 block text-[18px] font-semibold text-white">
                                Enter your name
                            </label>

                            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Deh..." className="h-[68px] w-full rounded-[26px] border border-white bg-transparent px-7 text-[14px] text-white outline-none placeholder:text-white/80 focus:ring-0"/>

                        </div>

                        <div className="w-full max-w-[450px] mx-auto mt-40 mb-10">
                            
                            <Link onClick={handleFillName} href="/category" className=" w-full h-[68px] rounded-[20px] bg-[#FFD166] text-white text-[24px] font-bold flex items-center justify-center transition duration-200 hover:bg-[#F8C85B] active:scale-[0.98]">Start</Link>

                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}