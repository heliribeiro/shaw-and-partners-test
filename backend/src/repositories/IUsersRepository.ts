import { Prisma, User } from "@prisma/client";

export interface IUsersRespository {
  findByName(name: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User>;
  list(prop?: string): Promise<User[]>;
}
