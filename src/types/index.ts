export type ParkingLocation = {
  id: string;
  name: string;
  address: string;
  coords: { lat: number; lng: number };
  availability: {
    twoWheeler: {
      total: number;
      available: number;
      pricing?: {
        perHour: number;
        longHours: string;
        everyday: string;
      };
      amenities?: string[];
    };
    fourWheeler: {
      total: number;
      available: number;
      pricing?: {
        perHour: number;
        longHours: string;
        everyday: string;
      };
      amenities?: string[];
    };
  };
  image: string;
  isMonthly: boolean;
  isOpen: boolean;
  closingTime: string;
};
