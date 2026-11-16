
import config from "@payload-config";
import { getPayload } from "payload";
import PackagesPageClient from "./PackagesPageClient";

export default async function PackagesPage() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "packages",
    where: {
      status: {
        equals: "published",
      },
    },
    depth: 2,
    sort: "title",
    limit: 100,
  });

  return <PackagesPageClient packages={result.docs} />;
}
