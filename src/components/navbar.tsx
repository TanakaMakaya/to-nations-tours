import config from "@payload-config";
import { getPayload } from "payload";
import NavbarClient from "@/components/NavbarClient";

export default async function Navbar() {
  const payload = await getPayload({ config });

  const settings = await payload.findGlobal({
    slug: "site-settings",
    depth: 1,
  });

  return <NavbarClient settings={settings} />;
}