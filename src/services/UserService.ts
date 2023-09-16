import { prisma } from "../connection";
import { IUserCreate } from "../interfaces/UserInterface";
import { SavedMultipartFile } from "@fastify/multipart";

import csv from "csv-parser";

import fs from "fs";
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

  async createUsersfromCSV(svgFile: SavedMultipartFile) {
    const { filepath } = svgFile;

    const results: IUserCreate[] = [];

    fs.createReadStream(filepath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        for (let user of results) {
          const userExists = await prisma.user.findFirst({
            where: {
              name: user.name,
            },
          });

          if (userExists) continue;

          await prisma.user.create({
            data: {
              name: user.name,
              city: user.city,
              country: user.country,
              favorite_sport: user.favorite_sport,
            },
          });
        }
      });
  }

  async listUsers(prop?: string) {
    return await prisma.user.findMany();
  }
}

export default new UserService();
