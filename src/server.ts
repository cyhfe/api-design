import express from "express";
import morgan from "morgan";
import router from "./router";
import cors from "cors";
import { protect, signin } from "./modules/auth";
import { createUser } from "./handlers/user";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);
app.post("/user", createUser);
app.post("/signin", signin);

export default app;
