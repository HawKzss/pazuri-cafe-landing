import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ReservationDialog from "@/components/ReservationDialog";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [reservationOpen, setReservationOpen] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Hero">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Pazuri Cafe ambiance ${i + 1}`}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-[hsl(114,37%,25%/0.65)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
      >
        <h1 className="font-['Playfair_Display'] text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          Pazuri Cafe
        </h1>
        <p className="mt-4 max-w-xl text-lg font-light opacity-90 sm:text-xl">
          Tanzanian Specialty Coffee, Beautifully Crafted
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent text-base px-8"
            onClick={() => setReservationOpen(true)}
          >
            Reserve a Table
          </Button>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8"
            asChild
          >
            <a href="#menu">Order Now</a>
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <ReservationDialog open={reservationOpen} onOpenChange={setReservationOpen} />
    </section>
  );
};

export default HeroSection;
