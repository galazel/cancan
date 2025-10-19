import React, { useEffect, useState } from "react";

(function loadExternalDependencies() {
  const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js",
  ];

  scripts.forEach((src) => {
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.head.appendChild(script);
    }
  });
})();

export default function About() {
  const [gsapReady, setGsapReady] = useState(false);

  useEffect(() => {
    const checkGsap = () => {
      if (
        typeof window.gsap !== "undefined" &&
        typeof window.ScrollTrigger !== "undefined"
      ) {
        setGsapReady(true);
      } else {
        setTimeout(checkGsap, 50);
      }
    };
    checkGsap();
  }, []);

  useEffect(() => {
    if (!gsapReady) return;
    const { gsap, ScrollTrigger } = window;

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });

    const tl = gsap.timeline();

    tl.to(".section-design", { yPercent: -100 })
      .to(".section-dev", { yPercent: -100 })
      .to(".section-innovate", { yPercent: -100 });

    const scrollTriggerInstance = ScrollTrigger.create({
      animation: tl,
      trigger: "#scroll-container",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });

    return () => {
      scrollTriggerInstance.kill();
    };
  }, [gsapReady]);

  const sections = [
    {
      color: "#ff6b6b",
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      className: "section-design",
      description:
        "WE CRAFT AND CURATE STYLISH, FUNCTIONAL FURNITURE TO CREATE YOUR PERSONAL SANCTUARY.",
    },
    {
      color: "#5f27cd",
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      className: "section-dev",
      description:
        "DON'T SEE THE SIZE, COLOUR OR MATERIAL VARIANT YOU WANT? CONTACT US TO ENQUIRE ABOUT CUSTOMISATION OPTIONS.",
    },
    {
      color: "#10ac84",
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      className: "section-innovate",
      description: "BRINGING NEW IDEAS TO LIFE THROUGH CREATIVE DESIGN.",
    },
    {
      color: "#feca57",
      image:
        "https://images.unsplash.com/photo-1722942434635-0b34e98811d8?auto=format&fit=crop&q=80&w=1170",
      className: "section-vision",
      description: "IMAGINE. DESIGN. CREATE. THE FUTURE OF AESTHETICS.",
    },
  ];

  if (!gsapReady) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-3xl">
        Loading Animation Libraries...
      </div>
    );
  }

  return (
    <div
      id="scroll-container"
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      style={{ minHeight: "100vh" }}
    >
      {sections.map((item, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white text-6xl font-extrabold ${item.className}`}
          style={{
            zIndex: sections.length - i,
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/50 p-6 rounded-xl text-center">
            <p className="text-4xl font-bold">{item.description}</p>
          </div>
        </div>
      ))}

      <div className="relative pt-[100vh] h-[200vh] bg-gray-100 flex items-start justify-center text-gray-800 text-3xl font-serif">
        <div className="mt-20 p-8 max-w-xl text-center">
          <p className="mb-4 text-4xl font-bold text-gray-700">
            The Scroll Experience Continues...
          </p>
          <p className="text-lg">
            This content appears once the animated sections are fully revealed
            and the main container unpins.
          </p>
        </div>
      </div>
    </div>
  );
}
