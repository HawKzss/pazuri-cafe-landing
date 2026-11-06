import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import interior from "@/assets/about-cafe.jpg";
import cafe from "@/assets/hero-1.jpg";
import latte from "@/assets/hero-2.jpg";
import beans from "@/assets/hero-3.jpg";

const photos = [
  { src: interior, title: "A place to unwind", category: "The café", alt: "Plant-filled café interior with welcoming seating" },
  { src: latte, title: "Crafted with care", category: "Coffee", alt: "Barista pouring milk to create latte art" },
  { src: cafe, title: "Your favourite corner", category: "The café", alt: "Coffee on a wooden table in a warmly lit café" },
  { src: beans, title: "From bean to cup", category: "Coffee", alt: "Green and roasted coffee beans beside a coffee roaster" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const photo = selected === null ? null : photos[selected];
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + photos.length) % photos.length);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        setSelected(current => current === null ? null : (current + (event.key === "ArrowRight" ? 1 : -1) + photos.length) % photos.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-36">
        <div className="mb-12 flex flex-col gap-6 border-b border-border pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase text-primary">Pazuri Cafe</p>
            <h1 className="text-5xl font-bold text-foreground sm:text-6xl">Our Gallery</h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">Coffee, cosy corners, and the little moments in between.</p>
          </div>
          <Button asChild variant="link" className="self-start px-0 sm:self-auto">
            <Link to="/">Back to the café <ArrowUpRight /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {photos.map((item, index) => (
            <motion.figure key={item.title}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: index % 2 * 0.1 }}>
              <Button variant="ghost" className="group block h-auto w-full overflow-hidden rounded-md p-0 hover:bg-transparent" onClick={() => setSelected(index)} aria-label={`View ${item.title}`}>
                <img src={item.src} alt={item.alt} loading={index > 1 ? "lazy" : "eager"}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
              </Button>
              <figcaption className="mt-4 flex items-start justify-between gap-3">
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <span className="mt-1 shrink-0 text-sm text-muted-foreground">{item.category}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </main>
      <Footer />
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        {photo && (
          <DialogContent className="w-[calc(100%-2rem)] max-w-5xl gap-4 rounded-lg p-4 pt-12 sm:p-6 sm:pt-12">
            <DialogTitle className="sr-only">{photo.title}</DialogTitle>
            <DialogDescription className="sr-only">{photo.alt}</DialogDescription>
            <img src={photo.src} alt={photo.alt} className="max-h-[65dvh] w-full object-contain" />
            <div className="flex items-center justify-between gap-3">
              <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous photo" title="Previous photo"><ArrowLeft /></Button>
              <div className="min-w-0 text-center">
                <p className="font-['Playfair_Display'] text-lg font-semibold">{photo.title}</p>
                <p className="text-sm text-muted-foreground">{(selected ?? 0) + 1} / {photos.length}</p>
              </div>
              <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Next photo" title="Next photo"><ArrowRight /></Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default Gallery;