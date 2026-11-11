
import Hero from "@/components/hero";
import CuratedJourneys from "@/components/CuratedJourneys";
import WhyChooseUs from "@/components/WhyChooseUs";
import config from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({ config });

  const homePage = await payload.findGlobal({
    slug: "home-page",
  });

  return (
    <>
      <Hero content={homePage.hero} />
      <CuratedJourneys />
      <WhyChooseUs />
    </>
  );
}
