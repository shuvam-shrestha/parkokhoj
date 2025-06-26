import Image from "next/image";
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
import { Bike, Car } from "lucide-react";

type ParkingDetailsProps = {
  location: ParkingLocation;
};

export function ParkingDetails({ location }: ParkingDetailsProps) {
  const twoWheelerPercentage =
    (location.availability.twoWheeler.available /
      location.availability.twoWheeler.total) *
    100;
  const fourWheelerPercentage =
    (location.availability.fourWheeler.available /
      location.availability.fourWheeler.total) *
    100;

  return (
    <Card className="h-full overflow-hidden flex flex-col animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardTitle className="text-3xl font-headline">{location.name}</CardTitle>
        <CardDescription>{location.address}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col gap-4">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md">
          <Image
            src={location.image}
            alt={`View of ${location.name}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint="parking lot"
          />
        </div>

        <Separator />

        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Availability</h3>
          <div className="space-y-4">
            {location.availability.twoWheeler.total > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-3">
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
              </div>
            )}

            {location.availability.fourWheeler.total > 0 && (
               <div className="space-y-2">
                <div className="flex items-center gap-3">
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
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
