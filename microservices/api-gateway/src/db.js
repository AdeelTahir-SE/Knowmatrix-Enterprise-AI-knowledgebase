import mongodb from "mongodb";
const MongoClient = new mongodb.MongoClient(process.env.MONGO_URI);
const client = await MongoClient.connect();

export async function getUserById(userId) {
  const db = client.db("auth-service");
  const user = await db.collection("users").findOne({ _id: new mongodb.ObjectId(userId) });
  client.close();
  return user;
}
