"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  FaArrowLeft,
  FaArrowRight,
  FaFutbol,
  FaFlask,
  FaGlobeAsia,
  FaLaptopCode,
  FaFilm,
  FaTrophy,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

import {
  GiCricketBat,
  GiScrollUnfurled,
} from "react-icons/gi";

const categories = [
  {
    name: "Football",
    icon: FaFutbol,
  },
  {
    name: "Cricket",
    icon: GiCricketBat,
  },
  {
    name: "Science",
    icon: FaFlask,
  },
  {
    name: "History",
    icon: GiScrollUnfurled,
  },
  {
    name: "Geography",
    icon: FaGlobeAsia,
  },
  {
    name: "Technology",
    icon: FaLaptopCode,
  },
  {
    name: "Movies",
    icon: FaFilm,
  },
  {
    name: "Sports",
    icon: FaTrophy,
  },
  {
    name: "General Knowledge",
    icon: FaLightbulb,
  },
  {
    name: "Programming",
    icon: FaCode,
  },
];

export default function CategoryPage() {

  const[selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  const handleStartQuiz = () => {
    if (!selectedCategory) {
      alert("Please select a category");
      return;
    }

    router.push(`/quiz?category=${encodeURIComponent(selectedCategory.toLowerCase())}`);
  };

  return (
    <main className="min-h-screen bg-[#9b9b9b] flex justify-center">

        <div className="relative w-full min-h-screen overflow-hidden bg-[#5B8F8B]">


            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/5" />

            <div className="absolute top-[-70px] right-[-80px] h-72 w-72 rounded-full bg-white/5" />

            <div className="absolute top-[170px] -left-20 h-44 w-44 rounded-full border border-white/5" />

            <div className="absolute top-[130px] right-[-50px] h-36 w-36 rounded-full bg-white/5" />


            <header className="relative z-10 px-5 pt-7 sm:px-8 sm:pt-9">

                <button className="flex items-center gap-2 text-white transition hover:opacity-80">

                  <Link href="/welcome" className="text-sm font-medium">
                    <FaArrowLeft className="text-xl" />
                  </Link>
                  
                </button>

                <div className="mt-7 text-center sm:mt-8">

                  <h1
                  className="text-[32px] font-bold tracking-tight text-white sm:text-[38px]">
                  Categories
                  </h1>

                  <p className=" mt-2 text-[15px] font-medium text-white/90 sm:text-[17px]">
                  Choose a category and start quizzing!
                  </p>

                </div>

            </header>

            <section className="mt-20">

              <div className=" mx-auto grid max-w-[520px] p-5 grid-cols-1 sm:grid-cols-2 sm:p-0 gap-4 sm:gap-5">

                {categories.map((category) => {
                const Icon = category.icon;

                return (
                    <button key={category.name} onClick={() => setSelectedCategory(category.name)} className={`group flex min-h-[165px] flex-col items-center justify-center rounded-[22px] bg-white px-3 py-5 text-center shadow-[0_5px_18px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.10)] active:scale-[0.98] sm:min-h-[180px] 
                    ${ selectedCategory === category.name
                       ? "border-4 border-[#005b58]"
                       : "border-4 border-transparent"
                       }`}
                    >

                      <div className=" flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#c4e3df] sm:h-[82px] sm:w-[82px]">
                          <Icon className="text-[42px] text-[#005b58] sm:text-[46px]"/>
                      </div>

                      <h2
                          className="mt-3 text-[18px] font-bold leading-tight text-[#111111] sm:text-[20px]">
                          {category.name}
                      </h2>

                      <p
                          className="mt-1 text-[14px] font-medium text-[#999999] sm:text-[15px]">
                          10 Questions
                      </p>

                    </button>
                );
                })}

              </div>

              <div className="mx-auto mt-10 max-w-[520px] sm:mt-10 p-5 sm:p-0">

                <button onClick={handleStartQuiz} className="flex h-[68px] w-full items-center justify-center gap-4 rounded-[20px] bg-[#005b58] px-6 text-[18px] font-bold text-white shadow-[0_6px_15px_rgba(0,0,0,0.12)] transition hover:bg-[#004d4a] active:scale-[0.98] sm:h-[72px] sm:text-[20px]">

                    <span>
                        Start Quiz
                    </span>

                    <FaArrowRight className="text-xl" />

                </button>

              </div>

            </section>

        </div>

    </main>
  );
}