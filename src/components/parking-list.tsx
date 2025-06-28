"use client";

import type { ParkingLocation } from "@/types";
import { Button } from "@/components/ui/button";
import { cn, haversineDistance } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useSidebar } from "@/components/ui/sidebar";

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
    <div className="p-2 space-y-1">
      {locations.map((location) => {
        const distance = userLocation ? haversineDistance(userLocation, location.coords) : null;

        return (
          <Button
            key={location.id}
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
          </Button>
        );
      })}
    </div>
  );
}
