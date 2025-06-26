"use client";

import * as React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

import { parkingLocations } from "@/lib/data";
import type { ParkingLocation } from "@/types";

import { Logo } from "@/components/logo";
import { ParkingList } from "@/components/parking-list";
import { ParkingDetails } from "@/components/parking-details";
import { WelcomePlaceholder } from "@/components/welcome-placeholder";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = React.useState<ParkingLocation | null>(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showMonthly, setShowMonthly] = React.useState(false);

  const filteredLocations = React.useMemo(() => {
    return parkingLocations.filter((location) => {
      const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            location.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMonthly = !showMonthly || location.isMonthly;
      return matchesSearch && matchesMonthly;
    });
  }, [searchTerm, showMonthly]);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="hidden md:flex">
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="text-2xl font-bold font-headline text-primary">Parko Khoj</h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="flex flex-col">
          <div className="flex flex-col gap-4 p-4">
            <Input
              placeholder="Search by name or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search for parking"
            />
            <div className="flex items-center space-x-2">
              <Switch 
                id="monthly-parking" 
                checked={showMonthly} 
                onCheckedChange={setShowMonthly}
                aria-label="Show only monthly parking"
              />
              <Label htmlFor="monthly-parking">Everyday Parking</Label>
            </div>
          </div>
          <Separator />
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <ParkingList
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
              />
            </ScrollArea>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-2 md:hidden">
            <div className="flex items-center gap-3">
                <Logo className="!p-1.5" />
                 <h1 className="text-xl font-bold font-headline text-primary">Parko Khoj</h1>
            </div>
            <SidebarTrigger />
        </header>

        <div className="p-2 md:p-4">
          {selectedLocation ? (
            <ParkingDetails location={selectedLocation} />
          ) : (
            <WelcomePlaceholder />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
