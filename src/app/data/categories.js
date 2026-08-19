import {
  FaFutbol,
  FaFlask,
  FaGlobeAsia,
  FaLaptopCode,
  FaFilm,
  FaTrophy,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

import { FaScroll } from "react-icons/fa6";
import { GiCricketBat } from "react-icons/gi";

const categories = [
  {
    id: 1,
    title: "Football",
    icon: FaFutbol,
    color: "bg-green-200",
    hover: "hover:bg-green-300",
    route: "/quiz/football",
  },
  {
    id: 2,
    title: "Cricket",
    icon: GiCricketBat,
    color: "bg-yellow-200",
    hover: "hover:bg-yellow-300",
    route: "/quiz/cricket",
  },
  {
    id: 3,
    title: "Science",
    icon: FaFlask,
    color: "bg-cyan-200",
    hover: "hover:bg-cyan-300",
    route: "/quiz/science",
  },
  {
    id: 4,
    title: "History",
    icon: FaScroll,
    color: "bg-pink-200",
    hover: "hover:bg-pink-300",
    route: "/quiz/history",
  },
  {
    id: 5,
    title: "Geography",
    icon: FaGlobeAsia,
    color: "bg-sky-200",
    hover: "hover:bg-sky-300",
    route: "/quiz/geography",
  },
  {
    id: 6,
    title: "Technology",
    icon: FaLaptopCode,
    color: "bg-rose-200",
    hover: "hover:bg-rose-300",
    route: "/quiz/technology",
  },
  {
    id: 7,
    title: "Movie",
    icon: FaFilm,
    color: "bg-violet-200",
    hover: "hover:bg-violet-300",
    route: "/quiz/movie",
  },
  {
    id: 8,
    title: "Sports",
    icon: FaTrophy,
    color: "bg-orange-200",
    hover: "hover:bg-orange-300",
    route: "/quiz/sports",
  },
  {
    id: 9,
    title: "General Knowledge",
    icon: FaLightbulb,
    color: "bg-fuchsia-200",
    hover: "hover:bg-fuchsia-300",
    route: "/quiz/generalKnowledge",
  },
  {
    id: 10,
    title: "Programming",
    icon: FaCode,
    color: "bg-blue-200",
    hover: "hover:bg-blue-300",
    route: "/quiz/programming",
  },
];

export default categories;