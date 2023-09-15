import { prisma } from "../connection";
import { IUserCreate } from "../interfaces/UserInterface";

class UserService {
  async createUser({ name, city, country, favorite_sport }: IUserCreate) {
    const result = await prisma.user.create({
      data: {
        name,
        city,
        country,
        favorite_sport,
      },
    });
  }

  async createUsersfromCSV(users: IUserCreate[]) {}

  async listUsers(prop?: string) {
    return await prisma.user.findMany();
  }
}

export default new UserService();
