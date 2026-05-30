import path from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import { helpers } from "./helpers.js";
import morgan from "morgan";
import multer from "multer";
import express from "express";
import index from "../routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ dest: path.join(__dirname, "/public/uploads") });

export const config = (app) => {
  app.set("port", process.env.PORT || 3000);
  app.set("views", path.join(__dirname, "views"));
  app.engine(
    ".hbs",
    engine({
      defaultLayout: "main",
      partialsDir: path.join(app.get("views"), "partials"),
      layoutsDir: path.join(app.get("views"), "layouts"),
      extname: ".hbs",
      helpers: helpers(),
    }),
  );

  // Handlebars as the view
  app.set("view engine", ".hbs");

  // Middleware
  app.use(morgan("dev"));
  app.use(upload.single("image"));
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Routes
  app.use("/", index);

  // Static files
  app.use(express.static(path.join(__dirname, "../public")));

  return app;
};
