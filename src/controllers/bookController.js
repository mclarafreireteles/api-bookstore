import book from "../models/Book.js";

class BookController {

    static async listBooks (req, res) {
        const listBooks = await book.find({});
        res.status(200).json(listBooks)
    };

    static async registerBook (req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: newBook })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar novo livro` })        
        }
    }

}

export default BookController;