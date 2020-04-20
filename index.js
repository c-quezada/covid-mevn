import express, { json, urlencoded } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";

// Mongo BD
const dbHost = "mongodb://localhost:27017/menv-covid";
mongoose
  .connect(dbHost, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => console.log("MongoDB connected: ", response))
  .catch((error) => console.log("MongoDB Error: ", error.name));

mongoose.Promise = global.Promise;

// Load Express Framework
const app = express();

// Request Logs
app.use(morgan("dev"));

// Permit request from outside server
app.use(cors());

// Use JSON request/response
app.use(json());
app.use(urlencoded({ extended: true }));

// Set public project path
app.use(express.static(path.join(__dirname, "public")));

// Set default port
app.set("port", process.env.PORT || 3000);
const port = app.get("port");

app.listen(port, () => {
  console.log("Runnig on ", port);
});
