import BotswanaArticle from "./botswana";
import CapeTownArticle from "./cape-town";
import SafariPackingArticle from "./packing";
import ZimbabweArticle from "./zimbabwe";


export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  heroImage: string;
  date: string;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "ultimate-first-time-guide-to-cape-town",
    title: "The Ultimate First-Time Guide to Cape Town",
    excerpt:
      "Everything you need to know before visiting South Africa's Mother City.",
    category: "Travel Guide",
    readTime: "4 min read",
    date: "July 2026",
    heroImage: "https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/Screenshot%202026-08-10%20at%2020.55.09.png",
  },
  {
    slug: "what-to-pack-for-an-african-safari",
    title: "What to Pack for an African Safari",
    excerpt:
      "Your complete safari packing guide for a comfortable and unforgettable adventure.",
    category: "Safari Tips",
    readTime: "3 min read",
    date: "July 2026",
    heroImage: "https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/african%20safari",
  },
  {
    slug: "hidden-gems-of-zimbabwe",
    title: "Hidden Gems of Zimbabwe",
    excerpt:
      "Discover the places that most travellers never get to see.",
    category: "Zimbabwe",
    readTime: "5 min read",
    date: "July 2026",
    heroImage: "https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/greatzimbwe",
  },
  {
    slug: "luxury-safaris-in-botswana",
    title: "Luxury Safaris in Botswana",
    excerpt:
      "Where untamed wilderness meets world-class luxury.",
    category: "Botswana",
    readTime: "5 min read",
    date: "July 2026",
    heroImage: "https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/Botswana%20elephants",
  },
];

export const articleContent: Record<string, React.ComponentType> = {
  "ultimate-first-time-guide-to-cape-town": CapeTownArticle,

  // Add these as you create them:

   "what-to-pack-for-an-african-safari": SafariPackingArticle,
  "hidden-gems-of-zimbabwe": ZimbabweArticle,
  "luxury-safaris-in-botswana": BotswanaArticle,
};