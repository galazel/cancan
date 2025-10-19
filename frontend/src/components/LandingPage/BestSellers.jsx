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

const products = [
  {
    id: 1,
    image: "https://placehold.co/400x400/D4C4B7/D4C4B7?text=Product1",
    name: "Gaelle Side Table - Smart Storage for Small Spaces -...",
    price: "S$1,890.00",
  },
  {
    id: 2,
    image: "https://placehold.co/400x400/E8DED6/E8DED6?text=Product2",
    name: "Ferris Pouf - Champagne Boudé Pouf with Blushred...",
    price: "S$380.00",
  },
  {
    id: 3,
    image: "https://placehold.co/400x400/EFEAE4/EFEAE4?text=Product3",
    name: "Fortis Sofa Bed",
    price: "From S$2,110.00",
  },
  {
    id: 4,
    image: "https://placehold.co/400x400/EDE8E0/EDE8E0?text=Product4",
    name: "AAC Petite Side Table - Ivory Travertine",
    price: "S$1,290.00",
  },
  {
    id: 5,
    image: "https://placehold.co/400x400/D1C8C2/D1C8C2?text=Product5",
    name: "New Age Coffee Table - Walnut Finish",
    price: "S$950.00",
  },
  {
    id: 6,
    image: "https://placehold.co/400x400/C1B9B4/C1B9B4?text=Product6",
    name: "Minimalist Lounge Chair - Grey Fabric",
    price: "S$1,500.00",
  },
];

export default function BestSellers() {
  const titleStyle = { fontFamily: "Playfair Display, serif" };

  return (
    <section className="py-20 px-5 md:px-6 relative ">
      <div className="flex justify-start items-center mb-6">
        <h3
          className="!text-8xl md:text-[52px] font-normal  text-gray-900"
          style={titleStyle}
        >
          SHOP BESTSELLERS
        </h3>
      </div>
      <div className="w-full">
        <Carousel className="w-full relative">
          <div className="flex gap-3 justify-end">
            <CarouselPrevious />
            <CarouselNext />

            <p className="text-base font-medium">
              <a
                href="#"
                className="flex items-center text-gray-800 hover:text-blue-600 transition-colors group"
              >
                SHOP ALL
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </p>
          </div>

          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="p-1">
                  <Card className="border-none rounded-lg shadow-none">
                    <CardContent className="flex flex-col p-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-cover aspect-square"
                      />

                      <div className="px-1 py-4">
                        <p className="text-sm text-gray-800 line-clamp-2">
                          {product.name}
                        </p>
                        <p className="text-sm font-semibold text-gray-900 mt-1">
                          {product.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
