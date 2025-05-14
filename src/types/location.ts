export interface Location {
  id: string;
  city: string;
  address: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: Array<{
    days: string;
    hours: string;
  }>;
  hasParking: boolean;
  publicTransport: boolean;
  accessibility: boolean;
  specialists: string[];
}