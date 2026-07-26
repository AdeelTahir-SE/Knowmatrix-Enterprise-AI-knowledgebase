import mongodb from "mongodb";
const MongoClient = new mongodb.MongoClient("mongodb+srv://adeeltahir6a_db_user:03127031469Adeel@cluster0.ghfdkkd.mongodb.net/?appName=Cluster0");
const client = await MongoClient.connect();

export async function getUserById(userId) {
  const db = client.db("auth-service");
  const user = await db.collection("users").findOne({ _id: new mongodb.ObjectId(userId) });
  client.close();
  return user;
}
