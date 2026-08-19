"use client";

import Link from "next/link";

import {
  FaArrowLeft,
  FaRedo,
  FaHome,
} from "react-icons/fa";

import { useSearchParams } from "next/navigation";

import { Suspense } from "react";

function ResultPage() {

    const searchParams = useSearchParams();

    const score = Number(searchParams.get("score"));

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#4F8986]">

        <section className="relative min-h-[650px] overflow-hidden bg-[#4F8986] px-4 pt-5 sm:px-6 md:min-h-[700px] md:px-10">

            <div className="absolute -left-32 -top-32 h-[330px] w-[330px] rounded-full bg-white/[0.05] sm:h-[420px] sm:w-[420px]" />

            <div className="absolute -right-20 top-16 h-[210px] w-[210px] rounded-full border border-white/[0.05] bg-white/[0.03] sm:h-[270px] sm:w-[270px]" />

            <div className="absolute left-20 top-[390px] h-[70px] w-[70px] rounded-full bg-white/[0.04] sm:h-[90px] sm:w-[90px]" />


            <header className="relative z-10 flex items-center justify-center mb-5">

                <Link href="/quiz" className="absolute left-1 top-1 flex h-10 w-10 items-center justify-center text-white transition hover:scale-105">

                    <FaArrowLeft className="text-xl sm:text-2xl" />
                    
                </Link>

                <h1 className="text-[24px] font-bold text-white sm:text-[28px]">
                    Result
                </h1>

            </header>

            <div className="flex w-full justify-center">

                <div className="h-[170px] w-[170px] bg-white rounded-full flex items-center justify-center border border-10 border-[#005A56]">

                
                    <span className="text-[34px] font-bold leading-none text-[#005A56]">
                        {score}/10
                    </span>

                </div>

            </div>


            <div className="text-center my-10">
                <p className="text-capitalize text-[28px] text-white">Excellent!</p>
                <span className="text-[16px] text-white">Great job! You answered most <br/> questions correctly.</span>
            </div>

            

            <div className="mt-10 flex items-center flex-col gap-4">


                {/* Play Again */}

                <Link
                href="/quiz"
                className="
                    flex h-[60px] max-w-[400px] w-full
                    items-center justify-center gap-4
                    rounded-[20px]
                    bg-[#005A56]
                    text-[18px] font-bold text-white
                    shadow-sm
                    transition
                    hover:bg-[#004D49]
                    active:scale-[0.98]
                    sm:h-[66px] sm:text-[21px]
                "
                >
                <FaRedo className="text-xl" />
                <span>Play Again</span>
                </Link>



                {/* back to categories */}

                <Link
                href="/category"
                className="
                    flex h-[60px] w-full max-w-[400px]
                    items-center justify-center gap-4
                    rounded-[20px]
                    text-[18px] font-bold text-white
                    transition
                    bg-[#F2B94E]
                    active:scale-[0.98]
                    sm:h-[66px] sm:text-[21px]
                "
                >
                <FaArrowLeft className="text-xl" />
                <span>Back to Categories</span>
                </Link>



                {/* Home */}

                <Link
                href="/welcome"
                className="
                    flex h-[60px] max-w-[400px] w-full
                    items-center justify-center gap-4
                    rounded-[20px]
                    border-2 border-[#005A56]
                    bg-transparent
                    text-[18px] font-bold text-[#005A56]
                    transition
                    hover:bg-white
                    active:scale-[0.98]
                    sm:h-[66px] sm:text-[21px]
                "
                >
                <FaHome className="text-xl" />
                <span>Back to Home</span>
                </Link>

            </div>

        </section>

    </main>
  );
}

export default function Result() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultPage />
    </Suspense>
  );
}