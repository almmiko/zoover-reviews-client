export interface AverageRatingAspects {
  location: number;
  service: number;
  priceQuality: number;
  food: number;
  room: number;
  childFriendly: number;
  interior: number;
  size: number;
  activities: number;
  restaurants: number;
  sanitaryState: number;
  accessibility: number;
  nightlife: number;
  culture: number;
  surrounding: number;
  atmosphere: number;
  noviceSkiArea: number;
  advancedSkiArea: number;
  apresSki: number;
  beach: number;
  entertainment: number;
  environmental: number;
  pool: number;
  terrace: number;
}

export interface TraveledWith {
  FAMILY: number;
  FRIENDS: number;
  OTHER: number;
  COUPLE: number;
  SINGLE: number;
}

export interface ReviewStats {
  averageRating: number;
  averageRatingAspects: AverageRatingAspects;
  traveledWith: TraveledWith;
}
