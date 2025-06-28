"use client";

import * as React from "react";
import Link from "next/link";
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
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { LocateFixed } from "lucide-react";

import { parkingLocations } from "@/lib/data";
import type { ParkingLocation } from "@/types";
import { haversineDistance } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

import { Logo } from "@/components/logo";
import { ParkingList } from "@/components/parking-list";
import { ParkingDetails } from "@/components/parking-details";
import { WelcomePlaceholder } from "@/components/welcome-placeholder";

export default function Home() {
  const [selectedLocation, setSelectedLocation] = React.useState<ParkingLocation | null>(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showMonthly, setShowMonthly] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState<{ lat: number; lng: number } | null>(null);
  const [radius, setRadius] = React.useState(5); // Default radius 5km
  const [isLocating, setIsLocating] = React.useState(false);
  const { toast } = useToast();

  const handleGetUserLocation = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      toast({
        variant: "destructive",
        title: "Geolocation Error",
        description: "Geolocation is not supported by your browser.",
      });
      setIsLocating(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(newLocation);
        setIsLocating(false);
        // Automatically select the closest location
        const sortedByDistance = [...parkingLocations].sort((a, b) => {
            const distA = haversineDistance(newLocation, a.coords);
            const distB = haversineDistance(newLocation, b.coords);
            return distA - distB;
        });
        if (sortedByDistance.length > 0 && haversineDistance(newLocation, sortedByDistance[0].coords) <= radius) {
            setSelectedLocation(sortedByDistance[0]);
        }
        toast({
          title: "Location Found",
          description: "Filtering parking spots near you.",
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
        toast({
          variant: "destructive",
          title: "Geolocation Error",
          description: "Could not get your location. Please check browser permissions.",
        });
        setIsLocating(false);
      }
    );
  };

  const filteredLocations = React.useMemo(() => {
    let locations = [...parkingLocations];

    if (userLocation) {
        locations = locations.filter((location) => {
            const distance = haversineDistance(userLocation, location.coords);
            return distance <= radius;
        }).sort((a, b) => {
            const distA = haversineDistance(userLocation, a.coords);
            const distB = haversineDistance(userLocation, b.coords);
            return distA - distB;
        });
    }

    return locations.filter((location) => {
      const matchesSearch = location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            location.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMonthly = !showMonthly || location.isMonthly;
      return matchesSearch && matchesMonthly;
    });
  }, [searchTerm, showMonthly, userLocation, radius]);

  const handleLogoClick = () => {
    setSelectedLocation(null);
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="hidden md:flex">
          <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3">
            <Logo />
            <h1 className="text-2xl font-bold font-headline text-primary">Parko Khoj</h1>
          </Link>
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
            <Separator />
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="nearby-search" className={!userLocation ? "text-muted-foreground" : ""}>
                  Search Nearby
                </Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleGetUserLocation}
                  disabled={isLocating}
                  className="text-xs"
                >
                  <LocateFixed className="mr-2 h-4 w-4" />
                  {isLocating ? "Locating..." : "Use My Location"}
                </Button>
              </div>
              <div className="flex items-center gap-3">
                <Slider
                  id="nearby-search"
                  min={1}
                  max={15}
                  step={1}
                  value={[radius]}
                  onValueChange={(value) => setRadius(value[0])}
                  disabled={!userLocation || isLocating}
                  aria-label="Search radius in kilometers"
                />
                <span className="text-sm font-medium w-16 text-right tabular-nums">
                  {radius} km
                </span>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <ParkingList
                locations={filteredLocations}
                selectedLocation={selectedLocation}
                onSelectLocation={setSelectedLocation}
                userLocation={userLocation}
              />
            </ScrollArea>
          </div>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background p-2 md:hidden">
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3">
                <Logo className="!p-1.5" />
                 <h1 className="text-xl font-bold font-headline text-primary">Parko Khoj</h1>
            </Link>
            <SidebarTrigger />
        </header>

        <div className="p-2 md:p-4 min-w-0">
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
