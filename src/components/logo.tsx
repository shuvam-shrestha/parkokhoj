import { ParkingCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-2 aspect-square", className)}>
      <ParkingCircle className="h-6 w-6" />
    </div>
  );
}
