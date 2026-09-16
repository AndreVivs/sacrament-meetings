import { headers } from "next/headers";

export async function getBaseUrl(): Promise<string> {
  const headersList = await headers();

  const host: string =
    headersList.get("host") ?? "localhost:3000";

  const protocol: string =
    process.env.NODE_ENV === "development"
      ? "http"
      : "https";

  return `${protocol}://${host}`;
}