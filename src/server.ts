import { app } from "./app";
import { UserRoutes } from "./http/routes/users.routes";

app.register(UserRoutes, { prefix: "users" });

app
  .listen({
    host: "0.0.0.0",
    port: 3000,
  })
  .then(() => {
    console.log("Server is running");
  });
