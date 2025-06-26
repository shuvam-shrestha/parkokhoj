import type { ParkingLocation } from '@/types';

export const parkingLocations: ParkingLocation[] = [
  {
    id: '1',
    name: 'New Road Parking Complex',
    address: 'New Road Gate, Kathmandu',
    coords: { lat: 27.704, lng: 85.313 },
    availability: {
      twoWheeler: { total: 200, available: 45 },
      fourWheeler: { total: 50, available: 5 },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '2',
    name: 'Durbarmarg Secure Park',
    address: 'Opposite Hotel Annapurna, Durbarmarg',
    coords: { lat: 27.712, lng: 85.318 },
    availability: {
      twoWheeler: { total: 100, available: 10 },
      fourWheeler: { total: 30, available: 2 },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '3',
    name: 'Thamel Bike Station',
    address: 'Saat Ghumti, Thamel',
    coords: { lat: 27.717, lng: 85.311 },
    availability: {
      twoWheeler: { total: 350, available: 120 },
      fourWheeler: { total: 0, available: 0 },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '4',
    name: 'Lalitpur Central Parking',
    address: 'Pulchowk, Lalitpur',
    coords: { lat: 27.683, lng: 85.318 },
    availability: {
      twoWheeler: { total: 150, available: 70 },
      fourWheeler: { total: 40, available: 15 },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '5',
    name: 'Bhat-Bhateni Supermarket Park',
    address: 'Bhat-Bhateni, Naxal',
    coords: { lat: 27.718, lng: 85.328 },
    availability: {
      twoWheeler: { total: 500, available: 250 },
      fourWheeler: { total: 100, available: 30 },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '6',
    name: 'Basantapur Square Parking',
    address: 'Basantapur Durbar Square Area',
    coords: { lat: 27.704, lng: 85.307 },
    availability: {
      twoWheeler: { total: 80, available: 15 },
      fourWheeler: { total: 10, available: 1 },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
];
