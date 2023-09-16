import { describe, expect, it } from "vitest";
import { InMemoryUsersRepository } from "../repositories/in-memory/InMemoryUsersRepository";
import { UserService } from "./UserService";

describe("User service", () => {
  it("Shoulf be able to create an user", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const userService = new UserService(usersRepository);

    const user = await userService.createUser({
      name: "John Doe",
      city: "New York",
      country: "USA",
      favorite_sport: "Football",
    });

    expect(user).toHaveProperty("id");
  });
});
