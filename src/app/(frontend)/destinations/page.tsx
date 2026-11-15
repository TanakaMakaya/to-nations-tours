
import config from "@payload-config";
import { getPayload } from "payload";
import DestinationsPageClient from "./DestinationsPageClient";

export default async function DestinationsPage() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "destinations",
    where: {
      status: {
        equals: "published",
      },
    },
    depth: 1,
    sort: "name",
    limit: 100,
  });

  return <DestinationsPageClient destinations={result.docs} />;
}
