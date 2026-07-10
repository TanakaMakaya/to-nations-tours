import type { Journey } from "@/types/journey";

export const gardenRoute: Journey = {
  slug: "garden-route",
  title: "Garden Route",
  destination: "South Africa",
  duration: "7 Days",
  nights: "6 Nights",
  price: "From $1,850 / Adult",
  childPrice: "From $1,250 / Child",
  location: "Mossel Bay · Oudtshoorn · Knysna · Tsitsikamma",
  image: "/images/garden-route.jpg",

  transportation: "Private Vehicle",
  tourType: "Scenic, Nature, Adventure",
  language: "English",
  fitnessLevel: "Easy to Moderate",
  groupSize: "2-15",
  minimumAge: "8",
  maximumAge: "75",

  overview:
    "Discover one of South Africa's most beautiful regions on this scenic Garden Route journey. Travel through coastal towns, mountain passes, forests, caves and lagoons while enjoying a balanced mix of nature, culture, relaxation and optional adventure activities.",

  itineraryIntro:
    "This journey follows South Africa's famous Garden Route, combining coastal beauty, local culture, wildlife encounters and memorable outdoor experiences. Each day offers a different landscape and a relaxed opportunity to explore the region.",

  highlights: [
    "Travel along one of South Africa's most scenic coastal routes.",
    "Visit Mossel Bay and enjoy beautiful Indian Ocean views.",
    "Explore the Cango Caves near Oudtshoorn.",
    "Discover the culture and landscapes of the Klein Karoo.",
    "Experience Knysna Lagoon and the famous Knysna Heads.",
    "Visit local markets and enjoy regional food experiences.",
    "Walk through the forests and coastline of Tsitsikamma National Park.",
    "Cross the famous Storms River suspension bridge.",
    "Choose from optional activities including ziplining, kayaking and lagoon cruises.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Cape Town to Mossel Bay",
      description:
        "Depart Cape Town and begin your journey along the scenic route towards Mossel Bay. Travel through rolling farmland and mountain landscapes before arriving on the coast. Settle into your accommodation and enjoy time to explore the beachfront or harbour area.",
    },
    {
      day: "Day 2",
      title: "Mossel Bay Discovery",
      description:
        "Explore Mossel Bay's coastline, local history and relaxed seaside atmosphere. Visit selected viewpoints and attractions, with time for optional activities such as a beach walk, cultural visit or boat experience.",
    },
    {
      day: "Day 3",
      title: "Oudtshoorn and the Klein Karoo",
      description:
        "Travel inland across the Outeniqua Mountains to Oudtshoorn. Visit the famous Cango Caves and learn about the unique landscapes and culture of the Klein Karoo. Optional experiences may include a local farm visit or wildlife encounter.",
    },
    {
      day: "Day 4",
      title: "Journey to Knysna",
      description:
        "Return towards the coast and continue to Knysna, one of the Garden Route's most popular towns. Visit the waterfront, enjoy views over the lagoon and stop at the Knysna Heads for spectacular coastal scenery.",
    },
    {
      day: "Day 5",
      title: "Knysna and Leisure",
      description:
        "Enjoy a relaxed day in and around Knysna. Browse local markets, sample regional cuisine or join an optional lagoon cruise. Guests may also choose to explore nearby beaches, forests or nature reserves.",
    },
    {
      day: "Day 6",
      title: "Tsitsikamma National Park",
      description:
        "Travel to Tsitsikamma National Park and experience its dramatic forests and coastline. Walk to the Storms River suspension bridge, enjoy scenic trails and choose from optional activities such as kayaking, ziplining or a forest adventure.",
    },
    {
      day: "Day 7",
      title: "Farewell Garden Route",
      description:
        "Enjoy breakfast before departing for your onward journey. Depending on the travel plan, continue towards Gqeberha or return to Cape Town with unforgettable memories of the Garden Route.",
    },
  ],

  includes: [
    "6 Nights Accommodation",
    "Daily Breakfast",
    "Private Tour Transportation",
    "Professional Local Guide",
    "Airport or Hotel Transfers",
    "Mossel Bay Sightseeing",
    "Cango Caves Entrance",
    "Knysna Orientation Tour",
    "Knysna Heads Viewpoint",
    "Tsitsikamma National Park Entrance",
    "Storms River Suspension Bridge Walk",
    "Selected Entrance Fees",
  ],

  excludes: [
    "International Flights",
    "Domestic Flights unless specified",
    "Travel Insurance",
    "Visa Fees",
    "Personal Expenses",
    "Lunches and Dinners unless specified",
    "Optional Adventure Activities",
    "Lagoon Cruises unless specified",
    "Tips and Gratuities",
  ],

  faqs: [
    {
      question: "Is the Garden Route suitable for families?",
      answer:
        "Yes. The route includes many family-friendly attractions, scenic stops and flexible activities suitable for different age groups.",
    },
    {
      question: "Are adventure activities compulsory?",
      answer:
        "No. Activities such as ziplining, kayaking and cruises are optional. Guests can choose more relaxed alternatives.",
    },
    {
      question: "What is the fitness level required?",
      answer:
        "The tour is easy to moderate. Most sightseeing involves light walking, while longer trails and adventure activities are optional.",
    },
    {
      question: "Can the tour start or end in Gqeberha?",
      answer:
        "Yes. The itinerary can be adapted to start or finish in Cape Town or Gqeberha, depending on the traveller's plans.",
    },
  ],
};