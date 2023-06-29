import "express-async-errors";
import express, { Application, json } from "express";
import middlewares from "./middlewares";
import { moviesRouter } from "./routers";


const app: Application = express();
app.use(json());

app.use("/movies", moviesRouter);

app.use(middlewares.handleError)

export default app;