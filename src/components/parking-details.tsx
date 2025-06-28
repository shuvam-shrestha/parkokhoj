"use client";

import * as React from "react";
import type { ParkingLocation } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Bike, Car, Camera, Map } from "lucide-react";
import { BookingForm } from "./booking-form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ParkingDetailsProps = {
  location: ParkingLocation;
};

export function ParkingDetails({ location }: ParkingDetailsProps) {
  const [viewMode, setViewMode] = React.useState<'satellite' | 'streetview'>('satellite');

  const twoWheelerPercentage =
    (location.availability.twoWheeler.available /
      location.availability.twoWheeler.total) *
    100;
  const fourWheelerPercentage =
    (location.availability.fourWheeler.available /
      location.availability.fourWheeler.total) *
    100;

  const satelliteMapSrc = `https://maps.google.com/maps?q=${location.coords.lat},${location.coords.lng}&t=k&z=18&ie=UTF8&iwloc=&output=embed`;
  const streetViewSrc = `https://maps.google.com/maps?layer=c&cbll=${location.coords.lat},${location.coords.lng}&cbp=12,0,0,0,0&source=embed&output=svembed`;
  
  const mapSrc = viewMode === 'satellite' ? satelliteMapSrc : streetViewSrc;

  return (
    <Card className="overflow-hidden flex flex-col animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-headline">{location.name}</CardTitle>
        <CardDescription>{location.address}</CardDescription>
        <div className="flex items-center gap-2 pt-1">
          <span
            className={cn(
              "h-2.5 w-2.5 shrink-0 rounded-full",
              location.isOpen ? "bg-green-500" : "bg-orange-500"
            )}
            aria-hidden="true"
          />
          <span className="text-sm font-medium">
            {location.isOpen ? `Open until ${location.closingTime}` : `Closed`}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div>
          <Tabs defaultValue="satellite" onValueChange={(value) => setViewMode(value as 'satellite' | 'streetview')} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="satellite">
                <Map className="mr-2 h-4 w-4" />
                Satellite View
              </TabsTrigger>
              <TabsTrigger value="streetview">
                <Camera className="mr-2 h-4 w-4" />
                360° View
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md mt-2">
            <iframe
              key={viewMode}
              src={mapSrc}
              width="100%"
              height="100%"
              title={viewMode === 'satellite' ? `Satellite view of ${location.name}` : `360° view of ${location.name}`}
              aria-label={viewMode === 'satellite' ? `Satellite view of ${location.name}` : `360° view of ${location.name}`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div>
        </div>
        
        <Separator />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Availability & Pricing</h3>
          <Accordion type="single" collapsible className="w-full">
            {location.availability.twoWheeler.total > 0 && (
              <AccordionItem value="two-wheeler">
                <AccordionTrigger className="hover:no-underline p-3">
                  <div className="flex items-center gap-3 w-full">
                    <Bike className="h-6 w-6 text-primary" />
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline">
                        <p className="font-medium">2-Wheeler</p>
                        <p className="text-sm text-muted-foreground">
                          <span className="font-bold text-foreground">
                            {location.availability.twoWheeler.available}
                          </span>
                          /{location.availability.twoWheeler.total} available
                        </p>
                      </div>
                      <Progress value={twoWheelerPercentage} className="h-2 mt-1" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 -mt-2 bg-muted/50 rounded-b-md">
                    {location.availability.twoWheeler.pricing && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Pricing Details</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                          {location.availability.twoWheeler.pricing.perHour && <li>Per Hour: <span className="text-foreground font-medium">NPR {location.availability.twoWheeler.pricing.perHour}</span></li>}
                          {location.availability.twoWheeler.pricing.longHours && <li>Long Hours: <span className="text-foreground font-medium">{location.availability.twoWheeler.pricing.longHours}</span></li>}
                          {location.availability.twoWheeler.pricing.everyday && <li>Everyday: <span className="text-foreground font-medium">{location.availability.twoWheeler.pricing.everyday}</span></li>}
                        </ul>
                      </div>
                    )}
                    {location.availability.twoWheeler.amenities && location.availability.twoWheeler.amenities.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.availability.twoWheeler.amenities.map(amenity => (
                            <Badge key={amenity} variant="secondary" className="font-normal">{amenity}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}

            {location.availability.fourWheeler.total > 0 && (
              <AccordionItem value="four-wheeler">
                <AccordionTrigger className="hover:no-underline p-3">
                   <div className="flex items-center gap-3 w-full">
                      <Car className="h-6 w-6 text-primary" />
                      <div className="flex-grow">
                        <div className="flex justify-between items-baseline">
                          <p className="font-medium">4-Wheeler</p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-bold text-foreground">
                              {location.availability.fourWheeler.available}
                            </span>
                            /{location.availability.fourWheeler.total} available
                          </p>
                        </div>
                        <Progress value={fourWheelerPercentage} className="h-2 mt-1" />
                      </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 -mt-2 bg-muted/50 rounded-b-md">
                    {location.availability.fourWheeler.pricing && (
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Pricing Details</h4>
                        <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                          {location.availability.fourWheeler.pricing.perHour && <li>Per Hour: <span className="text-foreground font-medium">NPR {location.availability.fourWheeler.pricing.perHour}</span></li>}
                          {location.availability.fourWheeler.pricing.longHours && <li>Long Hours: <span className="text-foreground font-medium">{location.availability.fourWheeler.pricing.longHours}</span></li>}
                          {location.availability.fourWheeler.pricing.everyday && <li>Everyday: <span className="text-foreground font-medium">{location.availability.fourWheeler.pricing.everyday}</span></li>}
                        </ul>
                      </div>
                    )}
                    {location.availability.fourWheeler.amenities && location.availability.fourWheeler.amenities.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.availability.fourWheeler.amenities.map(amenity => (
                            <Badge key={amenity} variant="secondary" className="font-normal">{amenity}</Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
          <BookingForm />
        </div>
      </CardContent>
    </Card>
  );
}
