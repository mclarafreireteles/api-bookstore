import book from "../models/Book.js";

class BookController {

    static async listBooks (req, res) {
        try {
            const listBooks = await book.find({}).populate("author").exec();
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
            const populatedBook = await book.findById(newBook._id).populate('author');
            res.status(201).json({ message: "Criado com sucesso", book: populatedBook })
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

    static async deleteBookById (req, res) {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).send("Livro removido com sucesso")
        } catch (err) {
            res.status(500).json({ message: `${err.message}` });
        }
    };

    static async listBooksByPublisher (req, res) {
        const publisher = req.query.editora;
        try {
            const bookByPublisher  = await book.find({ editora: publisher });
            res.status(200).json(bookByPublisher)
        } catch (err) {
            res.status(500).json({ message: `${err.message}` })
        }
    }
}

export default BookController;