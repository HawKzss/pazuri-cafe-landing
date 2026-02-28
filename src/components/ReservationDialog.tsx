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
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "255712345678";

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReservationDialog = ({ open, onOpenChange }: ReservationDialogProps) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const message =
      `📋 *Table Reservation — Pazuri Cafe*\n\n` +
      `*Name:* ${name || "Not provided"}\n` +
      `*Date:* ${date || "Not provided"}\n` +
      `*Time:* ${time || "Not provided"}\n` +
      `*Number of Guests:* ${guests}\n` +
      `*Table Customization / Notes:* ${notes || "None"}\n\n` +
      `Looking forward to your visit! 🌿`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onOpenChange(false);
    setName("");
    setDate("");
    setTime("");
    setGuests(2);
    setNotes("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-['Playfair_Display'] text-2xl text-foreground">
            Reserve a Table
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll confirm via WhatsApp
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-2">
          <div>
            <Label htmlFor="res-name" className="text-foreground font-semibold">Your Name</Label>
            <Input
              id="res-name"
              placeholder="e.g. John Mwangi"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
              maxLength={100}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="res-date" className="text-foreground font-semibold">Date</Label>
              <Input
                id="res-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="res-time" className="text-foreground font-semibold">Time</Label>
              <Input
                id="res-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="res-guests" className="text-foreground font-semibold">Number of Guests</Label>
            <div className="flex items-center gap-3 mt-1">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                −
              </Button>
              <Input
                id="res-guests"
                type="number"
                min={1}
                max={50}
                value={guests}
                onChange={(e) => setGuests(Math.max(1, Math.min(50, Number(e.target.value))))}
                className="w-16 text-center"
              />
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setGuests(Math.min(50, guests + 1))}
              >
                +
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="res-notes" className="text-foreground font-semibold">
              Table Customization & Notes
            </Label>
            <Textarea
              id="res-notes"
              placeholder="e.g. Window seat, birthday decoration, high chair needed..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
              maxLength={500}
              rows={3}
            />
          </div>

          <Button onClick={handleSubmit} className="w-full gap-2">
            <MessageCircle size={18} />
            Send Reservation via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationDialog;
