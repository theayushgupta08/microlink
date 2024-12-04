import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const shortURL = (await params).shortURL

    const client = await clientPromise;
    const db = client.db("Microlinks")
    const collection = db.collection("url")

    const doc = await collection.findOne({ shortURL: shortURL })
    console.log(doc)
    if (doc) {
        redirect(doc.url)
    }
    else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`)
    }


    return <div>My Post: {url}</div>
}