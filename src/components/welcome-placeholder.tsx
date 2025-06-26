import { MapPin, Search } from 'lucide-react';

export function WelcomePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-card rounded-xl p-8 border-2 border-dashed">
      <div className="p-4 bg-primary/10 rounded-full mb-6">
        <MapPin className="h-12 w-12 md:h-16 md:w-16 text-primary" strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-headline">Welcome to Parko Khoj</h2>
      <p className="text-muted-foreground max-w-sm text-base md:text-lg">
        Your guide to finding the perfect parking spot in Kathmandu.
      </p>
      <div className="flex items-center text-sm text-muted-foreground mt-8 bg-background px-4 py-2 rounded-full">
        <Search className="h-4 w-4 mr-2" />
        <span>Select a location from the list to see details.</span>
      </div>
    </div>
  );
}
