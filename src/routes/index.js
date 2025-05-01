import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Bem vindo a livraria"));

    app.use(express.json(), books, authors);
}

export default routes;