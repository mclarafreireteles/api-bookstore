import mongoose from "mongoose";


async function connectDatabase() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Conexão com o banco de dados estabelecida com sucesso.");
        return mongoose.connection;
    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
        throw error;
    }
};

export default connectDatabase;


