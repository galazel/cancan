import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Collection() {
  const collections = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      name: "Space Saving Sofas",
      definition: "dsafdsafsdaf",
      price: "S$1,890.00",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      name: "Traveltine Marvels",
      definition: "dsafdsafsdaf",
      price: "S$380.00",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      name: "Home Accessories & More",
      definition: "dsafdsafsdaf",
      price: "From S$2,110.00",
    },
  ];

  return (
    <section className="collections grid grid-cols-3 gap-5 my-35 mx-10  h-[90vh]">
      {collections.map((item, index) => {
        return (
          <div key={index} className="relative h-full cursor-pointer">
            <img src={item.image} className="h-full" />
            <div className="flex justify-center items-center absolute inset-0 ">
              <p className="text-center uppercase text-4xl font-bold">{item.name}</p>
            </div>

            <div className="flex justify-center items-center absolute flex-col gap-1 inset-x-0 bottom-10 ">
              <p>{item.definition}</p>
              <p className="underline">SHOP COLLECTION</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
