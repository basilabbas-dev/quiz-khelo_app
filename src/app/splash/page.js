"use client"

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import splashImg from "@/app/assets/splash.png"

export default function Splash() {
     const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
        router.push("/welcome");
        }, 4000);

        return () => clearTimeout(timer);
    }, [router]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#4F8986]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.08),transparent_45%)]"/>

      <div className="absolute -left-[110px] -top-[120px] h-[370px] w-[370px] rounded-full bg-white/[0.06] blur-[1px]"/>

      <div className="absolute -left-[40px] -top-[70px] h-[250px] w-[250px] rounded-full bg-white/[0.025]"/> 
      
      <div className="absolute -right-[70px] top-[155px] h-[250px] w-[250px] rounded-full border border-white/[0.06] bg-white/[0.035]"/>

      <div className="absolute left-[120px] top-[300px] h-[90px] w-[90px] rounded-full border border-white/[0.05] bg-white/[0.025]"/>

      <div className="absolute -bottom-[70px] -left-[55px] h-[200px] w-[200px] rounded-full border border-white/[0.06] bg-white/[0.035]"/>

      <div className="absolute -bottom-[180px] -right-[110px] h-[430px] w-[430px] rounded-full border border-white/[0.06] bg-white/[0.025]"/>

      <div className="absolute -bottom-[90px] -right-[40px] h-[260px] w-[260px] rounded-full bg-white/[0.025]"/>


      <section className="">

        <div className="mx-auto pt-30">

          <Image
            src={splashImg}
            alt="splash"
            width={500}
            height={500}
            className="mx-auto"
          />

        </div>

        <div className="w-full mt-15">
            <div className="flex flex-col items-center text-center">

                <h2 className="text-[20px] font-bold text-white">
                Learn. Play. Win.
                </h2>

                <p className="mt-2 max-w-[300px] text-[16px] leading-[1.45] text-white/75">
                Test your knowledge and
                <br />
                become a champion!
                </p>

            </div>
        </div>

        <div className="mt-10 mb-10 flex items-center gap-2 justify-center">

            <span className="h-3 w-3 animate-pulse rounded-full bg-[#FFD166]" />

            <span className="text-[14px] font-medium text-white/80">
              Loading...
            </span>

          </div>

        

        
          
      </section>

    </div>
    
  );
}