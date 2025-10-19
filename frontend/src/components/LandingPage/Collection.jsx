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

  return (
    <div className="w-full my-30">
      <Carousel className="w-full relative">
        <CarouselContent className="-ml-4">
          {collections.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="border-none rounded-none shadow-none">
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
  );
}
