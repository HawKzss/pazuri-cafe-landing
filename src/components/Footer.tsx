import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/pazuricafe", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/pazuricafe", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/255712345678", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer id="socials" className="bg-primary text-primary-foreground py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-8">
        {/* Social icons */}
        <div className="flex gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="hover:opacity-70 transition-opacity"
            >
              <s.icon size={28} />
            </a>
          ))}
        </div>

        {/* Quick links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
          <a href="#menu" className="hover:opacity-100 transition-opacity">Menu</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">About Us</a>
          <a href="#location" className="hover:opacity-100 transition-opacity">Location</a>
        </nav>

        <p className="text-sm opacity-70">
          © 2024 Pazuri Cafe — Made in Tanzania 🇹🇿
        </p>
      </div>
    </footer>
  );
};

export default Footer;
