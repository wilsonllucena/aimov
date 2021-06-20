import "reflect-metadata";
import 'dotenv/config';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';

import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import "./shared/database/typeorm";
import "@shared/container";
import { resolveError } from "./middlewares/resolveError";

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router);
app.use(resolveError);
app.listen(3333, () => console.debug("Server running!"))