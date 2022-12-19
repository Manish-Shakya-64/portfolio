import express from "express";
import { userRouter } from "./routes/User.js";
import cookieParser from "cookie-parser";
export const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1", userRouter);
