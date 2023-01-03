import express from "express";
import cors from "cors";

import MongoDBConnect from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", Routes);

const PORT = 8000;
MongoDBConnect();
app.listen(PORT, () => {
  console.log(`Local Server running at Port ${PORT}`);
});
