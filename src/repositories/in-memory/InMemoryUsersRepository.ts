import { Prisma, User } from "@prisma/client";
import { IUsersRespository } from "../IUsersRepository";

export class InMemoryUsersRepository implements IUsersRespository {
  public users: User[] = [];

  async findByName(name: string): Promise<User | null> {
    const user = this.users.find((user) => user.name === name);
    if (!user) return null;
    return user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: "uuid",
      name: data.name,
      city: data.city,
      country: data.country,
      favorite_sport: data.favorite_sport,
    };
    this.users.push(user);
    return user;
  }

  async list(prop?: string | undefined): Promise<User[]> {
    if (!prop) return this.users;
    const users = this.users.filter(
      (user) =>
        user.name.includes(prop) ||
        user.city.includes(prop) ||
        user.country.includes(prop) ||
        user.favorite_sport.includes(prop)
    );
    return users;
  }
}
