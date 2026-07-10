import type { Journey } from "@/types/journey";

export const essenceOfSouthAfrica: Journey = {
  slug: "essence-of-south-africa",
  title: "Essence of South Africa",
  destination: "South Africa",
  duration: "7 Days",
  nights: "6 Nights",
  price: "From $1,950 / Adult",
  childPrice: "From $1,200 / Child",
  location: "Cape Town · Cape Winelands · Safari",
  image: "/images/essence-south-africa.jpg",

  transportation: "Bus, Airlines",
  tourType: "Eco-Tour, Hiking",
  language: "English, Zulu, Sotho",
  fitnessLevel: "Easy to Moderate",
  groupSize: "2-15",
  minimumAge: "12",
  maximumAge: "65",

  overview:
    "Discover the true essence of South Africa on this unforgettable 7-day journey that blends breathtaking landscapes, vibrant culture, world-famous cuisine, and unforgettable wildlife experiences.",

  itineraryIntro:
    "Experience the perfect introduction to South Africa as you explore vibrant cities, rich cultural heritage, award-winning wine regions, and unforgettable wildlife reserves.",

  highlights: [
    "Discover the colourful Bo-Kaap neighbourhood and rich history of Cape Town.",
    "Visit the historic Robben Island, where Nelson Mandela was imprisoned.",
    "Ride the cable car to the summit of Table Mountain.",
    "Experience the beautiful Cape Winelands with premium wine and food tastings.",
    "Enjoy unforgettable safari game drives in one of South Africa's renowned wildlife regions.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Welcome to Cape Town",
      description:
        "Arrive in Cape Town and meet your guide before visiting Robben Island, Bo-Kaap and the District Six Museum.",
    },
    {
      day: "Day 2",
      title: "Cape Town City Discovery",
      description:
        "Visit Table Mountain, explore Cape Town, enjoy the V&A Waterfront and browse local artisan markets.",
    },
    {
      day: "Day 3",
      title: "Cape Winelands Experience",
      description:
        "Travel into the Cape Winelands for wine tastings, food pairings and scenic vineyard landscapes.",
    },
    {
      day: "Day 4",
      title: "Wine, Culture & Local Flavours",
      description:
        "Meet local producers and enjoy immersive food, wine and community market experiences.",
    },
    {
      day: "Day 5",
      title: "Journey to the Safari Region",
      description:
        "Travel to your safari destination and enjoy an afternoon game drive with experienced guides.",
    },
    {
      day: "Day 6",
      title: "Safari & Conservation Experience",
      description:
        "Enjoy morning and afternoon safari drives while learning about conservation and wildlife protection.",
    },
    {
      day: "Day 7",
      title: "Farewell South Africa",
      description:
        "Enjoy breakfast before transferring to the airport for your departure.",
    },
  ],

  includes: [
    "6 Nights Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Domestic Flights",
    "Professional Tour Guide",
    "Robben Island Entry",
    "Table Mountain Experience",
    "Wine Tasting",
    "Safari Game Drives",
    "Selected Entrance Fees",
    "Transport Throughout the Tour",
  ],

  excludes: [
    "International Flights",
    "Travel Insurance",
    "Visa Fees",
    "Personal Expenses",
    "Lunches and Dinners unless specified",
    "Optional Activities",
    "Tips and Gratuities",
  ],
};