import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const LocationSection = () => {
  return (
    <section id="location" className="bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-foreground sm:text-5xl">
              Visit Us
            </h2>
            <p className="mt-3 text-muted-foreground text-lg">
              We'd love to welcome you
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.167417978987!2d35.698196275004925!3d-7.7720649922473575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185417d46bf74b31%3A0xb49489a19da504ac!2sGangilonga%20Supermarket!5e0!3m2!1sen!2sus!4v1772273181063!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          {/* Contact details */}
          <div className="flex flex-col justify-center gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground text-lg">Address</h3>
                <p className="text-muted-foreground">
                  Plot 42, Haile Selassie Road<br />
                  Masaki, Dar es Salaam, Tanzania
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground text-lg">Phone</h3>
                <a href="tel:+255712345678" className="text-muted-foreground hover:text-primary transition-colors">
                  +255 712 345 678
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground text-lg">Email</h3>
                <a href="mailto:hello@pazuricafe.co.tz" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@pazuricafe.co.tz
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 text-primary shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground text-lg">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday – Sunday<br />
                  7:00 AM – 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LocationSection;
