import { Search } from 'lucide-react';

export function WelcomePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-card rounded-xl p-4 md:p-8 border-2 border-dashed">
      <div className="w-full">
        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-md">
            <iframe 
                src="https://www.youtube.com/embed/gq3-BAnwG4g?autoplay=1&mute=1&loop=1&playlist=gq3-BAnwG4g&controls=0&showinfo=0&modestbranding=1" 
                title="How to park a car" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            ></iframe>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-6 mb-2 font-headline">Welcome to Parko Khoj</h2>
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
