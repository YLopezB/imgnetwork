import express from "express";
import { config } from "./server/config.js";
import { connection } from "./database.js";

connection();

const app = config(express());

app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
