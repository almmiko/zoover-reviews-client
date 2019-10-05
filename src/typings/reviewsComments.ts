export interface Parent {
  id: string;
}

export interface General {
  general: number;
}

export interface Aspects {
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
  [key: string]: number;
}

export interface Ratings {
  general: General;
  aspects: Aspects;
}

export interface Titles {
  [key: string]: string;
}

export interface Texts {
  [key: string]: string;
}

export interface Resource {
  parents: Parent[];
  id: string;
  traveledWith: string;
  entryDate: number;
  travelDate: number;
  ratings: Ratings;
  titles: Titles;
  texts: Texts;
  user: string;
  locale: string;
}

export interface Meta {
  page: string;
  limit: string;
  totalPages: number;
}

export interface ReviewsComments {
  resources: Resource[];
  meta: Meta;
}
