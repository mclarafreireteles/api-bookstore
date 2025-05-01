import express from "express";
import connectDatabase from "./config/dbconnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase()

connection.on("error", (err) => {
    console.error("erro de conexão", err)
})

connection.once("open", () => {
    console.log("conexao com o banco feita com sucesso!");
})

const app = express()

routes(app);

export default app;