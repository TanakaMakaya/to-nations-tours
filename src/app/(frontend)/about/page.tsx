
import config from "@payload-config";
import { getPayload } from "payload";
import AboutPageClient from "./AboutPageClient";

export default async function AboutPage() {
  const payload = await getPayload({ config });

  const aboutPage = await payload.findGlobal({
    slug: "about-page",
    depth: 2,
  });

  return <AboutPageClient content={aboutPage} />;
}