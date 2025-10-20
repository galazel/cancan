import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import Notification from "../common/Notification";
import { Input } from "@/components/ui/input";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [removeNotification,setRemoveNotification] = useState(false)

  const categories = [
    "NEW ARRIVALS",
    "LIVING",
    "DINING",
    "STORAGE & CONSOLES",
    "BEDROOM",
    "OUTDOOR",
    "ACCESSORIES",
    "EGIFT CARDS",
    "AS-IS EXCLUSIVES",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setRemoveNotification(true)

      } else {
        setScrolled(false);
        setRemoveNotification(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        scrolled
          ? "bg-white/90 shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
     {!removeNotification && <Notification />} 

      <div className="border-b grid grid-cols-3 gap-5 px-5 items-center py-2">
        <Input
          className={`w-full !border-none shadow-none bg-transparent ${
            scrolled
              ? "text-black placeholder-black"
              : "text-white placeholder-white"
          }`}
          placeholder="Search"
        />
        <h1
          className={`text-center font-bold transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          CANCAN
        </h1>
        <div className="flex justify-end gap-2 ">
          <FontAwesomeIcon
            icon={faHeart}
            className={scrolled ? "text-black" : "text-white"}
          />
          <FontAwesomeIcon
            icon={faUser}
            className={scrolled ? "text-black" : "text-white"}
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            className={scrolled ? "text-black" : "text-white"}
          />
        </div>
      </div>

      <div className="flex justify-center items-center h-16">
        <ul className="flex gap-10 items-center justify-center">
          {categories.map((item, index) => (
            <li
              key={index}
              className={`font-bold cursor-pointer transition-colors ${
                scrolled
                  ? "text-black hover:text-gray-600"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
