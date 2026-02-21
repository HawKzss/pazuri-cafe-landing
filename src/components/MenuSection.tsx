import { Coffee, CakeSlice, Leaf, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    icon: Coffee,
    title: "Kilimanjaro Espresso",
    description: "Single-origin Tanzanian beans, bold and smooth with notes of dark chocolate.",
    price: "TSh 5,000",
  },
  {
    icon: Coffee,
    title: "Pazuri Latte",
    description: "Our signature latte with locally sourced milk and a hint of vanilla.",
    price: "TSh 7,000",
  },
  {
    icon: CakeSlice,
    title: "Mandazi & Jam",
    description: "Freshly fried Swahili doughnuts served with tropical fruit jam.",
    price: "TSh 4,000",
  },
  {
    icon: Leaf,
    title: "Chai Masala",
    description: "Traditional spiced tea brewed with cardamom, ginger, and cinnamon.",
    price: "TSh 3,500",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="bg-background py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-foreground sm:text-5xl">
            Our Menu
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            A taste of Tanzania in every cup and bite
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <Card
              key={item.title}
              className="border-border bg-card hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <item.icon className="mx-auto mb-4 text-primary" size={36} />
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <p className="mt-3 text-lg font-semibold text-primary">
                  {item.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download full menu card */}
        <Card className="mt-10 border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 p-8">
            <div className="flex items-center gap-4">
              <ClipboardList className="text-primary" size={40} />
              <div>
                <h3 className="font-['Playfair_Display'] text-xl font-semibold text-foreground">
                  Full Menu
                </h3>
                <p className="text-muted-foreground text-sm">
                  Browse our complete selection of coffees, teas, pastries, and meals.
                </p>
              </div>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              Download PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MenuSection;
