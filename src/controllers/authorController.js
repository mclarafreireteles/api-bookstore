import mongoose from "mongoose";
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

    static listAuthorsById  = async (req, res) => {
        try {
            const id = req.params.id
            const foundAuthor = await author.findById(id);

            if (foundAuthor !== null) {
                res.status(200).json(foundAuthor)
            } else {
                res.status(404).send({ message:"Id de autor não localizado" });

            }
        } catch (err) {
            if (err instanceof mongoose.Error.CastError) {
            res.status(400).send({ message:"Um ou mais dados fornecidos estão incorretos" });
            } else {
                res.status(500).send({ message:"Erro interno do servidor" });
            }
        }
    };

    static registerAuthor = async (req, res)  => {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", author: newAuthor })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar novo autor` })        
        }
    }

    static updateAuthorById = async (req, res) => {
        try {
            const id = req.params.id
            await author.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).json({message: "Autor atualizado"});
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static  deleteAuthorById  = async (req, res) => {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
            res.status(200).send("Autor removido com sucesso")
        } catch (err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }
}

export default AuthorController;