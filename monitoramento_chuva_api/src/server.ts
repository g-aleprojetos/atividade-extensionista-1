import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import cors from 'cors';
import gracefulShutdown from "http-graceful-shutdown";
import http from "http";
import { router } from "./routes";
import dorenv from "dotenv/config.js";

const app = express();

const allowedOrigins = [`${process.env.ALLOWED_ORIGINS}`];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};


app.use(cors(options));
app.use(express.json());
app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  return response.json({
    status: "Error",
    message: error.message,
  })
})

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.write("Meu servidor HTTP rodando no Docker");
    res.end();
  }, 20000);
});

app.listen(5000, () => console.log('Server is running en port 5000'));
gracefulShutdown(server);