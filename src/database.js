import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect("mongodb://mongoDB:27017/imgNetwork");

    console.log("Conexión a la base de datos establecida.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};
