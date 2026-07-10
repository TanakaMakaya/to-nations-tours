import type { Journey } from "@/types/journey";

export const thrillSeekers: Journey = {
  slug: "thrill-seekers",
  title: "Thrill Seekers",
  destination: "South Africa",
  duration: "8 Days",
  nights: "7 Nights",
  price: "From $2,250 / Adult",
  childPrice: "From $1,550 / Child",
  location: "Cape Town · Garden Route · Tsitsikamma",
  image: "/images/thrill-seekers.jpg",

  transportation: "Private Vehicle",
  tourType: "Adventure, Nature, Safari",
  language: "English",
  fitnessLevel: "Moderate to High",
  groupSize: "2-12",
  minimumAge: "16",
  maximumAge: "60",

  overview:
    "Designed for adrenaline lovers, Thrill Seekers combines South Africa's most exciting outdoor adventures with breathtaking scenery and unforgettable wildlife encounters. From mountain hikes and ziplining to kayaking, safaris and optional bungee jumping, every day offers a new adventure.",

  itineraryIntro:
    "Push your limits while exploring South Africa's most spectacular landscapes. This carefully curated adventure combines outdoor activities, scenic drives, wildlife experiences and plenty of opportunities to create unforgettable memories.",

  highlights: [
    "Ride the Table Mountain Cableway.",
    "Explore Cape Point and the Cape Peninsula.",
    "Experience one of the world's highest commercial bungee jumps (optional).",
    "Zipline through indigenous forests.",
    "Walk across the famous Storms River Suspension Bridge.",
    "Kayak through spectacular river gorges (optional).",
    "Enjoy thrilling safari game drives.",
    "Visit Knysna and the beautiful Garden Route.",
    "Take unforgettable coastal hikes and scenic viewpoints.",
    "Optional helicopter flights over Cape Town.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Welcome to Cape Town",
      description:
        "Arrive in Cape Town and meet your guide before settling into your accommodation. Enjoy a relaxed evening exploring the vibrant V&A Waterfront and prepare for the adventure ahead.",
    },
    {
      day: "Day 2",
      title: "Cape Town Adventure",
      description:
        "Ride the cable car up Table Mountain before exploring the city. Continue to the Cape Peninsula with stops at Chapman's Peak Drive, Cape Point and Boulders Beach. Guests may choose an optional helicopter flight over the city.",
    },
    {
      day: "Day 3",
      title: "Journey Along the Garden Route",
      description:
        "Travel east along South Africa's famous Garden Route while enjoying mountain passes, coastal scenery and charming towns before arriving in Knysna.",
    },
    {
      day: "Day 4",
      title: "Knysna & Adventure Activities",
      description:
        "Spend the day exploring Knysna before choosing optional activities such as kayaking, lagoon cruises, mountain biking or forest hiking.",
    },
    {
      day: "Day 5",
      title: "Tsitsikamma National Park",
      description:
        "Discover Tsitsikamma National Park by crossing the iconic Storms River Suspension Bridge and exploring beautiful forest trails. Optional ziplining and kayaking experiences are available.",
    },
    {
      day: "Day 6",
      title: "Ultimate Adrenaline Day",
      description:
        "Today is all about adrenaline. Guests may experience the world-famous Bloukrans Bridge Bungy Jump (optional), one of the highest commercial bungee jumps in the world. Those preferring a slower pace can enjoy scenic viewpoints and local attractions.",
    },
    {
      day: "Day 7",
      title: "Safari Adventure",
      description:
        "Travel to a private game reserve and enjoy morning or afternoon safari drives in search of Africa's Big Five while learning about wildlife conservation.",
    },
    {
      day: "Day 8",
      title: "Farewell South Africa",
      description:
        "Enjoy breakfast before your transfer to the airport, leaving with unforgettable memories of South Africa's landscapes, wildlife and adventure experiences.",
    },
  ],

  includes: [
    "7 Nights Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Private Transportation",
    "Professional Tour Guide",
    "Table Mountain Cableway Ticket",
    "Cape Peninsula Tour",
    "Garden Route Tour",
    "Knysna Visit",
    "Tsitsikamma National Park Entrance",
    "Safari Game Drive",
    "Selected Entrance Fees",
  ],

  excludes: [
    "International Flights",
    "Travel Insurance",
    "Visa Fees",
    "Lunches and Dinners unless specified",
    "Bungee Jump Fees",
    "Ziplining Fees",
    "Kayaking Fees",
    "Helicopter Flights",
    "Personal Expenses",
    "Tips and Gratuities",
  ],

  faqs: [
    {
      question: "Do I have to participate in all adventure activities?",
      answer:
        "No. Adventure activities such as bungee jumping, kayaking and helicopter flights are optional. Alternative sightseeing activities are available.",
    },
    {
      question: "Is this tour suitable for beginners?",
      answer:
        "Yes. Most activities can be enjoyed by first-time adventurers. Experienced guides provide safety briefings before every activity.",
    },
    {
      question: "What should I pack?",
      answer:
        "Comfortable walking shoes, outdoor clothing, sunscreen, swimwear, a light jacket and a camera are recommended.",
    },
    {
      question: "Is the safari included?",
      answer:
        "Yes. Guided safari game drives are included in the package. Optional additional game drives may be arranged.",
    },
  ],
};