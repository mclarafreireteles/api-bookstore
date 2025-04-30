import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router()

routes.get("/authors", AuthorController.listAuthors)
routes.get("/authors/:id ", AuthorController.listAuthorsById)


routes.post("/authors", AuthorController.registerAuthor)

routes.put("/authors/:id", AuthorController.updateAuthorById)

routes.delete("/books/:id", AuthorController.deleteAuthorById)


export default routes;