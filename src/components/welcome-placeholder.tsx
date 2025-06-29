import { Search } from 'lucide-react';

export function WelcomePlaceholder() {
  return (
    <div className="flex flex-col items-center justify-between h-full text-center p-4 md:p-8 min-h-[calc(100vh-80px)] md:min-h-full">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-8 mb-4 font-sans">
          Find & Book Parking Instantly
        </h1>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          Your guide to the best parking spots in Kathmandu. Search, find, and reserve your spot with ease.
        </p>
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <iframe 
                src="https://www.youtube.com/embed/WO9hnw9Nxpw?autoplay=1&mute=1&loop=1&playlist=WO9hnw9Nxpw&controls=0&showinfo=0&modestbranding=1" 
                title="How to park a car" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            ></iframe>
        </div>
      </div>
      <div className="text-sm text-muted-foreground mt-12 pb-4">
        <Search className="h-4 w-4 mr-2 inline-block" />
        <span>Select a location from the sidebar to see details.</span>
      </div>
    </div>
  );
}
