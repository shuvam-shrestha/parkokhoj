"use client";

import * as React from "react";
import type { ParkingLocation } from "@/types";
import { Button } from "@/components/ui/button";
import { cn, haversineDistance } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useSidebar } from "@/components/ui/sidebar";
import { Separator } from "./ui/separator";

type ParkingListProps = {
  locations: ParkingLocation[];
  selectedLocation: ParkingLocation | null;
  onSelectLocation: (location: ParkingLocation) => void;
  userLocation: { lat: number; lng: number } | null;
};

export function ParkingList({
  locations,
  selectedLocation,
  onSelectLocation,
  userLocation,
}: ParkingListProps) {
  const { isMobile, setOpenMobile } = useSidebar();

  if (locations.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        No parking spots found. Try expanding your search radius.
      </div>
    );
  }

  const handleSelect = (location: ParkingLocation) => {
    onSelectLocation(location);
    if (isMobile) {
      setOpenMobile(false);
    }
  }

  return (
    <div className="p-2">
      {locations.map((location, index) => {
        const distance = userLocation ? haversineDistance(userLocation, location.coords) : null;

        return (
          <React.Fragment key={location.id}>
            <Button
              variant="ghost"
              className={cn(
                "w-full h-auto justify-start text-left flex-col items-start p-3",
                selectedLocation?.id === location.id && "bg-accent text-accent-foreground"
              )}
              onClick={() => handleSelect(location)}
            >
              <div className="w-full flex justify-between items-start">
                <h3 className="font-semibold text-base flex-1 pr-2">{location.name}</h3>
                <div className="flex items-center gap-2">
                  {distance !== null && (
                    <Badge variant="outline" className="text-xs">
                      {distance.toFixed(1)} km
                    </Badge>
                  )}
                  {location.isMonthly && <Badge variant="secondary">Monthly</Badge>}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{location.address}</p>
              <div className="flex items-center gap-2 text-xs mt-1 w-full">
                <span
                  className={cn(
                    'h-2 w-2 rounded-full shrink-0',
                    location.isOpen ? 'bg-green-500' : 'bg-orange-500'
                  )}
                  aria-hidden="true"
                />
                <span className={cn(location.isOpen ? 'text-green-700' : 'text-orange-700', 'dark:text-current')}>
                  {location.isOpen ? `Open until ${location.closingTime}` : 'Closed'}
                </span>
              </div>
            </Button>
            {index < locations.length - 1 && <Separator className="my-0" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
