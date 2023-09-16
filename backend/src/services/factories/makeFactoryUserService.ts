import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { UserService } from "../UserService";

export function makeFactoryUserService() {
  const usersRepository = new PrismaUsersRepository();
  const usersService = new UserService(usersRepository);
  return usersService;
}
