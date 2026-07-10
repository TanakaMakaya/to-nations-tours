import type { Journey } from "@/types/journey";

export const southAfricanClassic: Journey = {
  slug: "south-african-classic",
  title: "South African Classic",
  destination: "South Africa",
  duration: "10 Days",
  nights: "9 Nights",
  price: "From $2,450 / Adult",
  childPrice: "From $1,650 / Child",
  location: "Cape Town · Cape Winelands · Garden Route · Safari",
  image: "/images/south-african-classic.jpg",

  transportation: "Private Vehicle, Domestic Flight",
  tourType: "Culture, Nature, Safari",
  language: "English",
  fitnessLevel: "Easy to Moderate",
  groupSize: "2-15",
  minimumAge: "10",
  maximumAge: "75",

  overview:
    "Experience the highlights of South Africa on this carefully designed 10-day journey combining Cape Town, the Cape Winelands, the scenic Garden Route and an unforgettable African safari. From iconic landmarks and coastal landscapes to local cuisine, cultural encounters and wildlife adventures, this tour offers a complete introduction to one of Africa's most diverse destinations.",

  itineraryIntro:
    "Discover South Africa's most celebrated destinations on a journey filled with iconic scenery, local culture, delicious food, coastal beauty and unforgettable wildlife encounters. Each day introduces a different side of the country while allowing enough time to relax and enjoy the experience.",

  highlights: [
    "Explore Cape Town and its most famous landmarks.",
    "Ride the cable car to the summit of Table Mountain.",
    "Visit the colourful Bo-Kaap neighbourhood and learn about its heritage.",
    "Discover the Cape Peninsula, Cape Point and the penguins at Boulders Beach.",
    "Enjoy wine and food tastings in the Cape Winelands.",
    "Travel along the scenic Garden Route.",
    "Explore Knysna, Tsitsikamma and the surrounding coastal landscapes.",
    "Enjoy guided safari game drives in search of Africa's iconic wildlife.",
    "Experience South African culture, hospitality and local cuisine.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Welcome to Cape Town",
      description:
        "Arrive at Cape Town International Airport, where your guide will welcome you and transfer you to your accommodation. After settling in, enjoy free time to relax or explore the nearby V&A Waterfront before a welcome dinner and introduction to your journey.",
    },
    {
      day: "Day 2",
      title: "Cape Town City Experience",
      description:
        "Begin your day with a cable-car journey to the summit of Table Mountain, weather permitting. Continue through the city centre, visit the colourful Bo-Kaap neighbourhood and explore the Company's Garden, local markets and the vibrant V&A Waterfront.",
    },
    {
      day: "Day 3",
      title: "Cape Peninsula Discovery",
      description:
        "Travel along one of the world's most scenic coastal routes towards Cape Point. Visit the Cape of Good Hope, enjoy spectacular ocean views and stop at Boulders Beach to see the famous African penguin colony before returning to Cape Town.",
    },
    {
      day: "Day 4",
      title: "Cape Winelands",
      description:
        "Travel to the beautiful Cape Winelands, visiting historic towns such as Stellenbosch or Franschhoek. Enjoy selected wine tastings, local food pairings and time to appreciate the vineyards, mountain scenery and Cape Dutch architecture.",
    },
    {
      day: "Day 5",
      title: "Journey to the Garden Route",
      description:
        "Depart Cape Town and travel towards the Garden Route through changing landscapes, mountain passes and small towns. Arrive in the coastal region and settle into your accommodation for a relaxing evening.",
    },
    {
      day: "Day 6",
      title: "Knysna and Coastal Experiences",
      description:
        "Explore the town of Knysna, its waterfront and the scenic lagoon. Visit the Knysna Heads viewpoint and enjoy optional activities such as a lagoon cruise, local market visit or a peaceful walk along the coast.",
    },
    {
      day: "Day 7",
      title: "Tsitsikamma Adventure",
      description:
        "Discover the forests and dramatic coastline of Tsitsikamma National Park. Walk across the suspension bridges, enjoy scenic hiking trails and take in the rugged beauty of the Indian Ocean coastline.",
    },
    {
      day: "Day 8",
      title: "Travel to the Safari Region",
      description:
        "Leave the Garden Route and continue to your safari destination. After checking into the lodge, enjoy an afternoon or sunset game drive with professional guides in search of elephants, lions, rhinos, buffalo and other wildlife.",
    },
    {
      day: "Day 9",
      title: "Full Safari Experience",
      description:
        "Begin the day with an early morning game drive when wildlife is most active. Return to the lodge for breakfast and relaxation before heading out again for an afternoon safari and a final evening in the African bush.",
    },
    {
      day: "Day 10",
      title: "Farewell South Africa",
      description:
        "Enjoy breakfast at the lodge before transferring to the airport for your onward journey. Depart with unforgettable memories of South Africa's cities, coastlines, culture, landscapes and wildlife.",
    },
  ],

  includes: [
    "9 Nights Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Private Tour Transportation",
    "Professional Local Guide",
    "Table Mountain Cableway Ticket",
    "Cape Peninsula Tour",
    "Cape Point Entrance Fee",
    "Boulders Beach Entrance Fee",
    "Selected Wine Tastings",
    "Garden Route Transportation",
    "Tsitsikamma National Park Entrance",
    "Safari Lodge Accommodation",
    "Guided Safari Game Drives",
    "Selected Entrance Fees",
  ],

  excludes: [
    "International Flights",
    "Travel Insurance",
    "Visa Fees",
    "Personal Expenses",
    "Lunches and Dinners unless specified",
    "Optional Activities",
    "Additional Wine or Beverage Purchases",
    "Tips and Gratuities",
    "Medical Expenses",
  ],

  faqs: [
    {
      question: "Is this tour suitable for first-time visitors?",
      answer:
        "Yes. The South African Classic is designed to introduce first-time visitors to the country's most popular cultural, scenic and wildlife experiences.",
    },
    {
      question: "How much walking is involved?",
      answer:
        "Most activities involve light walking. Some optional walks in Cape Town and Tsitsikamma may require moderate fitness, but alternatives can usually be arranged.",
    },
    {
      question: "What wildlife might we see?",
      answer:
        "Wildlife sightings vary, but guests may see elephants, lions, rhinos, buffalo, giraffes, zebras, antelope and many bird species.",
    },
    {
      question: "Can the itinerary be customised?",
      answer:
        "Yes. The itinerary can be adjusted for private travellers, families, groups, preferred accommodation and selected optional activities.",
    },
  ],
};