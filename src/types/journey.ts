export type ItineraryDay = {
  day: string;
  title: string;
  description: string;
};

export type Journey = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  nights: string;
  price: string;
  childPrice: string;
  location: string;
  image: string;

  transportation: string;
  tourType: string;
  language: string;
  fitnessLevel: string;
  groupSize: string;
  minimumAge: string;
  maximumAge: string;

  overview: string;
  itineraryIntro: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  gallery?: string[];

faqs?: {
  question: string;
  answer: string;
}[];
};