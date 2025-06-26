"use client";

import type { ParkingLocation } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type ParkingListProps = {
  locations: ParkingLocation[];
  selectedLocation: ParkingLocation | null;
  onSelectLocation: (location: ParkingLocation) => void;
};

export function ParkingList({
  locations,
  selectedLocation,
  onSelectLocation,
}: ParkingListProps) {
  if (locations.length === 0) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        No parking spots found.
      </div>
    );
  }

  return (
    <div className="p-2 space-y-1">
      {locations.map((location) => (
        <Button
          key={location.id}
          variant="ghost"
          className={cn(
            "w-full h-auto justify-start text-left flex-col items-start p-3",
            selectedLocation?.id === location.id && "bg-accent text-accent-foreground"
          )}
          onClick={() => onSelectLocation(location)}
        >
          <div className="w-full flex justify-between items-start">
            <h3 className="font-semibold text-base">{location.name}</h3>
            {location.isMonthly && <Badge variant="secondary">Monthly</Badge>}
          </div>
          <p className="text-sm text-muted-foreground">{location.address}</p>
        </Button>
      ))}
    </div>
  );
}
