import type { Journey } from "@/types/journey";

export const zimbabweExplorer: Journey = {
  slug: "zimbabwe-explorer",
  title: "Zimbabwe Explorer",
  destination: "Zimbabwe",
  duration: "10 Days",
  nights: "9 Nights",
  price: "From $2,800 / Adult",
  childPrice: "From $1,499 / Child",
  location: "Victoria Falls · Hwange National Park · Great Zimbabwe",
  image: "/images/zimbabwe-explorer.jpg",

  transportation: "Bus, Airlines",
  tourType: "Eco-Tour, Hiking",
  language: "English, Shona, Ndebele",
  fitnessLevel: "Easy to Moderate",
  groupSize: "2-15",
  minimumAge: "12",
  maximumAge: "65",

  overview:
    "Experience Zimbabwe’s spectacular natural beauty, abundant wildlife and rich cultural heritage on this unforgettable 10-day adventure. Explore the magnificent Victoria Falls, enjoy exciting safari experiences in Hwange National Park, discover ancient historical landmarks and immerse yourself in authentic local culture. From breathtaking landscapes and unforgettable wildlife encounters to warm Zimbabwean hospitality, this carefully designed journey offers the perfect balance of adventure, relaxation and discovery.",

  itineraryIntro:
    "Discover Zimbabwe's incredible diversity as you travel from the iconic Victoria Falls to world-renowned wildlife reserves and historic cultural landmarks. This journey combines breathtaking scenery, unforgettable safari experiences and authentic cultural encounters to create memories that will last a lifetime.",

  highlights: [
    "Experience the awe-inspiring Victoria Falls, one of the Seven Natural Wonders of the World.",
    "Enjoy a sunset cruise along the mighty Zambezi River.",
    "Take to the skies on an optional helicopter flight over Victoria Falls.",
    "Explore Hwange National Park, Zimbabwe's largest wildlife reserve.",
    "Search for elephants, lions, buffalo, leopards, giraffes and countless bird species during guided safari drives.",
    "Visit local communities and vibrant craft markets.",
    "Discover the fascinating history of Great Zimbabwe.",
    "Enjoy authentic Zimbabwean cuisine and warm local hospitality.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Victoria Falls",
      description:
        "Arrive in Victoria Falls and transfer to your accommodation. Spend the afternoon relaxing before enjoying a spectacular sunset cruise on the Zambezi River, where you may spot hippos, crocodiles, elephants and abundant birdlife while watching the African sunset.",
    },
    {
      day: "Day 2",
      title: "Victoria Falls Experience",
      description:
        "Begin the day with a guided tour of the magnificent Victoria Falls, where you will witness one of the world's greatest natural wonders. Later, enjoy free time to explore the town or choose an optional helicopter flight for breathtaking aerial views of the falls and surrounding landscape.",
    },
    {
      day: "Day 3",
      title: "Journey to Hwange National Park",
      description:
        "Travel to Hwange National Park, Zimbabwe's largest and most famous wildlife reserve. Settle into your safari lodge before heading out on an afternoon game drive in search of Africa's incredible wildlife.",
    },
    {
      day: "Day 4",
      title: "Full-Day Safari Adventure",
      description:
        "Spend the day exploring Hwange National Park with experienced safari guides. Search for elephants, lions, buffalo, giraffes, zebras, antelope and many other remarkable species while learning about Zimbabwe's conservation efforts.",
    },
    {
      day: "Day 5",
      title: "Walking Safari Experience",
      description:
        "Experience the African bush from a completely different perspective during a professionally guided walking safari. Learn about animal tracks, native plants and the delicate balance of the local ecosystem while enjoying a close connection with nature.",
    },
    {
      day: "Day 6",
      title: "Journey to Great Zimbabwe",
      description:
        "Travel to the historic Great Zimbabwe Monument, one of Africa's most important archaeological sites. Explore the fascinating stone ruins while learning about the rich history and heritage of this ancient civilisation.",
    },
    {
      day: "Day 7",
      title: "Culture and Community",
      description:
        "Meet local communities, browse traditional craft markets and discover Zimbabwean culture through authentic experiences, local cuisine and interactions with skilled artisans.",
    },
    {
      day: "Day 8",
      title: "Scenic Landscapes",
      description:
        "Continue your journey through Zimbabwe's beautiful countryside, enjoying spectacular scenery, wildlife and opportunities to photograph the country's diverse natural landscapes.",
    },
    {
      day: "Day 9",
      title: "Final Safari Experience",
      description:
        "Enjoy one final safari game drive before returning to Victoria Falls. Celebrate your adventure with a farewell dinner featuring traditional Zimbabwean flavours and hospitality.",
    },
    {
      day: "Day 10",
      title: "Departure",
      description:
        "After breakfast, transfer to Victoria Falls Airport for your onward journey, taking with you unforgettable memories of Zimbabwe's remarkable wildlife, landscapes and welcoming people.",
    },
  ],

  includes: [
    "9 Nights Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Professional Tour Guide",
    "Guided Tour of Victoria Falls",
    "Zambezi Sunset Cruise",
    "Safari Game Drives",
    "Walking Safari",
    "Great Zimbabwe Entry",
    "Selected Entrance Fees",
    "Transport Throughout the Tour",
  ],

  excludes: [
    "International Flights",
    "Travel Insurance",
    "Visa Fees",
    "Optional Helicopter Flight",
    "Personal Expenses",
    "Lunches and Dinners unless specified",
    "Tips and Gratuities",
  ],

  faqs: [
    {
      question: "Is this tour suitable for first-time visitors to Zimbabwe?",
      answer:
        "Yes. The tour combines Zimbabwe's best-known natural, wildlife and cultural attractions and is suitable for first-time visitors.",
    },
    {
      question: "Is the walking safari compulsory?",
      answer:
        "No. The walking safari is guided and can be replaced with a vehicle-based activity where necessary.",
    },
    {
      question: "Is the helicopter flight included?",
      answer:
        "No. The helicopter flight over Victoria Falls is optional and can be added to the itinerary at an additional cost.",
    },
    {
      question: "What is the best time to take this tour?",
      answer:
        "February to May is recommended for lush scenery and strong Victoria Falls water flow, although the journey can be arranged at other times of the year.",
    },
  ],
};