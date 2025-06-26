"use client";

import * as React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const bookingFormSchema = z.object({
  vehicleType: z.enum(["two-wheeler", "four-wheeler"], {
    required_error: "You need to select a vehicle type.",
  }),
  riderName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  vehicleNo: z.string().min(4, { message: "Please enter a valid vehicle number." }),
  incomingTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Please enter a valid time in HH:MM format.",
  }),
  duration: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid duration in hours.",
  }),
});

type BookingFormState = "form" | "qr" | "success";

export function BookingForm() {
  const [state, setState] = React.useState<BookingFormState>("form");
  const [open, setOpen] = React.useState(false);

  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      riderName: "",
      vehicleNo: "",
      incomingTime: "",
      duration: "",
    },
  });

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      // Reset state after a delay to allow the dialog to close smoothly
      setTimeout(() => {
        form.reset();
        setState("form");
      }, 300);
    }
    setOpen(isOpen);
  };

  const onSubmit = (values: z.infer<typeof bookingFormSchema>) => {
    console.log("Form Submitted", values);
    setState("qr");
  };

  const handlePaymentConfirmation = () => {
    setState("success");
  };

  const closeDialog = () => {
    handleOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full mt-4">Request Spot</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {state === "form" && "Request a Parking Spot"}
            {state === "qr" && "Advance Payment"}
            {state === "success" && "Booking Successful"}
          </DialogTitle>
        </DialogHeader>
        {state === "form" && (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
               <FormField
                control={form.control}
                name="vehicleType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Vehicle Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="two-wheeler" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            2-Wheeler
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="four-wheeler" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            4-Wheeler
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="riderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rider Name</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Hari Bahadur" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vehicleNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle No.</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Ba 99 Pa 1234" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="incomingTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Incoming Time (HH:MM)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 14:30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration of Stay (in hours)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full mt-2">
                Advance Payment
              </Button>
            </form>
          </Form>
        )}
        {state === "qr" && (
          <div className="flex flex-col items-center gap-4 py-4">
            <p className="text-sm text-muted-foreground text-center">
              Scan the QR code to complete your advance payment.
            </p>
            <Image
              src="https://placehold.co/300x300.png"
              width={300}
              height={300}
              alt="QR Code for payment"
              data-ai-hint="qr code"
              className="rounded-lg border"
            />
            <Button onClick={handlePaymentConfirmation} className="w-full mt-2">
              I have Paid
            </Button>
          </div>
        )}
        {state === "success" && (
          <div className="flex flex-col items-center gap-4 py-4 text-center">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h3 className="text-xl font-medium">Payment Successful!</h3>
            <p className="text-sm text-muted-foreground">
              Your parking spot request has been sent. You will be notified upon confirmation.
            </p>
            <Button onClick={closeDialog} className="w-full mt-2">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
