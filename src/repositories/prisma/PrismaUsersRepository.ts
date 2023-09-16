import { Prisma, User } from "@prisma/client";
import { IUsersRespository } from "../IUsersRepository";
import { prisma } from "../../connection";

export class PrismaUsersRepository implements IUsersRespository {
  async list(prop?: string | undefined): Promise<User[]> {
    const users = await prisma.user.findMany({
      where: {
        OR: [
          {
            name: {
              contains: prop,
            },
          },
          {
            city: {
              contains: prop,
            },
          },
          {
            country: {
              contains: prop,
            },
          },
          {
            favorite_sport: prop,
          },
        ],
      },
    });
    return users;
  }
  async findByName(name: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: { name },
    });
    return user;
  }
  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = await prisma.user.create({
      data,
    });
    return user;
  }
}
