import type { Journey } from "@/types/journey";

export const botswanaExplorer: Journey = {
  slug: "botswana-explorer",
  title: "Botswana Explorer",
  destination: "Botswana",
  duration: "10 Days",
  nights: "9 Nights",
  price: "From $1,899 / Adult",
  childPrice: "From $1,699 / Child",
  location: "Kasane · Chobe National Park · Okavango Delta · Moremi Game Reserve",
  image: "/images/botswana-explorer.jpg",

  transportation: "Bus, Airlines",
  tourType: "Eco-Tour, Hiking",
  language: "English, Setswana",
  fitnessLevel: "Easy to Moderate",
  groupSize: "2-15",
  minimumAge: "12",
  maximumAge: "65",

  overview:
    "Experience Botswana's untouched wilderness on this extraordinary 10-day safari adventure through some of Africa's most celebrated wildlife destinations. Explore the famous Chobe National Park, glide through the tranquil waterways of the Okavango Delta in a traditional mokoro canoe, discover the incredible biodiversity of Moremi Game Reserve, and enjoy unforgettable encounters with Africa's iconic wildlife. Designed for nature lovers and safari enthusiasts, this journey combines luxury, adventure and authentic African experiences while showcasing Botswana's commitment to wildlife conservation and sustainable tourism.",

  itineraryIntro:
    "Journey into the heart of Botswana's spectacular wilderness as you explore pristine national parks, peaceful waterways and wildlife-rich landscapes. From exciting game drives to relaxing river cruises and unforgettable mokoro excursions, every day offers a new adventure in one of Africa's greatest safari destinations.",

  highlights: [
    "Explore the wildlife-rich Chobe National Park.",
    "Enjoy a sunset boat cruise along the Chobe River.",
    "Experience a traditional mokoro canoe safari through the Okavango Delta.",
    "Discover the incredible wildlife of Moremi Game Reserve.",
    "Join expert guides on thrilling safari game drives.",
    "Spot elephants, lions, leopards, buffalo, giraffes, hippos, crocodiles and countless bird species.",
    "Take an optional scenic flight over the Okavango Delta.",
    "Experience authentic Botswana hospitality and cuisine.",
  ],

  itinerary: [
    {
      day: "Day 1",
      title: "Arrival in Kasane",
      description:
        "Arrive in Kasane, the gateway to Chobe National Park. After settling into your lodge, enjoy a relaxing sunset cruise along the Chobe River, where elephants, hippos, crocodiles and a variety of birdlife gather along the riverbanks.",
    },
    {
      day: "Day 2",
      title: "Chobe National Park Safari",
      description:
        "Spend the day exploring Chobe National Park on exciting morning and afternoon safari game drives. Famous for its enormous elephant population, the park also offers excellent opportunities to see lions, buffalo, giraffes, zebras, antelope and countless bird species.",
    },
    {
      day: "Day 3",
      title: "Journey to the Okavango Delta",
      description:
        "Travel into the world-famous Okavango Delta, one of the largest inland deltas on Earth. Upon arrival, relax at your safari camp while taking in the peaceful surroundings before your next adventure begins.",
    },
    {
      day: "Day 4",
      title: "Traditional Mokoro Safari",
      description:
        "Experience Botswana's most iconic activity as you glide silently through the delta in a traditional mokoro canoe. Guided by experienced local polers, you'll discover incredible birdlife, aquatic plants and wildlife in one of Africa's most unique ecosystems.",
    },
    {
      day: "Day 5",
      title: "Walking Safari",
      description:
        "Explore the wilderness on foot with experienced guides who will introduce you to the fascinating details of Botswana's ecosystem, from animal tracks and native plants to smaller wildlife often missed during game drives.",
    },
    {
      day: "Day 6",
      title: "Moremi Game Reserve",
      description:
        "Travel to the renowned Moremi Game Reserve for another unforgettable safari experience. This diverse reserve offers exceptional wildlife viewing across wetlands, forests and open grasslands.",
    },
    {
      day: "Day 7",
      title: "Full-Day Safari Adventure",
      description:
        "Enjoy a full day exploring Moremi with professional guides. Search for the Big Five while learning about Botswana's world-leading conservation efforts and remarkable biodiversity.",
    },
    {
      day: "Day 8",
      title: "Scenic Flight Over the Delta",
      description:
        "Take to the skies on an optional scenic flight for breathtaking aerial views of the Okavango Delta. The afternoon is free to relax at camp or enjoy another guided wildlife activity.",
    },
    {
      day: "Day 9",
      title: "Farewell Safari",
      description:
        "Enjoy one final morning game drive before returning to your lodge for a memorable farewell dinner celebrating your Botswana safari adventure.",
    },
    {
      day: "Day 10",
      title: "Departure",
      description:
        "After breakfast, transfer to the airport for your onward journey. Leave Botswana with unforgettable memories of spectacular wildlife, peaceful landscapes and authentic safari experiences.",
    },
  ],

  includes: [
    "9 Nights Accommodation",
    "Daily Breakfast",
    "Airport Transfers",
    "Professional Safari Guide",
    "Chobe National Park Safari",
    "Chobe River Sunset Cruise",
    "Traditional Mokoro Safari",
    "Walking Safari",
    "Moremi Game Reserve Safari",
    "Selected Entrance Fees",
    "Transport Throughout the Tour",
  ],

  excludes: [
    "International Flights",
    "Travel Insurance",
    "Visa Fees",
    "Optional Scenic Flight",
    "Personal Expenses",
    "Lunches and Dinners unless specified",
    "Tips and Gratuities",
  ],

  faqs: [
    {
      question: "Is Botswana good for first-time safari travellers?",
      answer:
        "Absolutely. Botswana offers some of Africa's finest wildlife experiences, making it an excellent destination for both first-time visitors and experienced safari enthusiasts.",
    },
    {
      question: "What wildlife can I expect to see?",
      answer:
        "Depending on the season, you may encounter elephants, lions, leopards, buffalo, giraffes, zebras, hippos, crocodiles, antelope and hundreds of bird species.",
    },
    {
      question: "Is the mokoro safari safe?",
      answer:
        "Yes. All mokoro excursions are guided by experienced local guides who prioritise safety while providing an authentic Okavango Delta experience.",
    },
    {
      question: "Is the scenic flight included?",
      answer:
        "No. The scenic flight over the Okavango Delta is optional and can be booked as an additional experience.",
    },
  ],
};