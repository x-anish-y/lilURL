import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("lilURL");
  const collection = db.collection("url");

  
  
  const doc = await collection.findOne({ shorturl });
  console.log("PARAM:", params.shorturl);
console.log("DOC:", doc);

  if (!doc || !doc.url) {
    redirect(process.env.NEXT_PUBLIC_HOST);
  }

  const target =
    doc.url.startsWith("http://") || doc.url.startsWith("https://")
      ? doc.url
      : `https://${doc.url}`;

  redirect(target);
}
