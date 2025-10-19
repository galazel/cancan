import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

import { Input } from "@/components/ui/input";

export default function Header() {
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
  return (
    <header className="transparent " id="header">
      <div className="border-b-2 g-transparent text-gray-600 body-font grid grid-cols-3 gap-5 px-5 items-center">
        <Input
          className="w-full !border-none bg-transparent shadow-none"
          placeholder="Search"
        />
        <h1 className="text-center font-bold text-black">CANCAN</h1>
        <div className="flex justify-end">
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
      <div className="flex justify-center items-center h-16">
        <ul className="flex gap-10 items-center justify-center">
          {categories.map((item, index) => (
            <li key={index} className="font-bold text-black cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
