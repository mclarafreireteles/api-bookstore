import express from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router()

routes.get("/books", BookController.listBooks)
routes.get("/books/:id ", BookController.listBooksById)


routes.post("/books", BookController.registerBook)

routes.put("/books/:id", BookController.updateBookById)

routes.delete("/books/:id", BookController.deleteBookById)


export default routes;