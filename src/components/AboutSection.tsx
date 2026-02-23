import aboutImg from "@/assets/about-cafe.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="bg-primary/5 py-20 px-6">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        <ScrollReveal>
        {/* Text */}
        <div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-foreground sm:text-5xl">
            About <span className="text-primary">Pazuri</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            In Swahili, <em className="text-foreground font-medium">"Pazuri"</em> means
            <em> beautiful</em> — and that's exactly what we aim to create. Every cup we
            serve is a celebration of Tanzania's world-renowned coffee heritage, sourced
            directly from the slopes of Mount Kilimanjaro and the highlands of Mbeya.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded in the heart of Dar es Salaam, Pazuri Cafe is more than a coffee shop.
            It's a gathering place where the warmth of Tanzanian hospitality meets the artistry
            of specialty coffee. Our baristas are trained to craft each drink with care, using
            ethically sourced beans roasted in small batches right here in Tanzania.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you're starting your morning with a bold Kilimanjaro espresso or unwinding
            with friends over chai masala, Pazuri is your home away from home.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Cozy interior of Pazuri Cafe with warm lighting and plants"
              className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-primary px-6 py-3 shadow-lg">
              <p className="font-['Playfair_Display'] text-primary-foreground text-lg font-semibold">
                Est. 2024
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
