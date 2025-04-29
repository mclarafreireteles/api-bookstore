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


app.delete("/livros/:id", async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).send("Livro removido com sucesso")
})


export default app;
