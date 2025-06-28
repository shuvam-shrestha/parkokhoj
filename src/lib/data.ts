import type { ParkingLocation } from '@/types';

export const parkingLocations: ParkingLocation[] = [
  {
    id: '1',
    name: 'New Road Parking Complex',
    address: 'New Road Gate, Kathmandu',
    coords: { lat: 27.704, lng: 85.313 },
    availability: {
      twoWheeler: { 
        total: 200, 
        available: 45,
        pricing: {
          perHour: 25,
          longHours: "NPR 150 for 8 hours",
          everyday: "NPR 3,000/month"
        },
        amenities: ["CCTV", "Covered Parking", "Restroom"]
      },
      fourWheeler: { 
        total: 50, 
        available: 5,
        pricing: {
          perHour: 80,
          longHours: "NPR 500 for 8 hours",
          everyday: "NPR 8,000/month"
        },
        amenities: ["CCTV", "Covered Parking", "Valet"]
      },
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
      twoWheeler: { 
        total: 100, 
        available: 10,
        pricing: {
            perHour: 30,
            longHours: "NPR 200 for 8 hours",
            everyday: "N/A"
        },
        amenities: ["CCTV", "Security Guard"]
      },
      fourWheeler: { 
        total: 30, 
        available: 2,
        pricing: {
            perHour: 100,
            longHours: "NPR 700 for 8 hours",
            everyday: "N/A"
        },
        amenities: ["CCTV", "Security Guard", "Valet"]
      },
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
      twoWheeler: { 
        total: 350, 
        available: 120,
        pricing: {
            perHour: 20,
            longHours: "NPR 120 for 8 hours",
            everyday: "NPR 2,500/month"
        },
        amenities: ["Covered Parking", "Helmet Storage"]
      },
      fourWheeler: { 
        total: 0, 
        available: 0 
      },
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
      twoWheeler: { 
        total: 150, 
        available: 70,
        pricing: {
            perHour: 20,
            longHours: "NPR 140 for 8 hours",
            everyday: "N/A"
        },
        amenities: ["CCTV", "Open Air"]
      },
      fourWheeler: { 
        total: 40, 
        available: 15,
        pricing: {
            perHour: 70,
            longHours: "NPR 450 for 8 hours",
            everyday: "N/A"
        },
        amenities: ["CCTV", "Open Air"]
      },
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
      twoWheeler: { 
        total: 500, 
        available: 250,
        pricing: {
            perHour: 15,
            longHours: "Free for first 2 hours",
            everyday: "NPR 2,000/month"
        },
        amenities: ["Covered Parking", "CCTV", "Shopping Cart Access"]
      },
      fourWheeler: { 
        total: 100, 
        available: 30,
        pricing: {
            perHour: 50,
            longHours: "Free for first 2 hours",
            everyday: "NPR 6,000/month"
        },
        amenities: ["Covered Parking", "CCTV", "Shopping Cart Access", "EV Charging"]
      },
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
      twoWheeler: {
        total: 80,
        available: 15,
        pricing: { perHour: 30, longHours: "NPR 200 for 8h", everyday: "N/A" },
        amenities: ["Security Guard", "Open Air"]
      },
      fourWheeler: {
        total: 10,
        available: 1,
        pricing: { perHour: 100, longHours: "NPR 700 for 8h", everyday: "N/A" },
        amenities: ["Security Guard", "Open Air"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '7',
    name: 'Kalanki Car Stop',
    address: 'Kalanki Chowk, Ring Road',
    coords: { lat: 27.696, lng: 85.281 },
    availability: {
      twoWheeler: {
        total: 120,
        available: 30,
        pricing: { perHour: 20, longHours: "NPR 150 for 8h", everyday: "NPR 2,800/month" },
        amenities: ["CCTV", "Restroom"]
      },
      fourWheeler: {
        total: 60,
        available: 10,
        pricing: { perHour: 60, longHours: "NPR 400 for 8h", everyday: "NPR 7,000/month" },
        amenities: ["CCTV", "Restroom"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '8',
    name: 'Koteshwor Multi-Level Park',
    address: 'Near Koteshwor Chowk',
    coords: { lat: 27.680, lng: 85.345 },
    availability: {
      twoWheeler: {
        total: 250,
        available: 80,
        pricing: { perHour: 25, longHours: "NPR 180 for 8h", everyday: "NPR 3,500/month" },
        amenities: ["Covered Parking", "CCTV", "Elevator"]
      },
      fourWheeler: {
        total: 80,
        available: 20,
        pricing: { perHour: 80, longHours: "NPR 550 for 8h", everyday: "NPR 9,000/month" },
        amenities: ["Covered Parking", "CCTV", "Elevator", "EV Charging"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '9',
    name: 'Jawalakhel Community Parking',
    address: 'Jawalakhel, Lalitpur',
    coords: { lat: 27.675, lng: 85.316 },
    availability: {
      twoWheeler: {
        total: 100,
        available: 40,
        pricing: { perHour: 15, longHours: "NPR 100 for 8h", everyday: "N/A" },
        amenities: ["Open Air"]
      },
      fourWheeler: {
        total: 20,
        available: 5,
        pricing: { perHour: 50, longHours: "NPR 350 for 8h", everyday: "N/A" },
        amenities: ["Open Air"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '10',
    name: 'Civil Mall Underground Parking',
    address: 'Sundhara, Kathmandu',
    coords: { lat: 27.701, lng: 85.312 },
    availability: {
      twoWheeler: {
        total: 400,
        available: 150,
        pricing: { perHour: 25, longHours: "NPR 180 for 8h", everyday: "NPR 4,000/month" },
        amenities: ["Covered Parking", "CCTV", "Security Guard"]
      },
      fourWheeler: {
        total: 120,
        available: 25,
        pricing: { perHour: 80, longHours: "NPR 600 for 8h", everyday: "NPR 10,000/month" },
        amenities: ["Covered Parking", "CCTV", "Security Guard", "Valet"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '11',
    name: 'Gongabu Bus Park Lot',
    address: 'New Bus Park, Gongabu',
    coords: { lat: 27.737, lng: 85.314 },
    availability: {
      twoWheeler: {
        total: 300,
        available: 100,
        pricing: { perHour: 15, longHours: "NPR 100 for 8h", everyday: "NPR 2,000/month" },
        amenities: ["Open Air", "Restroom"]
      },
      fourWheeler: {
        total: 50,
        available: 15,
        pricing: { perHour: 40, longHours: "NPR 300 for 8h", everyday: "NPR 5,000/month" },
        amenities: ["Open Air", "Restroom"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '12',
    name: 'Patan Dhoka Public Parking',
    address: 'Near Patan Dhoka, Lalitpur',
    coords: { lat: 27.676, lng: 85.321 },
    availability: {
      twoWheeler: {
        total: 180,
        available: 90,
        pricing: { perHour: 20, longHours: "NPR 140 for 8h", everyday: "NPR 2,500/month" },
        amenities: ["CCTV"]
      },
      fourWheeler: {
        total: 35,
        available: 8,
        pricing: { perHour: 60, longHours: "NPR 450 for 8h", everyday: "NPR 6,500/month" },
        amenities: ["CCTV"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '13',
    name: 'Boudha Stupa Parking Area',
    address: 'Boudhanath, Kathmandu',
    coords: { lat: 27.721, lng: 85.362 },
    availability: {
      twoWheeler: {
        total: 220,
        available: 60,
        pricing: { perHour: 25, longHours: "NPR 180 for 8h", everyday: "N/A" },
        amenities: ["Security Guard", "Restroom"]
      },
      fourWheeler: {
        total: 40,
        available: 12,
        pricing: { perHour: 70, longHours: "NPR 500 for 8h", everyday: "N/A" },
        amenities: ["Security Guard", "Restroom"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '14',
    name: 'Maharajgunj Wheel Stop',
    address: 'Tribhuvan University Teaching Hospital Area',
    coords: { lat: 27.735, lng: 85.326 },
    availability: {
      twoWheeler: {
        total: 150,
        available: 55,
        pricing: { perHour: 20, longHours: "NPR 150 for 8h", everyday: "NPR 3,000/month" },
        amenities: ["CCTV", "Covered Area"]
      },
      fourWheeler: {
        total: 50,
        available: 18,
        pricing: { perHour: 50, longHours: "NPR 380 for 8h", everyday: "NPR 7,500/month" },
        amenities: ["CCTV", "Covered Area"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '15',
    name: 'Balaju Industrial Park & Ride',
    address: 'Balaju Industrial District',
    coords: { lat: 27.731, lng: 85.299 },
    availability: {
      twoWheeler: {
        total: 100,
        available: 35,
        pricing: { perHour: 15, longHours: "NPR 100 for 8h", everyday: "N/A" },
        amenities: ["Open Air", "Industrial Zone"]
      },
      fourWheeler: {
        total: 70,
        available: 25,
        pricing: { perHour: 40, longHours: "NPR 300 for 8h", everyday: "N/A" },
        amenities: ["Open Air", "Industrial Zone"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '16',
    name: 'Sankhamul Riverside Parking',
    address: 'Sankhamul, Kathmandu',
    coords: { lat: 27.684, lng: 85.333 },
    availability: {
      twoWheeler: {
        total: 90,
        available: 45,
        pricing: { perHour: 15, longHours: "NPR 120 for 8h", everyday: "NPR 2,200/month" },
        amenities: ["Riverside View", "Open Air"]
      },
      fourWheeler: {
        total: 20,
        available: 9,
        pricing: { perHour: 50, longHours: "NPR 350 for 8h", everyday: "NPR 5,500/month" },
        amenities: ["Riverside View", "Open Air"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '17',
    name: 'Tinkune Open Lot',
    address: 'Tinkune, Subidhanagar',
    coords: { lat: 27.688, lng: 85.347 },
    availability: {
      twoWheeler: {
        total: 200,
        available: 110,
        pricing: { perHour: 10, longHours: "NPR 80 for 8h", everyday: "N/A" },
        amenities: ["Open Air"]
      },
      fourWheeler: {
        total: 50,
        available: 22,
        pricing: { perHour: 30, longHours: "NPR 200 for 8h", everyday: "N/A" },
        amenities: ["Open Air"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '18',
    name: 'Maitidevi Temple Parking',
    address: 'Maitidevi, Kathmandu',
    coords: { lat: 27.708, lng: 85.334 },
    availability: {
      twoWheeler: {
        total: 70,
        available: 28,
        pricing: { perHour: 20, longHours: "NPR 150 for 8h", everyday: "NPR 2,800/month" },
        amenities: ["Temple Proximity"]
      },
      fourWheeler: {
        total: 15,
        available: 4,
        pricing: { perHour: 60, longHours: "NPR 450 for 8h", everyday: "NPR 7,000/month" },
        amenities: ["Temple Proximity"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
  {
    id: '19',
    name: 'Chabahil Chowk Park',
    address: 'Near Chabahil Stupa',
    coords: { lat: 27.719, lng: 85.349 },
    availability: {
      twoWheeler: {
        total: 130,
        available: 60,
        pricing: { perHour: 20, longHours: "NPR 140 for 8h", everyday: "N/A" },
        amenities: ["CCTV", "Restroom"]
      },
      fourWheeler: {
        total: 30,
        available: 7,
        pricing: { perHour: 50, longHours: "NPR 380 for 8h", everyday: "N/A" },
        amenities: ["CCTV", "Restroom"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: false,
  },
  {
    id: '20',
    name: 'Bhaktapur Durbar Parking',
    address: 'Bhaktapur Durbar Square Entrance',
    coords: { lat: 27.672, lng: 85.428 },
    availability: {
      twoWheeler: {
        total: 250,
        available: 100,
        pricing: { perHour: 30, longHours: "NPR 200 for 8h", everyday: "NPR 3,500/month" },
        amenities: ["Security Guard", "Heritage Site"]
      },
      fourWheeler: {
        total: 60,
        available: 15,
        pricing: { perHour: 100, longHours: "NPR 700 for 8h", everyday: "NPR 8,500/month" },
        amenities: ["Security Guard", "Heritage Site"]
      },
    },
    image: 'https://placehold.co/600x400.png',
    isMonthly: true,
  },
];
