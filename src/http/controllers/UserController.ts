import { FastifyReply, FastifyRequest } from "fastify";

import UserService from "../../services/UserService";
import { z } from "zod";

export async function createuser(request: FastifyRequest, reply: FastifyReply) {
  const createUsereBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    country: z.string(),
    favorite_sport: z.string(),
  });

  try {
    const { name, city, country, favorite_sport } = createUsereBodySchema.parse(
      request.body
    );
    const result = await UserService.createUser({
      name,
      city,
      country,
      favorite_sport,
    });
    return reply
      .status(201)
      .send({ message: "User created successfully", result });
  } catch (error: any) {
    return reply.status(400).send({ message: error?.issues[0] });
  }
}

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  const createUsereBodySchema = z.object({
    q: z.string().optional(),
  });

  try {
    const { q } = createUsereBodySchema.parse(request.query);

    const users = await UserService.listUsers();

    return reply.status(201).send({ message: "Users found", users });
  } catch (error: any) {
    return reply.status(400).send({ message: error?.issues[0] });
  }
}
