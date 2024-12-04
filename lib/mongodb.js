//Why to use MongoDb like this in NextJS - https://www.codewithharry.com/blogpost/%60how-to-integrate-mongodb-into-your-nextjs-apps%60/


import { MongoClient } from 'mongodb'


//Created uri of name MONGODB_URI from env.local
const uri = process.env.MONGODB_URI
const options = {
    useNewUrlParser: true,
}

let client
let clientPromise

if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
}

//Creating global MongoDBPromise Client so that for every connections we have not to open the mongodb connection
if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, options)
    clientPromise = client.connect()
}

export default clientPromise
