
import config from "@payload-config";
import { getPayload } from "payload";
import ActivitiesPageClient from "./ActivitiesPageClient";

export const dynamic = "force-dynamic";

export default async function ActivitiesPage() {
  const payload = await getPayload({ config });

  const result = await payload.find({
    collection: "activities",
    where: {
      status: {
        equals: "published",
      },
    },
    depth: 1,
    sort: "name",
    limit: 100,
  });

  return <ActivitiesPageClient activities={result.docs} />;
}
