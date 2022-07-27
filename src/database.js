import mongoose from "mongoose";
import "dotenv/config";

// const MONGO_URL = process.env.MONGO_URL;

const connect = async (tentativa = 1) => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:chavatte@aula.274em.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Conectado!");
  } catch (e) {
    console.error("Não consegui me conectar ao banco!", e);
    setTimeout(() => connect(tentativa + 1), 3000 ** tentativa);
  }
};

connect();
