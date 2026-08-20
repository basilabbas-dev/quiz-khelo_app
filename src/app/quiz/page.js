"use client";

import { useState, Suspense } from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import quizData from "../data";
import categories from "../data/categories";

function Quiz() {
  
    const searchParams = useSearchParams();

    const category = searchParams.get("category")?.toLowerCase();

    const questions = quizData[category];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const question = questions[currentQuestion];

    const [selected, setSelected] = useState("");

    const router = useRouter();

    const [showConfirm, setShowConfirm] = useState(false);

    const [score, setScore] = useState(0);
    
    // handle-next 
    
    const handleNext = () => {
    if (!selected) {
      alert("Please select an answer");
      return;
    }

    const isCorrect = selected === questions[currentQuestion].answer;

    const newScore = isCorrect ? score + 1 : score;

    setScore(newScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelected("");
    } else {
      router.push(
      `/result?score=${newScore}&category=${encodeURIComponent(category)}`);
    }
  };


  return (
    <div className="min-h-screen bg-[#5F8F8B] flex justify-center px-4 py-6">
      <div className="w-full max-w-md flex flex-col">

        <div className="flex items-center justify-between mb-15">
          <button
            onClick={() => setShowConfirm(true)}
            className="flex items-center gap-2 text-white font-medium"
          >
            <FaArrowLeft className="text-sm" />
            <span>back</span>
          </button>

          <h2 className="text-2xl font-bold text-[#014D4E]">
            {currentQuestion + 1}/{questions.length}
          </h2>

          <div className="w-16"></div>  
        </div>

        <div className="flex justify-center -mb-10 z-10">
        
        </div>

        <div className="bg-white rounded-3xl shadow-xl px-6 pt-10 pb-10">
          <h3 className="text-xl md:text-2xl font-semibold leading-relaxed text-gray-900">
            {question.question}
          </h3>
        </div>

        <div className="mt-10 space-y-5">
          {question.options.map((option) => (
            <div
              key={option}
              onClick={() => setSelected(option)}
              className={`flex items-center justify-between rounded-2xl px-5 py-4 cursor-pointer transition-all duration-300 shadow-sm ${
                selected === option
                  ? "bg-[#B7DDD6]"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <span
                className={`text-lg font-semibold ${
                  selected === option
                    ? "text-[#014D4E]"
                    : "text-gray-900"
                }`}
              >
                {option}
              </span>

              {selected === option ? (
                <FaCheckCircle className="text-[#014D4E] text-xl" />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-500"></div>
              )}
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="bg-[#014D4E] text-white font-semibold text-xl rounded-2xl py-4 w-full mt-12 hover:bg-[#013738] transition-all">
        {currentQuestion === questions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}
        </button>

      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 text-center shadow-2xl">
            
            <h2 className="text-2xl font-bold text-[#014D4E]">
              Leave Quiz?
            </h2>

            <p className="mt-3 text-gray-600">
              Are you sure you want to leave the quiz?
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="w-full rounded-2xl border-2 border-[#014D4E] py-3 font-semibold text-[#014D4E] transition hover:bg-gray-100"
              >
                No
              </button>

              <button
                onClick={() => router.push("/category")}
                className="w-full rounded-2xl bg-[#014D4E] py-3 font-semibold text-white transition hover:bg-[#013738]"
              >
                Yes
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default function QuizPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Quiz />
    </Suspense>
  );
}

