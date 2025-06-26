export type ParkingLocation = {
  id: string;
  name: string;
  address: string;
  coords: { lat: number; lng: number };
  availability: {
    twoWheeler: { total: number; available: number };
    fourWheeler: { total: number; available: number };
  };
  image: string;
  isMonthly: boolean;
};
