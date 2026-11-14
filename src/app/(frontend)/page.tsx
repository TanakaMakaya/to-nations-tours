
import Hero from "@/components/hero";
import CuratedJourneys from "@/components/CuratedJourneys";
import WhyChooseUs from "@/components/WhyChooseUs";
import config from "@payload-config";
import { getPayload } from "payload";
import type { Package, HomePage as HomePageType } from "@/payload-types";

export default async function Home() {
  const payload = await getPayload({ config });

  const homePage = await payload.findGlobal({
    slug: "home-page",
    depth: 2,
  });

  const featuredPackages = (homePage.featuredPackages ?? []).filter(
    (item): item is Package =>
      typeof item === "object" &&
      item !== null &&
      item.status === "published",
  );

  return (
    <>
      <Hero content={homePage.hero} />
      <CuratedJourneys packages={featuredPackages} />
      <WhyChooseUs
        features={homePage.whyChooseUs ?? []}
        section={homePage.whyChooseUsSection}
      />
    </>
  );
}
