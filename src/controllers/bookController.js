import book from "../models/Book.js";

class BookController {
    
    static listBooks = async (req, res, next) => {
        try {
            const listBooks = await book.find({}).populate("author").exec();
            res.status(200).json(listBooks)
        } catch (err) {
            next(err);
        }
    };

    static listBooksById  = async (req, res, next) => {
        try {
            const id = req.params.id
            const foundBook = await book.findById(id);
            res.status(200).json(foundBook)
        } catch (err) {
            next(err);
        }
    };

    static registerBook  = async (req, res, next) => {
        try {
            const newBook = await book.create(req.body);
            const populatedBook = await book.findById(newBook._id).populate('author');
            res.status(201).json({ message: "Criado com sucesso", book: populatedBook })
        } catch (err) {
            next(err);    
        }
    }

    static updateBookById = async (req, res, next) => {
        try {
            const id = req.params.id
            await book.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).json({message: "livro atualizado"});
        } catch (err) {
            next(err);
        }
    };

    static deleteBookById = async (req, res, next) => {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).send("Livro removido com sucesso")
        } catch (err) {
            next(err);
        }
    };

    static listBooksByPublisher = async (req, res, next) => {
        const publisher = req.query.editora;
        try {
            const bookByPublisher  = await book.find({ "publisher": publisher });
            res.status(200).json(bookByPublisher)
        } catch (err) {
            next(err);
        }
    }
}

export default BookController;