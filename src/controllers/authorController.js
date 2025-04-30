import author from "../models/Author.js";

class AuthorController {

    static async listAuthors (req, res) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors)
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static async listAuthorsById (req, res) {
        try {
            const id = req.params.id
            const foundAuthor = await author.findById(id);
            res.status(200).json(foundAuthor)
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static async registerAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", author: newAuthor })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar novo autor` })        
        }
    }

    static async updateAuthorById (req, res) {
        try {
            const id = req.params.id
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Autor atualizado"});
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static async deleteAuthorById (req, res) {
        try {
            await author.findByIdAndDelete(req.params.id);
            res.status(200).send("Autor removido com sucesso")
        } catch (err) {
            res.status(500).json({ message: `${err.message}` });
        }
    }
}

export default AuthorController;