import { IUserCreate } from "../interfaces/UserInterface";
import { SavedMultipartFile } from "@fastify/multipart";

import csv from "csv-parser";

import fs from "fs";
import { IUsersRespository } from "../repositories/IUsersRepository";
class UserService {
  constructor(private usersRepository: IUsersRespository) {}
  async createUser({ name, city, country, favorite_sport }: IUserCreate) {
    await this.usersRepository.create({
      name,
      city,
      country,
      favorite_sport,
    });
  }

  async createUsersfromCSV(svgFile: SavedMultipartFile) {
    const { filepath } = svgFile;

    const results: IUserCreate[] = [];

    fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        for (let user of results) {
          const userExists = await this.usersRepository.findByName(user.name);

          if (userExists) continue;

          await this.usersRepository.create({
            name: user.name,
            city: user.city,
            country: user.country,
            favorite_sport: user.favorite_sport,
          });
        }
      });
  }

  async listUsers(prop?: string) {
    return await this.usersRepository.list(prop);
  }
}

export { UserService };
