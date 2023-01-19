import express from "express";
import Connection from "./db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";
import cors from "cors";
import dotenv from "dotenv";
import * as path from "path";

const app = express();
dotenv.config();
app.use(cors());
app.use("/", Route);

const PORT = process.env.PORT || 8000;
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "..", "news", "build")));

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

DefaultData();
