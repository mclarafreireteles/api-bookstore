import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: [true, "O nome do livro é obrigatório"] },
    publisher: { type: String },
    price: { type: Number },
    pages: { type: Number },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: [true, "O autor é obrigatório"]  }
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;