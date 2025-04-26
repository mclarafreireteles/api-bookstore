import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Estou enviando uma resposta!")
})

export default app