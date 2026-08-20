import Image from "next/image";

import StartScreen from "../components/StartScreen";

export const metadata = {
  title: "Quiz Khelo | Home",
  description: "Play exciting quizzes",
};

export default function WelcomePage(){
  return(
    <div className="">
    <StartScreen />
    </div>
  )
}
