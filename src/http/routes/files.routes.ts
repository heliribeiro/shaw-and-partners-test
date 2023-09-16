import { FastifyInstance } from "fastify";

import { createUsersfromCSV } from "../controllers/UserController";

export async function FileRoutes(app: FastifyInstance) {
  app.post("/", createUsersfromCSV);
}
