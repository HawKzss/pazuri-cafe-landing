import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "255712345678";

const toppingsOptions = [
  "Whipped Cream",
  "Caramel Drizzle",
  "Chocolate Sauce",
  "Cinnamon",
  "Honey",
];

const sidesOptions = [
  "Croissant",
  "Banana Bread",
  "Samosa",
  "Fresh Fruit Bowl",
  "Chapati",
];

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemName: string;
  itemPrice: string;
}

const OrderDialog = ({ open, onOpenChange, itemName, itemPrice }: OrderDialogProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSides, setSelectedSides] = useState<string[]>([]);

  const toggleItem = (item: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  const handleSubmit = () => {
    const toppingsText = selectedToppings.length > 0 ? selectedToppings.join(", ") : "None";
    const sidesText = selectedSides.length > 0 ? selectedSides.join(", ") : "None";

    const message =
      `🛒 *New Order — Pazuri Cafe*\n\n` +
      `*Item:* ${itemName}\n` +
      `*Price:* ${itemPrice}\n` +
      `*Quantity:* ${quantity}\n` +
      `*Toppings:* ${toppingsText}\n` +
      `*Sides:* ${sidesText}\n\n` +
      `Thank you! 🙏`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onOpenChange(false);
    setQuantity(1);
    setSelectedToppings([]);
    setSelectedSides([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-['Playfair_Display'] text-2xl text-foreground">
            Order {itemName}
          </DialogTitle>
          <DialogDescription>
            Customize your order — {itemPrice}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-2">
          {/* Quantity */}
          <div>
            <Label htmlFor="quantity" className="text-foreground font-semibold">Quantity</Label>
            <div className="flex items-center gap-3 mt-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </Button>
              <Input
                id="quantity"
                type="number"
                min={1}
                max={20}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(20, Number(e.target.value))))}
                className="w-16 text-center"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(20, quantity + 1))}
              >
                +
              </Button>
            </div>
          </div>

          {/* Toppings */}
          <div>
            <Label className="text-foreground font-semibold">Toppings</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {toppingsOptions.map((t) => (
                <label key={t} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                  <Checkbox
                    checked={selectedToppings.includes(t)}
                    onCheckedChange={() => toggleItem(t, selectedToppings, setSelectedToppings)}
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>

          {/* Sides */}
          <div>
            <Label className="text-foreground font-semibold">Sides</Label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {sidesOptions.map((s) => (
                <label key={s} className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                  <Checkbox
                    checked={selectedSides.includes(s)}
                    onCheckedChange={() => toggleItem(s, selectedSides, setSelectedSides)}
                  />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <Button onClick={handleSubmit} className="w-full gap-2">
            <MessageCircle size={18} />
            Send Order via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
