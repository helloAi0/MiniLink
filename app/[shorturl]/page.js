import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shorturl = (await params).shorturl

    const client = await clientPromise;
    const db = client.db("minilink")
    const collection = db.collection("url")

    // 1. Perform the update
    const result = await collection.findOneAndUpdate(
        { shorturl: shorturl },
        { $inc: { clicks: 1 } },
        { returnDocument: 'after' }
    );

    // 2. SAFE CHECK: If result is null, the link doesn't exist in DB
    if (!result) {
        return redirect("/");
    }

    // 3. Handle different MongoDB Driver versions
    // Some return the doc directly, some return it inside a .value property
    const doc = result.value ? result.value : result;

    if (doc && doc.url) {
        // 4. Ensure it's an absolute URL
        const destination = doc.url.startsWith('http') ? doc.url : `https://${doc.url}`;
        return redirect(destination);
    } else {
        return redirect("/");
    }
}