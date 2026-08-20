import Image from "next/image";

import StartScreen from "../components/StartScreen";

export const metadata = {
  title: "Quiz Khelo | Welcome",
  description: "Welcome to Quiz Khelo",
};

export default function WelcomePage(){
  return(
    <div className="">
    <StartScreen />
    </div>
  )
}
