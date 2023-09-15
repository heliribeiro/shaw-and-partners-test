import { FastifyInstance } from "fastify";

import { createuser, listUsers } from "../controllers/UserController";

export async function UserRoutes(app: FastifyInstance) {
  app.post("/", createuser);

  app.get("/", listUsers);
}
