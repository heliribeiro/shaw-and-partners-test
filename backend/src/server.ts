import { app } from "./app";
import { FileRoutes } from "./http/routes/files.routes";
import { UserRoutes } from "./http/routes/users.routes";

import multipart from "@fastify/multipart";
import cors from "@fastify/cors";

app.register(multipart, {
  limits: {},
});

app.register(cors, {
  origin: "*",
});

app.register(UserRoutes, { prefix: "api/users" });
app.register(FileRoutes, { prefix: "api/files" });

app
  .listen({
    host: "0.0.0.0",
    port: 3000,
  })
  .then(() => {
    console.log("Server is running");
  });
