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

app.get("/livros/:id", async (req, res) => {
    const foundBook = await Book.findById(req.params.id);
    res.status(200).json(foundBook)
})
app.put("/livros/:id", async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    res.status(200).json(updatedBook)
})

app.delete("/livros/:id", async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).send("Livro removido com sucesso")
})

app.post("/livros", async (req, res) => {
    const newBook = await Book.create(req.body);
    res.status(200).json(newBook)
})


export default app;
