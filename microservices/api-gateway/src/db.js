import mongodb from "mongodb";

let cachedClient = null;

async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI environment variable is missing");
  }

  const client = new mongodb.MongoClient(process.env.MONGO_URI);
  cachedClient = await client.connect();
  return cachedClient;
}

export async function getUserById(userId) {
  const client = await getClient();
  const db = client.db("auth-service");
  const user = await db.collection("users").findOne({ _id: new mongodb.ObjectId(userId) });
  return user;
}
