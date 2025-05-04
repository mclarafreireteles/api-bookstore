import { author } from "../models/Author.js";

class AuthorController {

    static listAuthors = async (req, res) => {
        try {
            const listAuthors = await author.find();
            res.status(200).json(listAuthors)
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static listAuthorsById  = async (req, res, next) => {
        try {
            const id = req.params.id
            const foundAuthor = await author.findById(id);

            if (foundAuthor !== null) {
                res.status(200).json(foundAuthor)
            } else {
                res.status(404).send({ message:"Id de autor não localizado" });

            }
        } catch (err) {
            next(err)
        }
    };

    static registerAuthor = async (req, res, next)  => {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", author: newAuthor })
        } catch (err) {
            next(err);
        }
    }

    static updateAuthorById = async (req, res, next) => {
        try {
            const id = req.params.id
            await author.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).json({message: "Autor atualizado"});
        } catch (err) {
            next(err);
        }
    };

    static  deleteAuthorById  = async (req, res, next) => {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).send("Autor removido com sucesso")
        } catch (err) {
            next(err);
        }
    }
}

export default AuthorController;