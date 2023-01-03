import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_USERNAME = process.env.DB_USERNAME;
const MONGO_PASSWORD = process.env.DB_PASSWORD;

const MongoDBConnect = () => {
  const MONGODB_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-dswibul-shard-00-00.bdcpgqs.mongodb.net:27017,ac-dswibul-shard-00-01.bdcpgqs.mongodb.net:27017,ac-dswibul-shard-00-02.bdcpgqs.mongodb.net:27017/?ssl=true&replicaSet=atlas-dzlngx-shard-0&authSource=admin&retryWrites=true&w=majority`;
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
  mongoose.connection.on("connected", () =>
    console.log("MongoDB Connected Successfully!")
  );
  mongoose.connection.on("disconnected", () => console.log("DB Disconnected"));
  mongoose.connection.on("error", (error) =>
    console.log("Error Connecting", error.message)
  );
};

export default MongoDBConnect;
