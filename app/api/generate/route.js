import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("Microlinks")
    const collection = db.collection("url")

    // Check if the short URL exists
    const doc = await collection.findOne({ shortURL: body.shortURL })
    if (doc) {
        return Response.json({ success: false, error: true, message: 'URL already exists.' })
    }

    const result = await collection.insertOne({
        url: body.url,
        shortURL: body.shortURL
    })


    return Response.json({ success: true, error: false, message: 'URL generated successfully!' })
}