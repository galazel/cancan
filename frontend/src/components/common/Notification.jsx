import { PopcornIcon } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { useEffect, useState } from "react";

export default function Notification() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    "NEW FLAGSHIP DESIGN NOW OPEN | Shop our latest collection!",
    "FREE SHIPPING on all orders over $75. Limited time offer!",
    "TAN BUT BIAT BUILDAAND - Customer favorite! 5-star reviews across the board.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  if (!isVisible) return null;

  return (
    <header className="">
      <Alert className="border-none rounded-none px-5 bg-black w-full text-white">
        <AlertTitle>{texts[currentIndex]}</AlertTitle>
      </Alert>
    </header>
  );
}
