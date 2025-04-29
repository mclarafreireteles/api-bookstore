import book from "../models/Book.js";

class BookController {

    static async listBooks (req, res) {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks)
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static async listBooksById (req, res) {
        try {
            const id = req.params.id
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook)
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };

    static async registerBook (req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: newBook })
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar novo livro` })        
        }
    }

    static async updateBookById (req, res) {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    };
}

export default BookController;