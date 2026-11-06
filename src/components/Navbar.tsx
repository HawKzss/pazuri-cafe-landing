import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Menu", href: "/#menu" },
  { label: "About Us", href: "/#about" },
  { label: "Location", href: "/#location" },
  { label: "Socials", href: "/#socials" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-background/95 backdrop-blur shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className={`font-['Playfair_Display'] text-2xl font-bold transition-colors ${
            solid ? "text-primary" : "text-primary-foreground"
          }`}
        >
          Pazuri Cafe
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  solid ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/gallery" aria-current={pathname === "/gallery" ? "page" : undefined} className={`text-sm font-medium transition-colors hover:opacity-80 ${solid ? "text-foreground" : "text-primary-foreground"}`}>Gallery</Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className={`md:hidden ${solid ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur border-t">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-foreground text-base font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li><Link to="/gallery" className="text-foreground text-base font-medium" onClick={() => setMobileOpen(false)}>Gallery</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
